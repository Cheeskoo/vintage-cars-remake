import { initTheme, themeToggle } from './darkMode.js'
import { openMenu, closeMenu } from './menu.js'
import { getCurrentUser, logout } from './api.js'
import { escapeHtml } from './utils.js'

// Inicializa lo comun a todas las paginas: tema, menu movil y estado de sesion en la barra.
export async function initLayout() {
    const body = document.body
    const themeIcon = document.querySelector('.navbar__icon--toggle')
    initTheme(body, themeIcon)
    document.querySelector('.navbar__theme-toggle')?.addEventListener('click', () => themeToggle(body, themeIcon))
    document.querySelector('.navbar__menu')?.addEventListener('click', openMenu)
    document.querySelector('.navbar__close')?.addEventListener('click', closeMenu)

    const user = await getCurrentUser()
    renderAuthItem(user)
    return user
}

function renderAuthItem(user) {
    const slot = document.getElementById('navAuth')
    if (!slot) return
    if (!user) {
        slot.innerHTML = `<a href="/html/login.html" class="link navbar__link navbar__link--accent">Login</a>`
        return
    }
    slot.innerHTML = `
        <button type="button" class="btn navbar__link navbar__link--accent navbar__logout" title="Cerrar sesion">
            ${escapeHtml(user.usuario)}
            <span class="material-symbols-outlined">logout</span>
        </button>`
    slot.querySelector('button').addEventListener('click', logout)
}
