import React from 'react';
// import React from 'react';
// Этот код импортирует библиотеку React из модуля 'react'.
 //React необходим для создания и работы с компонентами React.
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';:
// Этот код импортирует компонент Link из модуля 'react-router-dom'. Компонент Link используется для навигации внутри приложения
// React и обычно используется для создания гиперссылок на различные маршруты.

const NotFoundPage = () => {
  
// const NotFoundPage = () => {:
// Этот код объявляет функциональный компонент NotFoundPage. Он использует синтаксис стрелочных функций (() =>) для определения компонента. 
//Этот компонент будет использоваться для отображения содержимого страницы 404 "Не найдено".
  return (
    // return (:
// Этот код начинает оператор возврата, указывая, 
//что следующий JSX будет возвращен из компонента NotFoundPage.
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Link to="/products">Go to Products</Link>
    </div>
  );
};


export default NotFoundPage;





// <div>:
// Этот код начинает элемент <div>, который служит контейнером для содержимого страницы 404 "Не найдено".