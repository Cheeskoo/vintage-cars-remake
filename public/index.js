import { initTheme, themeToggle } from './js/script/darkMode.js'
import { openMenu, closeMenu } from './js/script/menu.js'

const body = document.body;
const btnToggle = document.querySelector('.navbar__theme-toggle')
const menu = document.querySelector('.navbar__menu')
const close = document.querySelector('.navbar__close')
const themeIcon = document.querySelector('.navbar__icon--toggle')

const intervalTime = 3000
const slider = document.getElementById('heroSlider')
const prevBtn = document.getElementById('sliderPrev')
const nextBtn = document.getElementById('sliderNext') 
const dotsContainer= document.getElementById('sliderDots')
const images = slider.querySelectorAll('.hero__image')

document.addEventListener('DOMContentLoaded', ()=>{
    initTheme(body, themeIcon)
    sliderFunction()
    intervalSliderInit()
})
menu.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
btnToggle.addEventListener('click', ()=>{
    themeToggle(body, themeIcon)
})
slider.addEventListener('mouseenter', intervalSliderStop);
slider.addEventListener('mouseleave', intervalSliderInit);

let autoChange = null

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
        const dot = document.createElement('div')
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
