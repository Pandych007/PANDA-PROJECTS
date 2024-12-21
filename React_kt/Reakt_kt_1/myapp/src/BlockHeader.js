// Этот код представляет компонент React под названием BlockHeader, 
// который отображает список кнопок в заголовке страницы.

function BlockHeader(){

    let buttons = [
        {id: 1, text: 'О нас'},
        {id: 2, text: 'Услуги'},
        {id: 3, text: 'Аренда'}
    ]

    return(
        <ul id=".ul-box-header" >
            {buttons.map((elem) => <li id="li-box-header" style = {{display: 'inline', float: 'center',  margin: '1em'}}
            key = {elem.id}
            text = {elem.text}>{elem.text}</li>)}
        </ul>
    )
}

export default BlockHeader


// function BlockHeader() { ... }: Это объявление функционального компонента React под названием BlockHeader.
// let buttons = [ ... ]: Это массив объектов, представляющих кнопки в заголовке страницы.
// return (...): Возвращает JSX код, который определяет структуру и внешний вид компонента.
// <ul id=".ul-box-header"> ... </ul>: Это корневой элемент компонента BlockHeader, который 
// представляет собой неупорядоченный список.
// {buttons.map((elem) => ...)}: Это JavaScript выражение, которое отображает каждый элемент 
// массива buttons с помощью метода map(). Для каждого элемента создается тег <li> с текстом кнопки.
// <li id="li-box-header" style={{ display: 'inline', float: 'center', margin: '1em' }} key={elem.id} text={elem.text}>
//      {elem.text} </li>: Это элемент списка (<li>), который представляет собой одну кнопку. Стилизация элемента 
//         задается в атрибуте style, а текст кнопки выводится между открывающим и закрывающим тегами.
// export default BlockHeader;: Экспортирует компонент BlockHeader по умолчанию, чтобы он мог быть использован в 
// других частях приложения.