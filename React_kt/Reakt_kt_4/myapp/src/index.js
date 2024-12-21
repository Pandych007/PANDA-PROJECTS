import React from 'react';
//Эта строка импортирует библиотеку React из модуля 'react'. 
//React - это объект, содержащий функциональные и классовые компоненты React.
import ReactDOM from 'react-dom/client';
//Эта строка импортирует библиотеку ReactDOM из модуля 'react-dom/client'.
// ReactDOM используется для манипуляций с DOM в React, 
//включая отображение компонентов React на веб-странице.
import App from './App';
//Эта строка импортирует компонент App из файла './App'. 
//Этот компонент представляет собой основной компонент приложения.
import { createHashRouter, RouterProvider } from 'react-router-dom'

//Эта строка импортирует функции createHashRouter и RouterProvider из библиотеки 
//'react-router-dom'. createHashRouter используется для создания маршрутизатора, который 
//использует хэш-фрагменты URL для навигации. 
//RouterProvider предоставляет маршрутизатор в контексте приложения.

const router = createHashRouter([
  {
    path: '/*',
    element: <App />
  }
])

//Этот блок кода создаёт маршрутизатор с единственным маршрутом, 
//который соответствует любому пути ('/*') и отображает компонент <App />.


const root = ReactDOM.createRoot(document.getElementById('root'));

//Эта строка создаёт корневой контейнер ReactDOM, используемый для рендеринга 
//компонентов React. Он привязывается к элементу с идентификатором 'root' в DOM.

root.render(
  <RouterProvider router={router} />
);
//Эта строка рендерит компонент <RouterProvider> в корневой контейнер root. 
//Компонент <RouterProvider> оборачивает приложение, 
//предоставляя ему контекст маршрутизатора для использования во всем приложении.