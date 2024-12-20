// Код, который вы предоставили, использует метод ReactDOM.createRoot 
// для рендеринга приложения React. Однако это немного устаревший подход. В современных версиях React 
// обычно используется метод ReactDOM.render для инициализации рендеринга.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import './App.css' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
// В этом обновленном коде используется метод ReactDOM.render, чтобы заменить
//  устаревший метод createRoot. Кроме того, я также обернул компонент <App /> в <React.StrictMode>, 
//  что поможет 
// обнаружить и предотвратить некоторые потенциальные проблемы в вашем коде.