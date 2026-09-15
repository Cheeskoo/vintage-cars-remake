export function initTheme(body, icon){
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches  
    const shouldBeDark = savedTheme ? savedTheme === 'dark': prefersDark 
    applyTheme(shouldBeDark, body, icon)
}

export function themeToggle(body, icon){
    const isDark = !body.classList.contains('theme--dark')
    applyTheme(isDark, body, icon)
    localStorage.setItem('theme', isDark ? 'dark': 'light')
}

function applyTheme(isDark, body, icon){
    if(isDark){
        body.classList.add('theme--dark')
        icon.textContent = 'wb_sunny'
    }else{
        body.classList.remove('theme--dark')
        icon.textContent = 'moon_stars'
    }
}
