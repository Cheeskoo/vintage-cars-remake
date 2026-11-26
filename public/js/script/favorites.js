import { addFavorite, removeFavorite, goToLogin } from './api.js'
import { showToast } from './utils.js'

export function bindFavoriteButtons(container, state, onChange) {
    container.addEventListener('click', async e => {
        const btn = e.target.closest('[data-fav-id]')
        if (!btn) return
        e.preventDefault()
        if (!state.user) {
            showToast('Inicia sesion para guardar favoritos')
            setTimeout(goToLogin, 700)
            return
        }
        const id = Number(btn.dataset.favId)
        const willSave = !state.ids.has(id)
        btn.disabled = true
        try {
            const { ids } = willSave ? await addFavorite(id) : await removeFavorite(id)
            state.ids = new Set(ids)
            document.querySelectorAll(`[data-fav-id="${id}"]`).forEach(b => setButtonState(b, willSave))
            showToast(willSave ? 'Guardado en tus favoritos' : 'Quitado de tus favoritos', 'success')
            onChange?.(id, willSave)
        } catch (err) {
            if (err.status === 401) return goToLogin()
            showToast(err.message, 'error')
        } finally {
            btn.disabled = false
        }
    })
}

function setButtonState(btn, isFavorite) {
    btn.classList.toggle('fav-btn--active', isFavorite)
    btn.setAttribute('aria-pressed', String(isFavorite))
    btn.title = isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'
    const label = btn.querySelector('.fav-btn__label')
    if (label) label.textContent = isFavorite ? 'En tus favoritos' : 'Guardar en favoritos'
}
