// Импорт библиотеки React и компонента Stars
import React from 'react';
import Stars from './Stars'; // Компонент для отображения звёздного рейтинга

// Определение компонента ProductItem, который принимает продукт и функцию удаления в качестве свойств
const ProductItem = ({ product, onDelete }) => {
  // Деструктуризация свойств продукта
  const { title, description, price, rating } = product; // Добавляем свойство rating

  // Возвращаемый JSX
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} /> // Изображение продукта
      <div>
        <h3>{title}</h3> // Название продукта
        <p>{description}</p> // Описание продукта
        <p>Price: ${price}</p> // Цена продукта
        <Stars rating={rating} /> {/* Компонент звёздного рейтинга с передачей значения рейтинга */}
      </div>
      <button onClick={() => onDelete(product)}>Delete</button> // Кнопка удаления продукта
    </div>
  );
};

// Экспорт компонента ProductItem
export default ProductItem;
