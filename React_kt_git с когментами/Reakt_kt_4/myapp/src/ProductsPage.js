import React from 'react';
//Эта строка импортирует библиотеку React из модуля 'react'.
// React используется для создания пользовательских интерфейсов в приложениях на JavaScript.
import { Link } from 'react-router-dom';
// Эта строка импортирует компонент Link из библиотеки 'react-router-dom'. 
// Компонент Link используется для создания
//  ссылок между различными страницами в приложении React с использованием маршрутизации.
import StarRating from './StarRating';
// Эта строка импортирует компонент StarRating из локального файла './StarRating'. 
// Вероятно, это пользовательский компонент для отображения рейтинга продукта в виде звезд.
import './ProductsPage.css';
// Эта строка импортирует таблицу стилей CSS из локального файла './ProductsPage.css'. 
// Этот файл CSS, вероятно, содержит стили для компонента ProductsPage.

const ProductsPage = ({ products }) => {
  // Эта строка определяет функциональный компонент ProductsPage. 
  // Он принимает объект props, в котором предполагается, 
  // что есть свойство products, содержащее массив продуктов для отображения.
  return (
    <div className="products-grid">
    
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <StarRating rating={product.rating.rate} />
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};
// Этот блок кода представляет собой возвращаемый JSX (расширение JavaScript XML) компонент. 
// Внутри блока JSX мы используем JavaScript выражения, чтобы отобразить каждый 
// продукт из массива products в виде карточки с 
// изображением, названием, ценой, рейтингом и 
// ссылкой на подробную информацию о продукте.

export default ProductsPage;
// Эта строка экспортирует компонент ProductsPage для использования в других частях приложения. 
// Ключевое слово 'default' указывает, что это основной экспорт из этого модуля.
