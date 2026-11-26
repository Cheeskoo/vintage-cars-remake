import { escapeHtml, formatPrice } from './utils.js'

export function getData(cars, favoriteIds = new Set()) {
    return cars.map(car => {
        const isFavorite = favoriteIds.has(car.id)
        const name = escapeHtml(car.nombre)
        return `
        <li>
            <article class="item">
                <a href="/html/auto.html?id=${car.id}" class="item__image-link" aria-label="Ver detalle de ${name}">
                    <img src="${escapeHtml(car.imagen)}" alt="${name}" class="item__image" loading="lazy">
                </a>
                <div class="item__info">
                    <p class="item__is-available ${car.disponible ? 'item__is-available--available' : 'item__is-available--not-available'}">
                        ${car.disponible ? 'Disponible' : 'No disponible'}
                    </p>
                    <div class="item__title-wrapper">
                        <h3 class="item__title"><a href="/html/auto.html?id=${car.id}" class="link">${name}</a></h3>
                        ${favoriteButton(car, isFavorite)}
                    </div>
                    <div class="item__price-wrapper">
                        <p class="item__category">${escapeHtml(car.categoria)} · ${car.anio}</p>
                        <p class="item__price">${formatPrice(car.precio)}</p>
                    </div>
                    <p class="item__description">${escapeHtml(car.descripcion)}</p>
                </div>
            </article>
        </li>`
    }).join('')
}

export function favoriteButton(car, isFavorite, extraClass = '') {
    const label = isFavorite ? `Quitar ${car.nombre} de favoritos` : `Guardar ${car.nombre} en favoritos`
    return `
        <button type="button" class="btn fav-btn ${isFavorite ? 'fav-btn--active' : ''} ${extraClass}"
            data-fav-id="${car.id}" aria-pressed="${isFavorite}" aria-label="${escapeHtml(label)}" title="${isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
            <span class="material-symbols-outlined fav-btn__icon">favorite</span>
        </button>`
}
