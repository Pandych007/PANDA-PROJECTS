let form = document.getElementsByTagName('form')[0]

let table = document.querySelector('.table')
let btn = document.querySelector('.btn')

let number = document.querySelector('.number')
let card_number = document.querySelector('.card_number')

let cardholder = document.querySelector('.cardhld')
let name = document.querySelector('.name')

let date = document.querySelector('.date')
let exp_date = document.querySelector('.exp_date')

let bank = document.querySelector('.bank')
let logo = document.querySelector('.logo')

let system = document.querySelector('.system')
let card_type = document.querySelector('.card_type')

let card = document.querySelector('.card')

card_number.innerText = '0000 0000 0000 0000'
cardholder.innerText = 'IVAN IVANOV'
number.addEventListener('input', e => {
    card_number.textContent = e.target.value
    if(e.target.value > 16){
        card_number.textContent = e.target.value.slice(0,16)
    }
    
})
date.addEventListener('input', e =>{
    let str_date = ''
    let mass = []
    str_date = e.target.value
    for(let i = 0; i< str_date.length; i++){
        mass[i] = str_date[i]
    }
    str_date = mass[5] + mass[6] + '/' + mass[2] + mass[3]
    exp_date.textContent = str_date
})

name.addEventListener('input', e => {
    cardholder.textContent = e.target.value.toUpperCase()
})

bank.addEventListener('input', e => {
    let bgc
    let image
    let sys_val
    sys_val = e.target.value
    console.log(bgc)
    switch(sys_val){
        case 'Выберите банк':
            bgc = '#AFAFAF'
            image = ''
            break;
        case "Сбербанк":
            bgc = 'rgb(76, 118, 64)'
            image = "https://companieslogo.com/img/orig/SBER.ME-10de1f5f.png"
            break;
            
        case "ВТБ":
            bgc = "lightblue"
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/VTB_Logo_2018.svg/2560px-VTB_Logo_2018.svg.png"
                break;
        case "Тинькофф":
            bgc = 'yellow'
            image = "https://acdn.tinkoff.ru/static/documents/ae939645-bcda-4636-b349-6e446aa41aa1.svg"
                break;
        case "Альфа банк":
            bgc = 'white'
            image = 'https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg'
            console.log('ffff')
            break;
        case "Совкомбанк":
            bgc = 'lightblue'
            image = 'https://vsememy.ru/kartinki/wp-content/uploads/2023/03/1636164482_19-papik-pro-p-sovkombank-logotip-foto-19.png'
            break;
    }
    card.style.backgroundColor = `${bgc}`
    logo.style.backgroundImage = `url(${image})`
    bank.setAttribute('val', sys_val)
})

card_type.addEventListener('input', e => {
    let sys_val
    let image
    sys_val = e.target.value
    console.log(sys_val)
    switch(sys_val){
        case 'Выберите платежную систему':
            image = ''
            break;
        case "VISA":
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            break;  
        case "MASTER CARD":
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1199px-Mastercard_2019_logo.svg.png"
                break;
        case "MIR":
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mir-logo.svg/1280px-Mir-logo.svg.png"
                break;
        case "PayPal":
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
            break;
        case "Union Pay":
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1280px-UnionPay_logo.svg.png'
            break;
    }
    system.style.backgroundImage = `url(${image})`
    card_type.setAttribute('val', sys_val)
})

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log('aaa')
    let html = "<tr>";
    html += `<td>${card_number.textContent || ""}</td>`;
    html += `<td>${cardholder.textContent || ""}</td>`;
    html += `<td>${exp_date.textContent || ""}</td>`;
    html += `<td>${card_type.getAttribute('val') || ""}</td>`;
    html += `<td>${bank.getAttribute('val') || ""}</td>`;
    html += "</tr>"
    table.innerHTML += html;
    e.target.reset()
    logo.style.backgroundImage = ''
    card_number.innerText = '0000 0000 0000 0000'
    exp_date.innerText = '03/23'
    cardholder.innerText = 'IVAN IVANOV'
    system.style.backgroundImage = ''
    card.style.backgroundColor = '#AFAFAF'
})