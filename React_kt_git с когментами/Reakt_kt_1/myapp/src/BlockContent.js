
// Этот код представляет компонент React под названием BlockContent, 
// который отображает содержимое блока на основе данных, 
// представленных в массиве data, используя компонент Block4.

import Block4 from './Block4'

function BlockContent(){

    let data = [
        {id: 1, color: 'red', text: 'Годовое ТО'},
        {id: 2, color: 'blue', text: 'Выравнивание колёс'},
        {id: 3, color: 'green', text: 'Настройка переключателей'}
    ]

    return(
        <div className='block_content_center'>
            {data.map(elem => <Block4
                key = {elem.id}
                color = {elem.color}
                text = {elem.text}/>)}
        </div>
    )
}

export default BlockContent


// import Block4 from './Block4';: Эта строка импортирует компонент Block4 из файла Block4.js, 
// чтобы он мог быть использован внутри компонента BlockContent.
// function BlockContent() { ... }: Это объявление функционального компонента React под названием BlockContent.
// let data = [ ... ]: Это массив объектов, представляющих данные, которые будут отображаться в блоках.
// return (...): Возвращает JSX код, который определяет структуру и внешний вид компонента.
// <div className='block_content_center'> ... </div>: Это корневой элемент компонента BlockContent,
//  который имеет класс block_content_center.
// {data.map(elem => <Block4 ... />)}: Это JavaScript выражение, которое отображает каждый элемент массива data с 
// помощью метода map(). Для каждого элемента создается компонент Block4 с передачей свойств color и text. Ключ key 
// используется для уникальной идентификации каждого элемента списка.
// export default BlockContent;: Экспортирует компонент BlockContent по умолчанию, чтобы он мог быть использован в 
// других частях приложения.
