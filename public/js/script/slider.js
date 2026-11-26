export function createSlider(root, { interval = 0 } = {}) {
    const track = root.querySelector('.slider__track')
    const slides = [...track.children]
    const prevBtn = root.querySelector('.slider__btn--prev')
    const nextBtn = root.querySelector('.slider__btn--next')
    const dotsContainer = root.querySelector('.slider__dots')
    const counter = root.querySelector('.slider__counter')
    const thumbs = [...document.querySelectorAll(`[data-slider-thumb="${root.id}"]`)]
    let timer = null

    const currentIndex = () => Math.round(track.scrollLeft / track.clientWidth)
    const goTo = index => {
        const total = slides.length
        const target = (index + total) % total
        track.scrollTo({ left: track.clientWidth * target, behavior: 'smooth' })
    }

    if (slides.length < 2) {
        root.classList.add('slider--single')
        return { goTo }
    }

    dotsContainer.innerHTML = slides.map((_, i) =>
        `<button type="button" class="slider__dot" aria-label="Ver foto ${i + 1}"></button>`).join('')
    const dots = [...dotsContainer.children]

    function update() {
        const active = currentIndex()
        dots.forEach((dot, i) => dot.classList.toggle('slider__dot--active', i === active))
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('thumb--active', i === active)
            thumb.setAttribute('aria-current', i === active ? 'true' : 'false')
        })
        if (counter) counter.textContent = `${active + 1} / ${slides.length}`
    }

    const restart = () => {
        if (!interval) return
        clearInterval(timer)
        timer = setInterval(() => goTo(currentIndex() + 1), interval)
    }
    const stop = () => clearInterval(timer)

    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); restart() }))
    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => { goTo(i); restart() }))
    prevBtn.addEventListener('click', () => { goTo(currentIndex() - 1); restart() })
    nextBtn.addEventListener('click', () => { goTo(currentIndex() + 1); restart() })
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true })
    root.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') { goTo(currentIndex() - 1); restart() }
        if (e.key === 'ArrowRight') { goTo(currentIndex() + 1); restart() }
    })
    root.addEventListener('mouseenter', stop)
    root.addEventListener('mouseleave', restart)
    window.addEventListener('resize', () => { track.scrollLeft = track.clientWidth * currentIndex() })

    update()
    restart()
    return { goTo }
}
