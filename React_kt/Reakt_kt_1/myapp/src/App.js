import BlockHeader from './BlockHeader'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'
import BlockContent from './BlockContent'


function App() {
  return (
    <div>
      <BlockHeader/>
      <Block1/>
      <Block2/>
      <Block3/>
      <BlockContent/>
    </div>
  );
}

export default App;


// Этот код - это основной файл приложения React. Давайте разберем его по частям:

// 1. `import BlockHeader from './BlockHeader'`: 
// Эта строка импортирует компонент `BlockHeader` из 
// файла `BlockHeader.js` (или `.jsx`, в зависимости от расширения файлов в вашем проекте). Компоненты в
//  React обычно разделяются на отдельные файлы для лучшей организации кода.

// 2. Аналогично для остальных строк `import`, каждая из них импортирует компоненты `Block1`, `Block2`, 
// `Block3`, `Block4` и `BlockContent` из соответствующих файлов.

// 3. `function App() { ... }`: Это определение функционального компонента `App`. 
// В React компоненты могут
//  быть определены как классы или функции. 
// В данном случае используется функциональный компонент.

// 4. `<div> ... </div>`: Это JSX код, который определяет структуру компонента
//  `App`. Внутри `<div>` содержатся 
// различные компоненты, включая `BlockHeader`, `Block1`, `Block2`, `Block3`, `BlockContent`. 
// JSX позволяет писать код, который выглядит как разметка HTML, но на самом деле является JavaScript-кодом.

// 5. `export default App;`: Эта строка экспортирует компонент `App` как
//  основной компонент приложения. Это означает, 
// что при импорте этого файла в другие части приложения, компонент `App` будет доступен для использования по умолчанию.

// Итак, весь этот код определяет приложение React, которое включает 
// в себя различные компоненты (`BlockHeader`, `Block1`, 
// `Block2`, `Block3`, `Block4`, `BlockContent`), 
// и отображает их внутри корневого компонента `App`.