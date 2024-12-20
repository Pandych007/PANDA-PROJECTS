// Импорт библиотеки React, хуков useState и useEffect, компонента ProductItem и стилей
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css'

// Определение компонента ProductList
const ProductList = () => {
  // Использование хука состояния для хранения списка продуктов
  const [products, setProducts] = useState([]);

  // Использование хука эффекта для загрузки данных о продуктах при монтировании компонента
  useEffect(() => {
    fetch('https://dummyjson.com/products') // Запрос к API
      .then(response => response.json()) // Преобразование ответа в JSON
      .then(data => { // Обработка полученных данных
        console.log(data);
        if (Array.isArray(data.products)) { // Проверка, является ли полученный список продуктов массивом
          setProducts(data.products); // Обновление состояния продуктов
        } else {
          console.error('Products array not found in data:', data); // Вывод ошибки, если список продуктов не найден
        }
      })
      .catch(error => console.error('Error fetching data:', error)); // Обработка ошибок при выполнении запроса
  }, []);

  // Функция для удаления продукта из списка
  const handleDelete = (deletedProduct) => {
    setProducts(products.filter(product => product !== deletedProduct)); // Обновление списка продуктов путем фильтрации удаленного продукта
  };

  // Возвращаемый JSX
  return (
    <div className="product-list">
      {products.map((product, index) => ( // Отображение списка продуктов
        <ProductItem key={index} product={product} onDelete={handleDelete} /> // Компонент элемента списка продуктов с передачей продукта и функции удаления
      ))}
    </div>
  );
};

// Экспорт компонента ProductList
export default ProductList;
