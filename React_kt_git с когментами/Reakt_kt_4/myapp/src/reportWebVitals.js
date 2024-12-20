const reportWebVitals = onPerfEntry => {
  //Эта строка объявляет функцию reportWebVitals, которая принимает один аргумент onPerfEntry. 
  //Она использует синтаксис стрелочной функции.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Эта строка проверяет, что переменная onPerfEntry определена и является функцией. 
    // onPerfEntry instanceof Function - это проверка на то, что onPerfEntry является функцией.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
     //Эта строка использует динамический импорт для загрузки модуля 'web-vitals'.
     //Когда модуль будет загружен, выполнится метод then, 
     // который получает объект с функциями getCLS, getFID,
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
