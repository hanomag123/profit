document.addEventListener("DOMContentLoaded", () => {


//= components/

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 1000,
  // Размер шага в пикселях 
  stepSize         : 65,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 30,  
  // Максимальное ускорение
  accelerationMax   : 2,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})


  class Menu {
    constructor(menuElement, buttonElement) {
      this.menu = typeof menuElement === "string" ? document.querySelector(menuElement) : menuElement
      this.button = typeof buttonElement === "string" ? document.querySelector(buttonElement) : buttonElement
      this.overlay = document.createElement('div')
      this.buttons = this.menu.querySelectorAll('a')
      this.overlay.hidden = true
      this._init()
    }

    _init() {
      document.body.appendChild(this.overlay)
      this.overlay.classList.add('overlay')

      this.overlay.addEventListener('click', this.toggleMenu.bind(this))
      this.button.addEventListener('click', this.toggleMenu.bind(this))
      this.buttons.forEach(el => {
        el.addEventListener('click', this.toggleMenu.bind(this))
      })
    }

    toggleMenu() {
      this.menu.classList.toggle('menu--open')
      this.button.classList.toggle('menu-button--active')
      this.overlay.hidden = !this.overlay.hidden

      if (this.isMenuOpen()) {
        this.disableScroll()
      } else {
        this.enableScroll()
      }
    }

    isMenuOpen() {
      return this.menu.classList.contains('menu--open')
    }

    disableScroll() {
        // Get the current page scroll position
        const scrollTop = window.pageYOffset  || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset  || document.documentElement.scrollLeft;
      
            // if any scroll is attempted, set this to the previous value
            // window.onscroll = function() {
            //     window.scrollTo(scrollLeft, scrollTop);
            // };
            document.body.style.setProperty('overflow', 'hidden')
    }

    enableScroll() {
      // window.onscroll = function() {};
      document.body.style.setProperty('overflow', 'auto')
    }
  }

  const menu = document.querySelector('.menu')
  const menuButton = document.querySelector('.menu-button')

  if (menu && menuButton) {
    new Menu(menu, menuButton)
  }


  const swiper = new Swiper(".copy-block__sw", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        prevEl: ".copy-block__next",
        nextEl: ".copy-block__prev",
    },
    pagination: {
      type: 'progressbar',
      el: '.swiper-progressbar'
    },
    breakpoints: {
        // when window width is >= 1024px
        1025: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      376: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    }
});

const swiper2 = new Swiper(".subscribe__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
    navigation: {
      prevEl: ".subscribe__next",
      nextEl: ".subscribe__prev",
  },
  pagination: {
    type: 'progressbar',
    el: '.subscribe__progressbar'
  },
  breakpoints: {
      // when window width is >= 1024px
      1025: {
          slidesPerView: 5,
          spaceBetween: 20
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    376: {
      slidesPerView: 2,
      spaceBetween: 20
  },
  }
});

const swiper4 = new Swiper(".rewievs__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
      prevEl: ".rewievs__next",
      nextEl: ".rewievs__prev",
  },
  breakpoints: {
      // when window width is >= 1024px
      1025: {
          slidesPerView: 2.9,
          spaceBetween: 20
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    376: {
      slidesPerView: 2,
      spaceBetween: 20
  },
  }
});



let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const emails = document.querySelectorAll('input[type="email"')

if (emails.length>0) {
  emails.forEach(el => {
    el.addEventListener('input', () => {
      if (event.target.value !== '') {
        event.target.nextElementSibling.style.setProperty('display', 'none')
      } else {
        event.target.nextElementSibling.style.setProperty('display', 'inline-block')
      }
    })
  })
}

const selectLang = document.querySelectorAll('.select-lang a')
if (selectLang.length > 0) {
  selectLang.forEach(el => {
    el.addEventListener('click', function clickHand (){
      event.preventDefault()
      const value = this.innerHTML
      const prevElem = this.parentElement.previousElementSibling

      prevElem.dataset.text = value
    })
  })
}
})


const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.setAttribute('id', 'animBtn');
    }
  });
});

const buttons = document.querySelectorAll('.page-button')

buttons.forEach(e => {
  observer.observe(e);
})



const tl = gsap.timeline();

const arr = document.querySelectorAll('.letterAnim')

arr.forEach(e => {
  tl.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl,
  trigger: '.copy-block__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})

const tl2 = gsap.timeline();

tl2.from('#animSlide1', {opacity: 0, y: -300, duration: 1.5})


ScrollTrigger.create({
  animation: tl2,
  trigger: '.copy-block__sw',
  start: 'top 35%',
  end: 'top 10%',
})


const tl3 = gsap.timeline();

tl3.from('#animSlide2', {opacity: 0, y: 300, duration: 1.5})


ScrollTrigger.create({
  animation: tl3,
  trigger: '.copy-block__sw',
  start: 'top 35%',
  end: 'top 10%',
})


const tl4 = gsap.timeline();

tl4.from('#animeCardSlide1', {opacity: 0, x: -200, duration: 1})


ScrollTrigger.create({
  animation: tl4,
  trigger: '.subscribe__swiper',
  start: 'top 50%',
  end: 'top 10%',
})


// const tl5 = gsap.timeline();

// tl5.from('.animateFirstCoin', {x: -100, y: 100})


// ScrollTrigger.create({
//   animation: tl5,
//   trigger: '.Capabilities__container',
//   start: "top 70%",
//   end: "top 30%",
//   scrub: true,
// })

const tl5 = gsap.timeline();

tl5.from('#rewievsSlide1', {opacity: 0, x: 200, duration: 1})


ScrollTrigger.create({
  animation: tl5,
  trigger: '.rewievs__wrapper',
  start: 'top 50%',
  end: 'top 10%',
})


const tl6 = gsap.timeline();

tl6.from('#secure1', {y: -200})



ScrollTrigger.create({
  animation: tl6,
  trigger: '.secure__container',
  start: 'top 50%',
  end: 'top 10%',
  scrub: true,
})



const tl7 = gsap.timeline();

tl7.from('#secure2', {y: -200})



ScrollTrigger.create({
  animation: tl7,
  trigger: '.secure__container',
  start: 'top 50%',
  end: 'top 10%',
  scrub: true,
})


const tl8 = gsap.timeline();

tl8.from('#secure3', {y: 200})



ScrollTrigger.create({
  animation: tl8,
  trigger: '.secure__container',
  start: 'top 50%',
  end: 'top 10%',
  scrub: true,
})


const tl9 = gsap.timeline();

tl9.from('#secure4', {y: 200})



ScrollTrigger.create({
  animation: tl9,
  trigger: '.secure__container',
  start: 'top 50%',
  end: 'top 10%',
  scrub: true,
})


const tl10 = gsap.timeline();

const arr10 = document.querySelectorAll('.letterSubscribeAnim')

arr10.forEach(e => {
  tl10.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl10,
  trigger: '.subscribe__container',
  start: 'top 40%',
  end: 'top 80%',
})


const tl11 = gsap.timeline();

const arr11 = document.querySelectorAll('.itsprofitableAnimate')

arr11.forEach(e => {
  tl11.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl11,
  trigger: '.itsprofitable__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})


const tl12 = gsap.timeline();

const arr12 = document.querySelectorAll('.CapabilitiesAnimate')

arr12.forEach(e => {
  tl12.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl12,
  trigger: '.Capabilities__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})


const tl13 = gsap.timeline();

const arr13 = document.querySelectorAll('.secureAnimate')

arr13.forEach(e => {
  tl13.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl13,
  trigger: '.secure__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})



const tl14 = gsap.timeline();

const arr14 = document.querySelectorAll('.partnersAnimater')

arr14.forEach(e => {
  tl14.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl14,
  trigger: '.partners__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})


const tl15 = gsap.timeline();

const arr15 = document.querySelectorAll('.rewievsAnimate')

arr15.forEach(e => {
  tl15.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl15,
  trigger: '.rewievs__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})


const tl16 = gsap.timeline();

const arr16 = document.querySelectorAll('.helpAnimate')

arr16.forEach(e => {
  tl16.from(e, {opacity: 0, x: -100, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl16,
  trigger: '.help__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})


