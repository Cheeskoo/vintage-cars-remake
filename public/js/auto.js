import { api, getFavorites } from './script/api.js'
import { initLayout } from './script/layout.js'
import { createSlider } from './script/slider.js'
import { bindFavoriteButtons } from './script/favorites.js'
import { getData } from './script/getData.js'
import { escapeHtml, formatPrice } from './script/utils.js'

const detail = document.getElementById('detail')
const state = { user: null, ids: new Set() }

init()

async function init() {
    const id = Number(new URLSearchParams(window.location.search).get('id'))
    const [user, car] = await Promise.all([
        initLayout(),
        id ? api(`/cars/${id}`).catch(() => null) : null
    ])
    state.user = user
    if (user) {
        const favoritos = await getFavorites().catch(() => [])
        state.ids = new Set(favoritos.map(c => c.id))
    }
    detail.removeAttribute('aria-busy')

    if (!car) {
        document.title = 'Auto no encontrado | Vintage Cars'
        detail.innerHTML = `
            <div class="empty-state">
                <span class="material-symbols-outlined empty-state__icon">directions_car</span>
                <p class="empty-state__title">No encontramos este auto</p>
                <p class="empty-state__text">Puede que el enlace este mal o que el auto ya no forme parte del catalogo.</p>
                <a href="./catalogo.html" class="link btn-primary">Volver al catalogo</a>
            </div>`
        return
    }

    document.title = `${car.nombre} | Vintage Cars`
    renderDetail(car)
    createSlider(document.getElementById('carSlider'), { interval: 5000 })
    bindFavoriteButtons(document.querySelector('main'), state)
    renderRelated(car)
}

function renderDetail(car) {
    const name = escapeHtml(car.nombre)
    const isFavorite = state.ids.has(car.id)
    const slides = car.imagenes.map((img, i) => `
        <figure class="slider__slide">
            <img src="${escapeHtml(img.url)}" alt="${name}, foto ${i + 1}" class="slider__image" ${i ? 'loading="lazy"' : ''}>
            <figcaption class="slider__credit">Foto: <a href="${escapeHtml(img.fuente)}" target="_blank" rel="noopener noreferrer">${escapeHtml(img.credito)}</a></figcaption>
        </figure>`).join('')
    const thumbs = car.imagenes.map((img, i) => `
        <button type="button" class="btn thumb" data-slider-thumb="carSlider" aria-label="Ver foto ${i + 1}">
            <img src="${escapeHtml(img.url)}" alt="" class="thumb__image">
        </button>`).join('')

    detail.innerHTML = `
        <a href="./catalogo.html" class="link detail__back">
            <span class="material-symbols-outlined">arrow_back</span> Volver al catalogo
        </a>
        <div class="detail__layout">
            <div class="detail__media">
                <div class="slider" id="carSlider" tabindex="0" aria-roledescription="carrusel" aria-label="Fotos de ${name}">
                    <div class="slider__track">${slides}</div>
                    <button type="button" class="btn slider__btn slider__btn--prev" aria-label="Foto anterior">
                        <span class="material-symbols-outlined">chevron_backward</span>
                    </button>
                    <button type="button" class="btn slider__btn slider__btn--next" aria-label="Foto siguiente">
                        <span class="material-symbols-outlined">chevron_forward</span>
                    </button>
                    <span class="slider__counter"></span>
                    <div class="slider__dots"></div>
                </div>
                <div class="thumbs">${thumbs}</div>
            </div>
            <section class="detail__info">
                <p class="item__is-available ${car.disponible ? 'item__is-available--available' : 'item__is-available--not-available'}">
                    ${car.disponible ? 'Disponible' : 'No disponible'}
                </p>
                <h1 class="detail__title">${name}</h1>
                <p class="detail__price">${formatPrice(car.precio)}</p>
                <p class="detail__description">${escapeHtml(car.descripcion)}</p>
                <dl class="specs">
                    <div class="specs__row"><dt>Marca</dt><dd>${escapeHtml(car.marca)}</dd></div>
                    <div class="specs__row"><dt>Año</dt><dd>${car.anio}</dd></div>
                    <div class="specs__row"><dt>Categoria</dt><dd>${escapeHtml(car.categoria)}</dd></div>
                    <div class="specs__row"><dt>Estado</dt><dd>${car.disponible ? 'Disponible para la venta' : 'Vendido / reservado'}</dd></div>
                </dl>
                <button type="button" class="btn fav-btn fav-btn--wide ${isFavorite ? 'fav-btn--active' : ''}" data-fav-id="${car.id}" aria-pressed="${isFavorite}">
                    <span class="material-symbols-outlined fav-btn__icon">favorite</span>
                    <span class="fav-btn__label">${isFavorite ? 'En tus favoritos' : 'Guardar en favoritos'}</span>
                </button>
                ${state.user ? '' : '<p class="detail__hint">Necesitas una cuenta para guardar favoritos. <a href="./login.html" class="link">Ingresa o registrate</a>.</p>'}
            </section>
        </div>`
}

async function renderRelated(car) {
    const sameCategory = await api(`/cars?categoria=${encodeURIComponent(car.categoria)}`).catch(() => [])
    let related = sameCategory.filter(c => c.id !== car.id)
    if (related.length < 3) {
        const all = await api('/cars').catch(() => [])
        related = [...related, ...all.filter(c => c.id !== car.id && c.categoria !== car.categoria)]
    }
    related = related.slice(0, 3)
    if (!related.length) return
    document.getElementById('relatedGrid').innerHTML = getData(related, state.ids)
    document.getElementById('related').hidden = false
}
