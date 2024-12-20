import React, { Component } from 'react';
// import: Это ключевое слово в JavaScript для импорта модулей из других файлов.
// React: Это библиотека JavaScript для создания пользовательских 
//интерфейсов. В данном случае, мы импортируем React.
// { Component }: Это деструктурированный импорт, который позволяет нам импортировать 
//только Component из модуля react. Component является базовым классом для создания React-компонентов.
// from 'react';: Это указывает на то, откуда мы импортируем модуль react, который у нас 
//установлен как зависимость в проекте.
import { Routes, Route } from 'react-router-dom';
//Здесь мы импортируем компоненты Routes и Route из модуля 'react-router-dom'. Этот модуль 
//используется для управления маршрутизацией в React-приложениях.

import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';
//Здесь мы импортируем компоненты ProductsPage, ProductPage и NotFoundPage из файлов 
//'./ProductsPage', './ProductPage' и './NotFoundPage' соответственно. Предполагается, что 
//они представляют собой различные страницы приложения.
class App extends Component {
 // Мы определяем класс App, который расширяет базовый класс Component. Это означает, 
 //что App является React-компонентом и может использовать весь функционал, предоставляемый Component.
  state = {
    products: [],
  };
  //Здесь мы определяем начальное состояние компонента App. 
  // В этом случае, у нас есть только одно свойство products, 
  // которое является массивом и будет хранить информацию о продуктах.
  async componentDidMount() {
    try {

      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {

        throw new Error('Network response was not ok');
      }

      const products = await response.json();

      this.setState({ products });
    } catch (error) {

      console.error('There was a problem fetching the products: ', error);
    }
  }

  render() {
    return (
      <Routes>

        <Route path="/products" element={<ProductsPage products={this.state.products} />} />

        <Route path="/product/:id" element={<ProductPage products={this.state.products} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}
// Это метод render(), который возвращает JSX - синтаксический 
// сахар для описания структуры пользовательского интерфейса. В данном случае,
//  мы используем компоненты Routes и Route из react-router-dom для определения маршрутов в 
//  приложении. Каждый Route определяет отображение компонента, 
//  когда пользователь заходит по определенному маршруту. 
//  Например, когда пользователь переходит по маршруту /products, отображается компонент ProductsPage, 
//  который получает список продуктов из состояния компонента App. 
//  Когда пользователь переходит по маршруту /product/:id, отображается 
//  компонент ProductPage, который также получает список продуктов из 
//  состояния компонента App, но передает в качестве пропсов информацию о 
//  конкретном продукте по его id. 
// Если пользователь переходит по какому-либо другому маршруту, отображается компонент NotFoundPage.

// Экспорт компонента App как модуля по умолчанию
export default App;
