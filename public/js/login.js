import { api } from './script/api.js'
import { initLayout } from './script/layout.js'

const cardFormLogin = document.getElementById('cardFormLogin')
const cardFormRegister = document.getElementById('cardFormRegister')
const formLogin = document.getElementById('formLogin')
const formRegister = document.getElementById('formRegister')

const params = new URLSearchParams(window.location.search)
const next = params.get('next')?.startsWith('/') && !params.get('next').startsWith('//')
    ? params.get('next')
    : '/html/dashboard.html'

initLayout().then(user => {
    if (user) window.location.replace(next)
})

function showForm(mode) {
    const isRegister = mode === 'registro'
    cardFormRegister.classList.toggle('is-hidden', !isRegister)
    cardFormLogin.classList.toggle('is-hidden', isRegister)
    document.title = `${isRegister ? 'Registro' : 'Ingresar'} | Vintage Cars`
}
showForm(params.get('modo'))

document.getElementById('formChangeRegister').addEventListener('click', () => showForm('registro'))
document.getElementById('formChangeLogin').addEventListener('click', () => showForm('login'))

async function handleSubmit(form, endpoint, errorEl) {
    const button = form.querySelector('[type="submit"]')
    const body = Object.fromEntries(new FormData(form))
    errorEl.hidden = true
    button.disabled = true
    const originalText = button.textContent
    button.textContent = 'Un momento...'
    try {
        await api(endpoint, { method: 'POST', body })
        window.location.replace(next)
    } catch (err) {
        errorEl.textContent = err.message
        errorEl.hidden = false
        button.disabled = false
        button.textContent = originalText
    }
}

formLogin.addEventListener('submit', e => {
    e.preventDefault()
    handleSubmit(formLogin, '/auth/login', document.getElementById('loginError'))
})
formRegister.addEventListener('submit', e => {
    e.preventDefault()
    handleSubmit(formRegister, '/auth/register', document.getElementById('registerError'))
})
