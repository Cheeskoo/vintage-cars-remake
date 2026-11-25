import { initLayout } from './js/script/layout.js'

const intervalTime = 3000
const slider = document.getElementById('heroSlider')
const prevBtn = document.getElementById('sliderPrev')
const nextBtn = document.getElementById('sliderNext') 
const dotsContainer= document.getElementById('sliderDots')
const images = slider.querySelectorAll('.hero__image')

let autoChange = null

sliderFunction()
intervalSliderInit()
initLayout().then(user => {
    if (!user) return
    const heroSecondary = document.getElementById('heroSecondary')
    heroSecondary.textContent = 'Ver mis favoritos'
    heroSecondary.href = './html/dashboard.html'
})
slider.addEventListener('mouseenter', intervalSliderStop);
slider.addEventListener('mouseleave', intervalSliderInit);

function intervalSliderInit(){
    if(!autoChange){
        autoChange = setInterval(nextSlide, intervalTime)
    }
}
function intervalSliderStop(){
    clearInterval(autoChange)
    autoChange = null
}

function sliderFunction(){
    images.forEach((_, index)=>{
        const dot = document.createElement('button')
        dot.type = 'button'
        dot.setAttribute('aria-label', `Ver imagen ${index + 1}`)
        dot.classList.add('hero__slider-dot')
        if(index === 0){ 
            dot.classList.add('hero__slider-dot--active')
        }
        dot.addEventListener("click", ()=>{
            intervalSliderStop()
            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: 'smooth'
            })
            intervalSliderInit()
        })
        dotsContainer.appendChild(dot)
    })
    const dots = dotsContainer.querySelectorAll('.hero__slider-dot')
    slider.addEventListener('scroll', ()=>{
        const activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        dots.forEach((dot, index) => {
            dot.classList.toggle('hero__slider-dot--active', index === activeIndex);
        });
    });
    nextBtn.addEventListener('click', nextImage)
    prevBtn.addEventListener('click', previousImage)
}
function nextSlide(){
    const activeIndex = Math.round(slider.scrollLeft / slider.clientWidth)
            if(activeIndex === (images.length - 1)){
                  slider.scrollTo({
                    left: 0, 
                    behavior: "smooth"
                  })
                  return
            }else{
            slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
        }
}
function nextImage(){
    intervalSliderStop()
    nextSlide()
    intervalSliderInit()
}
function previousImage(){
    intervalSliderStop()
    const activeIndex = Math.round(slider.scrollLeft / slider.clientWidth)
        if (activeIndex === 0){
            slider.scrollTo({
                left: slider.clientWidth * (images.length - 1),
                behavior: 'smooth'
            })
        }else{
            slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
        }
    intervalSliderInit()
}
