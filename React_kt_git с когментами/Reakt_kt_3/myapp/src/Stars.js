// Импорт библиотеки React
import React from 'react';

// Определение компонента Stars, который принимает рейтинг в качестве свойства
const Stars = ({ rating }) => {
  const stars = []; // Массив для хранения элементов звезд

  // Цикл для создания 5 звезд
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) { // Если текущий индекс меньше округленного вниз рейтинга
      stars.push(<span key={i} className="fa fa-star active"></span>); // Добавляем активную звезду
    } else if (i < rating) { // Если текущий индекс меньше рейтинга
      stars.push(<span key={i} className="fa fa-star-half-o active"></span>); // Добавляем полуактивную звезду
    } else { // Если текущий индекс больше или равен рейтингу
      stars.push(<span key={i} className="fa fa-star"></span>); // Добавляем неактивную звезду
    }
  }

  // Возвращаемый JSX
  return <div>{stars}</div>; // Возвращаем звезды внутри div
};

// Экспорт компонента Stars
export default Stars;

