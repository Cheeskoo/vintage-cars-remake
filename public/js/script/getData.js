export function getData(data){
    const rawData = data
    let dataCard= ''
    for(const car of rawData){
        const price = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(car.precio)

        const isAvailable= {
            disponible: car.disponible ? 'Disponible': 'No disponible',
            clase: car.disponible ? 'item__is-available--available': 'item__is-available--not-available',
            active: car.disponible ? 'item__btn--available': 'item__btn--not-available',
            icon: car.disponible ? 'bookmark': 'dangerous' 
        }
        dataCard +=`
        <li>
            <article class="item">
            <img src='${car.imagen}' alt='${car.nombre}' class='item__image'>
            <div class='item__info'>
            <p class='item__is-available ${isAvailable.clase}'>${isAvailable.disponible}</p>
            <div class='item__title-wrapper'>
            <h3 class='item__title'>${car.nombre}</h3>
            <button class='btn item__btn ${isAvailable.active}'>
            <span class="material-symbols-outlined">${isAvailable.icon}</span>
            </button>
            </div>
            <div class='item__price-wrapper'>
            <p class='item__category'>${car.categoria}</p>
            <p class='item__price'>${price}</p>
            </div>
            <p class='item__description'>${car.descripcion}</p>
            </div>
            </article>
        </li>
        `
    }
    return dataCard
}
