const main_book = document.querySelector(".main_book")
const main_book_types = document.getElementsByClassName("main_books_types")
const main_book_genres = document.getElementsByClassName("main_books_genres")
const main_mark_book = document.querySelector(".main_mark_book")
const main_books_types_mark_o = document.querySelector(".main_books_types_mark_o")
const main_books_types_mark_z = document.querySelector(".main_books_types_mark_z")

const main_dvd = document.querySelector(".main_dvd")
const main_dvd_types = document.getElementsByClassName("main_dvd_types")
const main_dvd_genres = document.getElementsByClassName("main_dvd_genres")
const main_mark_dvd = document.querySelector(".main_mark_dvd")
const main_dvd_types_mark_o = document.querySelector(".main_dvd_types_mark_o")
const main_dvd_types_mark_z = document.querySelector(".main_dvd_types_mark_z")

main_book_types[0].style.display = 'none'
main_book_types[1].style.display = 'none'
main_book_genres[0].style.display = 'none'
main_book_genres[1].style.display = 'none'


main_dvd_types[0].style.display = 'none'
main_dvd_types[1].style.display = 'none'
main_dvd_genres[0].style.display = 'none'
main_dvd_genres[1].style.display = 'none'

let fbm = true
let fdm = true

let fbto = true
let fbtz = true

let fdto = true
let fdtz = true

main_book.addEventListener("click", () => {

    if (fbm == true) {
        main_book_types[0].style.display = 'block'
        main_book_types[1].style.display = 'block'
        main_mark_book.innerText = "-"
        fbm = false
    }
    else {
        main_book_types[0].style.display = 'none'
        main_book_types[1].style.display = 'none'
        main_mark_book.innerText = "+"
        fbm = true
    }
})

main_book_types[0].addEventListener("click", () => {

    if (fbto == true) {
        main_book_genres[0].style.display = 'block'
        main_books_types_mark_o.innerText = "-"
        fbto = false
        fbm = true
    }
    else {
        main_book_genres[0].style.display = 'none'
        main_books_types_mark_o.innerText = "+"
        fbto = true
        fbm = true
    }

})

main_book_types[1].addEventListener("click", () => {
    main_book_types[1].style.display = 'block'
    if (fbtz == true) {
        main_book_genres[1].style.display = 'block'
        main_books_types_mark_z.innerText = "-"
        fbtz = false
        fbm = true
    }
    else {
        main_book_genres[1].style.display = 'none'
        main_books_types_mark_z.innerText = "+"
        fbtz = true
        fbm = true
    }
})


main_dvd.addEventListener("click", () => {
    if (fdm == true) {
        main_dvd_types[0].style.display = 'block'
        main_dvd_types[1].style.display = 'block'
        main_mark_dvd.innerText = "-"
        fdm = false
    }
    else {
        main_dvd_types[0].style.display = 'none'
        main_dvd_types[1].style.display = 'none'
        main_mark_dvd.innerText = "+"
        fdm = true
    }
})

main_dvd_types[0].addEventListener("click", () => {
    if (fdto == true) {
        main_dvd_genres[0].style.display = 'block'
        main_dvd_types_mark_o.innerText = "-"
        fdto = false
        fdm = true
    }
    else {
        main_dvd_genres[0].style.display = 'none'
        main_dvd_types_mark_o.innerText = "+"
        fdto = true
        fdm = true
    }
})
main_dvd_types[1].addEventListener("click", () => {
    if (fdtz == true) {
        main_dvd_genres[1].style.display = 'block'
        main_dvd_types_mark_z.innerText = "-"
        fdtz = false
        fdm = true
    }
    else {
        main_dvd_genres[1].style.display = 'none'
        main_dvd_types_mark_z.innerText = "+"
        fdtz = true
        fdm = true
    }
})