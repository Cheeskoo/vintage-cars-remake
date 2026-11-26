import { api, getFavorites } from './script/api.js'
import { getData } from './script/getData.js'
import { initLayout } from './script/layout.js'
import { bindFavoriteButtons } from './script/favorites.js'
import { escapeHtml } from './script/utils.js'

const productsGrid = document.getElementById('productsGrid')
const resultsCount = document.getElementById('resultsCount')
const filtersForm = document.getElementById('asideForm')
const filtroCategoria = document.getElementById('filtrarCategoria')
const filtroMarca = document.getElementById('filtrarMarca')
const searchForm = document.getElementById('searchForm')
const searchBar = document.getElementById('searchBar')
const filtersPanel = document.getElementById('filters')
const filterMenuBtn = document.getElementById('filterMenu')

const state = { user: null, ids: new Set(), cars: [] }
const FILTER_KEYS = ['buscar', 'disponible', 'categoria', 'marca', 'orden']

init()

async function init() {
    const [user] = await Promise.all([initLayout(), loadFilterOptions()])
    state.user = user
    if (user) {
        const favoritos = await getFavorites().catch(() => [])
        state.ids = new Set(favoritos.map(car => car.id))
    }
    applyParamsToForm(new URLSearchParams(window.location.search))
    await loadCars()
}

async function loadFilterOptions() {
    const { categorias, marcas } = await api('/cars/filtros')
    const options = list => list.map(v => `<option value="${escapeHtml(v)}" class="filters__option">${escapeHtml(v)}</option>`).join('')
    filtroCategoria.insertAdjacentHTML('beforeend', options(categorias))
    filtroMarca.insertAdjacentHTML('beforeend', options(marcas))
}

function currentParams() {
    const data = new FormData(filtersForm)
    const params = new URLSearchParams()
    const buscar = searchBar.value.trim()
    if (buscar) params.set('buscar', buscar)
    for (const key of ['disponible', 'categoria', 'marca', 'orden']) {
        const value = data.get(key)
        if (value && value !== 'default') params.set(key, value)
    }
    return params
}

function applyParamsToForm(params) {
    searchBar.value = params.get('buscar') ?? ''
    const radio = filtersForm.querySelector(`[name="disponible"][value="${params.get('disponible') ?? 'default'}"]`)
    if (radio) radio.checked = true
    for (const [key, select] of [['categoria', filtroCategoria], ['marca', filtroMarca], ['orden', document.getElementById('filtrarPrecio')]]) {
        const value = params.get(key)
        select.value = value && [...select.options].some(o => o.value === value) ? value : 'default'
    }
}

async function loadCars() {
    const params = currentParams()
    const query = params.toString()
    history.replaceState(null, '', query ? `?${query}` : window.location.pathname)
    try {
        state.cars = await api(`/cars${query ? `?${query}` : ''}`)
        render(params)
    } catch (err) {
        productsGrid.innerHTML = emptyState('error', 'No pudimos cargar el catalogo', err.message)
        resultsCount.textContent = ''
    }
}

function render(params) {
    const total = state.cars.length
    const activeFilters = FILTER_KEYS.some(key => params.has(key))
    resultsCount.textContent = `${total} ${total === 1 ? 'auto encontrado' : 'autos encontrados'}${params.get('buscar') ? ` para "${params.get('buscar')}"` : ''}`
    if (!total) {
        productsGrid.innerHTML = emptyState('search', 'No encontramos autos con esos filtros',
            activeFilters ? 'Proba con otra busqueda o limpia los filtros.' : '', activeFilters)
        return
    }
    productsGrid.innerHTML = getData(state.cars, state.ids)
}

function emptyState(icon, title, text, withReset = false) {
    return `
        <li class="empty-state">
            <span class="material-symbols-outlined empty-state__icon">${icon === 'error' ? 'close' : 'search'}</span>
            <p class="empty-state__title">${escapeHtml(title)}</p>
            ${text ? `<p class="empty-state__text">${escapeHtml(text)}</p>` : ''}
            ${withReset ? '<button type="button" class="btn btn-primary" data-reset>Limpiar filtros</button>' : ''}
        </li>`
}

function resetFilters() {
    filtersForm.reset()
    searchBar.value = ''
    loadCars()
}

filtersForm.addEventListener('submit', e => {
    e.preventDefault()
    toggleFilters(false)
    loadCars()
})
filtersForm.addEventListener('change', () => {
    if (window.matchMedia('(min-width: 931px)').matches) loadCars()
})
document.getElementById('filterReset').addEventListener('click', resetFilters)
productsGrid.addEventListener('click', e => {
    if (e.target.closest('[data-reset]')) resetFilters()
})

searchForm.addEventListener('submit', e => {
    e.preventDefault()
    loadCars()
})
let searchTimer = null
searchBar.addEventListener('input', () => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(loadCars, 300)
})

function toggleFilters(open) {
    filtersPanel.classList.toggle('filters--open', open)
    document.body.classList.toggle('filters-open', open)
    filterMenuBtn.setAttribute('aria-expanded', String(open))
}
filterMenuBtn.addEventListener('click', () => toggleFilters(true))
document.getElementById('filterClose').addEventListener('click', () => toggleFilters(false))
document.getElementById('filterBackdrop').addEventListener('click', () => toggleFilters(false))

bindFavoriteButtons(productsGrid, state)
