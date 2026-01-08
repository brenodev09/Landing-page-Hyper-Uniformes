
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	effects: true, // looks for data-speed and data-lag attributes on elements
	smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

gsap.to('.man-hero', {
    y:-28,
    opacity:1,
    duration:1.4
})

gsap.to('.headline', {
    x:20,
    duration:0.9
})


// script seção depoimentos
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


const seta = document.querySelector('.seta-subir')
seta.addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})


const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion =>{
  accordion.addEventListener('click', () => {
    const repostaAccordion = accordion.querySelector('.resposta-accordion')
    repostaAccordion.classList.toggle('ativoResposta')
    accordion.classList.toggle('ativoAccordion')
  
  })
})