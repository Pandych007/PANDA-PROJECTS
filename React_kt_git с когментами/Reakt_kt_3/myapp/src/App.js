// Импорт React и компонента ProductList
import React from 'react';
import ProductList from './ProductList';

// Определение компонента App
const App = () => {
  // Функция для прокрутки страницы до футера
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Прокрутка до конца страницы
      behavior: 'smooth' // Плавная прокрутка
    });
  };

  // Возвращаемый компонент
  return (
    <div>
      <header>
        <h1>My Shop</h1> // Заголовок сайта
        <button onClick={scrollToFooter}>Scroll to Footer</button> // Кнопка для прокрутки до футера
      </header>
      <ProductList /> // Компонент списка продуктов
      <footer>
        <p>Footer content here</p> // Контент футера
      </footer>
    </div>
  );
};

// Экспорт компонента App
export default App;
