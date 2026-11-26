import { getFavorites, logout, goToLogin } from './script/api.js'
import { initLayout } from './script/layout.js'
import { bindFavoriteButtons } from './script/favorites.js'
import { escapeHtml, formatPrice } from './script/utils.js'

const grid = document.getElementById('favoritesGrid')
const state = { user: null, ids: new Set(), cars: [] }

init()

async function init() {
    const user = await initLayout()
    if (!user) return goToLogin()
    state.user = user
    document.getElementById('userName').textContent = user.nombre
    document.getElementById('btnLogout').addEventListener('click', logout)

    try {
        state.cars = await getFavorites()
        state.ids = new Set(state.cars.map(car => car.id))
        render()
    } catch (err) {
        grid.innerHTML = `<p class="empty-state">${escapeHtml(err.message)}</p>`
    }
    document.querySelector('.dashboard__content').removeAttribute('aria-busy')
}

function render() {
    const cars = state.cars
    document.getElementById('savedCars').textContent = cars.length
    document.getElementById('availableCars').textContent = cars.filter(car => car.disponible).length
    document.getElementById('collectionValue').textContent = formatPrice(cars.reduce((sum, car) => sum + car.precio, 0))

    if (!cars.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <span class="material-symbols-outlined empty-state__icon">favorite</span>
                <p class="empty-state__title">Todavia no guardaste ningun auto</p>
                <p class="empty-state__text">Explora el catalogo y toca el corazon de los autos que mas te gusten para tenerlos aca.</p>
                <a href="./catalogo.html" class="link btn-primary">Explorar catalogo</a>
            </div>`
        return
    }

    grid.innerHTML = cars.map(car => `
        <article class="car-card" data-car="${car.id}">
            <a href="./auto.html?id=${car.id}" class="car-card__image-link">
                <img src="${escapeHtml(car.imagen)}" alt="${escapeHtml(car.nombre)}" class="car-card__img" loading="lazy">
            </a>
            <div class="car-card__info">
                <div class="car-card__heading">
                    <h3 class="car-card__title">${escapeHtml(car.nombre)}</h3>
                    <button type="button" class="btn fav-btn fav-btn--active" data-fav-id="${car.id}" aria-pressed="true"
                        aria-label="Quitar ${escapeHtml(car.nombre)} de favoritos" title="Quitar de favoritos">
                        <span class="material-symbols-outlined fav-btn__icon">favorite</span>
                    </button>
                </div>
                <div class="car-card__year-category">
                    <span class="car-card__year">${car.anio}</span>
                    <span class="car-card__category">${escapeHtml(car.categoria)}</span>
                </div>
                <div class="car-card__year-category">
                    <span class="car-card__status ${car.disponible ? '' : 'car-card__status--off'}">${car.disponible ? 'Disponible' : 'No disponible'}</span>
                    <strong class="car-card__price">${formatPrice(car.precio)}</strong>
                </div>
            </div>
            <a href="./auto.html?id=${car.id}" class="link btn car-card__btn">Ver detalle</a>
        </article>`).join('')
}

bindFavoriteButtons(grid, state, (id, saved) => {
    if (saved) return
    state.cars = state.cars.filter(car => car.id !== id)
    const card = grid.querySelector(`[data-car="${id}"]`)
    card?.classList.add('car-card--removing')
    setTimeout(render, 250)
})
