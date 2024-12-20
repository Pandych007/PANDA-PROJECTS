const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


//Этот код - это функция `reportWebVitals`, которая принимает колбэк `onPerfEntry`. Функция предназначена для измерения различных метрик производительности веб-приложения с помощью библиотеки `web-vitals`.

// Давайте подробно разберем, что делает каждая часть этого кода:

// 1. `const reportWebVitals = onPerfEntry => { ... }`: Это объявление функции `reportWebVitals`. Она принимает один аргумент - колбэк `onPerfEntry`, который будет вызван после того, как будут получены данные о производительности.

// 2. `if (onPerfEntry && onPerfEntry instanceof Function) { ... }`: Это условие проверяет, что `onPerfEntry` существует и является функцией. Если это так, выполняется следующий блок кода.

// 3. `import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { ... })`: Это асинхронный импорт модуля `web-vitals`. Когда модуль будет загружен, выполняется 
//функция обратного вызова, которая получает объект с функциями `getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB` из импортированного модуля.

// 4. `getCLS(onPerfEntry);`, `getFID(onPerfEntry);`, `getFCP(onPerfEntry);`, `getLCP(onPerfEntry);`, `getTTFB(onPerfEntry);`: Здесь вызываются функции для измерения конкретных метрик 
//производительности. Каждая функция принимает `onPerfEntry` в качестве аргумента, который представляет собой колбэк для передачи данных о метрике после их получения.

// Таким образом, этот код предоставляет механизм для измерения различных метрик производительности веб-приложения с помощью `web-vitals`, и передает результаты измерений через переданный колбэк `onPerfEntry`.