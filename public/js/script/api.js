export async function api(path, { method = 'GET', body } = {}) {
    const res = await fetch(`/api${path}`, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined,
        credentials: 'same-origin'
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
        const error = new Error(data.error || 'Ocurrio un error, intenta de nuevo.')
        error.status = res.status
        throw error
    }
    return data
}

let mePromise = null
export function getCurrentUser() {
    mePromise ??= api('/auth/me').then(data => data.user).catch(() => null)
    return mePromise
}

export async function logout() {
    await api('/auth/logout', { method: 'POST' })
    window.location.href = '/index.html'
}

export const getFavorites = () => api('/favorites')
export const addFavorite = id => api(`/favorites/${id}`, { method: 'POST' })
export const removeFavorite = id => api(`/favorites/${id}`, { method: 'DELETE' })

export function goToLogin() {
    const next = encodeURIComponent(window.location.pathname + window.location.search)
    window.location.href = `/html/login.html?next=${next}`
}
