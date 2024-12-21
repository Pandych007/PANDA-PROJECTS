
// Этот код представляет компонент React под названием Block4, который принимает свойства color и 
// text и отображает переданный текст внутри блока определенного цвета.

function Block4(props){
    let {color, text} = props

    return (
        <div style={{backgroundColor: color, width: '420px', height: '420px', display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column'}}>
            <p>{text}</p>
            
        </div>
    )
}

export default Block4


// function Block4(props) { ... }: Это объявление функционального компонента React под названием Block4, 
// который принимает объект props в качестве параметра.
// let {color, text} = props: Деструктуризация свойств color и text из объекта props.
// return (...): Возвращает JSX код, который определяет структуру и внешний вид компонента.
// <div style={{ ... }}> ... </div>: Это корневой элемент компонента Block4. Он имеет стилизацию, 
// указанную в объекте встроенных стилей, включая цвет фона, ширину, высоту, и настройки выравнивания.
// <p>{text}</p>: Это абзац, который отображает текст, переданный в свойстве text.
// export default Block4: Экспортирует компонент Block4 по умолчанию, чтобы он мог быть использован в других частях 
// приложения.