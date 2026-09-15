import { dataCars } from '../data/data.js'
import { getData } from './script/getData.js'
import { initTheme, themeToggle } from './script/darkMode.js'
import { openMenu, closeMenu} from './script/menu.js'
const body = document.body
const btnToggle = document.querySelector('.navbar__theme-toggle')
const menu = document.querySelector('.navbar__menu')
const close = document.querySelector('.navbar__close')
const themeIcon = document.querySelector('.navbar__icon--toggle')
const productsGrid = document.querySelector('.products__grid')

const filtrosAplicados = document.getElementById('asideForm')
const filtroCategoria = document.getElementById('filtrarCategoria')
const filtroMarca = document.getElementById('filtrarMarca')


document.addEventListener('DOMContentLoaded', ()=>{
 initTheme(body, themeIcon)
 productsGrid.innerHTML = getData(dataCars)
 getFilters()
})
menu.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
btnToggle.addEventListener('click',()=>{
    themeToggle(body, themeIcon)
})
filtrosAplicados.addEventListener('submit', filterResults)

function getFilters(){
    const data = dataCars
    const categorias = [...new Set(data.map(car => car.categoria))]
    const marcas = [...new Set(data.map(car => car.marca))]
    let categoriaHtml = `<option class="filters__option" value="default">Por defecto</option>`
    let marcaHtml = `<option class="filters__option" value="default">Por defecto</option>`
    categorias.forEach((cat)=> {
        categoriaHtml += `<option value="${cat}"class="filters__option">${cat}</option>`
    })
    marcas.forEach((mar)=>{
        marcaHtml += `<option value="${mar}" class="filters__option">${mar}</option>`
    })
    filtroCategoria.innerHTML = categoriaHtml
    filtroMarca.innerHTML = marcaHtml
}

function filterResults(e){
    e.preventDefault()
    const filtros = new FormData(filtrosAplicados)
    const payload = {
        disponibilidad: filtros.get('disponibilidad'),
        categoria: filtros.get('categoria'),
        marca: filtros.get('marca'),
        precio: filtros.get('precio')
    }
    console.log(payload)
}