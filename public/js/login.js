import { initTheme, themeToggle } from './script/darkMode.js'
import { openMenu, closeMenu} from './script/menu.js'

const body = document.body
const themeIcon = document.querySelector('.navbar__icon--toggle')
const btnToggle = document.querySelector('.navbar__theme-toggle')
const menu = document.querySelector('.navbar__menu')
const close = document.querySelector('.navbar__close')

const cardFormLogin = document.getElementById('cardFormLogin')
const cardFormRegister = document.getElementById('cardFormRegister')

const btnChangeRegister = document.getElementById('formChangeRegister')
const btnChangeLogin = document.getElementById('formChangeLogin')

document.addEventListener('DOMContentLoaded', ()=>{
 initTheme(body, themeIcon)
})
menu.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
btnToggle.addEventListener('click',()=>{
    themeToggle(body, themeIcon)
})

btnChangeRegister.addEventListener('click', ()=>{
    cardFormRegister.classList.remove('is-hidden')
    cardFormLogin.classList.add('is-hidden')
})
btnChangeLogin.addEventListener('click', ()=>{
    cardFormLogin.classList.remove('is-hidden')
    cardFormRegister.classList.add('is-hidden')
})