import { useState } from 'react';
// 1. `import { useState } from 'react';`: Эта строка импортирует функцию `useState` из библиотеки React. `useState` - это хук, который позволяет добавлять состояние в функциональные компоненты React.
function App() {
  // 2. `function App() {`: Объявление функционального компонента `App`.
  const [items, setItems] = useState([
// 3. `const [items, setItems] = useState([...]);`: Используется хук `useState`, чтобы создать состояние `items` и функцию `setItems`, которая позволяет изменять это состояние. Передается начальное значение массива объектов.
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const AddItem = () => {
// 4. `const AddItem = () => { ... }`: Объявление функции `AddItem`, которая запрашивает у пользователя информацию о новом товаре и добавляет его в состояние `items`.
    const newItemName = prompt('Введите название товара:');
    const newItemPrice = prompt('Введите цену товара:');
    const newItem = {
      id: Date.now(),
      name: newItemName,
      price: Number(newItemPrice),
      count: 1
    };
    setItems([...items, newItem]);
  };

  const Increment = (id) => {
    
// 5. `const Increment = (id) => { ... }`: Объявление функции `Increment`, которая увеличивает количество товара с указанным `id` на 1.

    const updatedItems = items.map((item) => {
      if (item.id === id && item.count < 25) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const Decrement = (id) => {
    // 6. `const Decrement = (id) => { ... }`: Объявление функции `Decrement`, которая уменьшает количество товара с указанным `id` на 1.


    const updatedItems = items.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const RemoveItem = (id) => {
    // 7. `const RemoveItem = (id) => { ... }`: Объявление функции `RemoveItem`, которая удаляет товар с указанным `id` из состояния `items`.

    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const DoubleClick = (id) => {
    // 8. `const DoubleClick = (id) => { ... }`: Объявление функции `DoubleClick`, которая удаляет товар с указанным `id` из состояния `items`, если его количество равно 0.
    
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count === 0) {
        return null;
        
// 9. `return ( ... );`: Функция компонента `App` возвращает JSX, описывающий его структуру.для строки 64 68 73
      }
      return item;
    }).filter(Boolean);
    setItems(updatedItems);
  };

  return (
    <div className='box'>  ..10. `<div className='box'> ... </div>`: Обертка компонента с классом 'box'.
      <button onClick={AddItem}>Добавить товар</button>
      <ul>
        {items.map((item) => (
          <li key={item.id} onDoubleClick={() => DoubleClick(item.id)}>
            <div className="item-container">
              
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.price} руб. x {item.count} шт. = {item.price * item.count} руб.</p>
                <button onClick={() => Increment(item.id)}>+</button>
                <button onClick={() => Decrement(item.id)}>-</button>
                <button onClick={() => RemoveItem(item.id)}>Удалить</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




// пояснение ко всему коду 
// Давайте разберем каждую строку из данного кода подробно, а затем рассмотрим примеры функций, используемых в коде:








// 11. `<button onClick={AddItem}>Добавить товар</button>`: Кнопка для добавления нового товара, которая вызывает функцию `AddItem` при клике.

// 12. `<ul> ... </ul>`: Неупорядоченный список, в котором будут отображаться товары.

// 13. `{items.map((item) => ( ... ))}`: JavaScript-выражение для отображения элементов массива `items` в JSX. Используется для создания списка товаров.

// 14. `<li key={item.id} onDoubleClick={() => DoubleClick(item.id)}> ... </li>`: Элемент списка, устанавливающий уникальный ключ и обработчик двойного щелчка, который вызывает функцию `DoubleClick` с `id` товара.

// 15. `<button onClick={() => Increment(item.id)}>+</button>`: Кнопка для увеличения количества товара, вызывающая функцию `Increment` с `id` товара при клике.

// 16. `<button onClick={() => Decrement(item.id)}>-</button>`: Кнопка для уменьшения количества товара, вызывающая функцию `Decrement` с `id` товара при клике.

// 17. `<button onClick={() => RemoveItem(item.id)}>Удалить</button>`: Кнопка для удаления товара, вызывающая функцию `RemoveItem` с `id` товара при клике.

// Примеры функций:

// - `useState`: в строке `const [items, setItems] = useState([...]);` используется для управления состоянием списка товаров.
// - `prompt`: функция, которая отображает диалоговое окно с сообщением и ждет, пока пользователь введет текст. В данном коде используется для запроса имени и цены нового товара.
// - `map`: метод массива JavaScript, используемый для преобразования каждого элемента массива в новый элемент на основе переданной функции.
// - `filter`: метод массива, который создает новый массив с элементами, прошедшими проверку, заданную в переданной функции.
// - `Date.now()`: возвращает количество миллисекунд, прошедших с 1 января 1970 года UTC.
// - `Boolean`: глобальный объект JavaScript, который является конструктором для примитивного типа данных Boolean. В данном коде используется для удаления `null` значений из массива.

// Эти функции и методы помогают в управлении списком товаров и их количеством в интерфейсе приложения.