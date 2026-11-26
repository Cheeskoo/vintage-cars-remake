const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }

export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => HTML_ESCAPES[ch])

const priceFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
export const formatPrice = value => priceFormat.format(value)

let toastTimer = null
export function showToast(message, type = 'info') {
    let toast = document.getElementById('toast')
    if (!toast) {
        toast = document.createElement('div')
        toast.id = 'toast'
        toast.className = 'toast'
        toast.setAttribute('role', 'status')
        toast.setAttribute('aria-live', 'polite')
        document.body.appendChild(toast)
    }
    toast.textContent = message
    toast.dataset.type = type
    toast.classList.add('toast--visible')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => toast.classList.remove('toast--visible'), 2600)
}
