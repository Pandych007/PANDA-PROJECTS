// Импорт библиотек React и ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Импорт компонента App
import App from './App';

// Создание корневого элемента с помощью метода createRoot из ReactDOM
// Этот метод используется для создания корневого элемента в DOM (в данном случае, элемент с id 'root')
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг приложения в строгом режиме
// Строгий режим помогает выявлять потенциальные проблемы в приложении
// Оборачивание приложения в <React.StrictMode> никак не влияет на производительность продакшн-сборки
root.render(
  <React.StrictMode>
    <App /> // Компонент App
  </React.StrictMode>
);
