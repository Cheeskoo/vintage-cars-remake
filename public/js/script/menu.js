export function openMenu(){
    document.querySelector('.navbar__list').classList.add('navbar__list--active')
}
export function closeMenu(){
     document.querySelector('.navbar__list').classList.remove('navbar__list--active')
}