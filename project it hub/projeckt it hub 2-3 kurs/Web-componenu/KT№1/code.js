

// Импорт веб-компонента
const template = document.getElementById('contact-card');
const contactCard = template.content.cloneNode(true);

// Заполнение данными карточки контакта
contactCard.querySelector('img').src = './main/заставка.jpg';
contactCard.querySelector('.name').textContent = 'sergio semchuk';
contactCard.querySelector('.email').textContent = 'john.doe@example.com';
contactCard.querySelector('.phone').textContent = '+7 985 998 13 77';

// Добавление карточки контакта в DOM
document.body.appendChild(contactCard);

// Создание нескольких экземпляров с разными данными
const contactCard2 = template.content.cloneNode(true);
contactCard2.querySelector('img').src = './main/заставка1.jpg';
contactCard2.querySelector('.name').textContent = 'Maks Tumanov ';
contactCard2.querySelector('.email').textContent = 'jane.doe@example.com';
contactCard2.querySelector('.phone').textContent = '+7 980 988 76 77';
document.body.appendChild(contactCard2);












