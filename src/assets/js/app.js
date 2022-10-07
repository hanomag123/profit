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

const mm = window.matchMedia('(max-width: 375px)');
let swiper3 
mm.addEventListener('change', () => {
  if (mm.matches) {
    swiper3 = new Swiper(".Capabilities__swiper", {
  spaceBetween: 20,
  navigation: {
      prevEl: ".capabilities__next",
      nextEl: ".capabilities__prev",
  },
  pagination: {
    type: 'progressbar',
    el: '.capabilities__progressbar'
  },
});
  } else {
    swiper3?.destroy()
  }
})

if (mm.matches) {
  swiper3 = new Swiper(".Capabilities__swiper", {
    spaceBetween: 20,
    navigation: {
        prevEl: ".capabilities__next",
        nextEl: ".capabilities__prev",
    },
    pagination: {
      type: 'progressbar',
      el: '.capabilities__progressbar'
    },
  });
} else {
  swiper3?.destroy()
}



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

const comeButtons = document.querySelectorAll('.come-button')
const comeForm = document.querySelector('.come-form')

if (comeForm && comeButtons.length > 0) {
  comeButtons.forEach(el => {
    el.addEventListener('click', () => {
      comeForm.classList.add('page-login--active')
      document.body.style.setProperty('overflow', 'hidden')
      const overlay = comeForm.querySelector('.page-login__overlay')
      const closeButton = comeForm.querySelector('.close-button')
      const resetButton = comeForm.querySelector('button[type="button"]')
      resetButton.addEventListener('click', () => {
        comeForm.classList.remove('page-login--active')
      })
      closeButton.addEventListener('click', () => {
        comeForm.classList.remove('page-login--active')
        document.body.style.removeProperty('overflow')
      })
      overlay.addEventListener('click', () => {
        comeForm.classList.remove('page-login--active')
        document.body.style.removeProperty('overflow')
      })
    })
  })
}

const loginbutton = document.querySelectorAll('.login-button')
const loginForm = document.querySelector('.login-form')

if (loginForm && loginbutton.length > 0) {
  loginbutton.forEach(el => {
    el.addEventListener('click', () => {
      loginForm.classList.add('page-login--active')
      document.body.style.setProperty('overflow', 'hidden')
      const overlay = loginForm.querySelector('.page-login__overlay')
      const closeButton = loginForm.querySelector('.close-button')
      const resetButton = loginForm.querySelector('button[type="button"]')
      resetButton.addEventListener('click', () => {
        loginForm.classList.remove('page-login--active')
      })
      closeButton.addEventListener('click', () => {
        loginForm.classList.remove('page-login--active')
        document.body.style.removeProperty('overflow')
      })

      overlay.addEventListener('click', () => {
        loginForm.classList.remove('page-login--active')
        document.body.style.removeProperty('overflow')
      })
    })
  })
}

let ctx = document.getElementById("myChart").getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#0CC61F");
gradientStroke.addColorStop(1, "#0CC61F");

var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
gradientBkgrd.addColorStop(0, "RGBA(12,198,31,0.39)");
gradientBkgrd.addColorStop(1, "rgba(249,135,94,0)");

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
  draw: function() {
    draw.apply(this, arguments);
    let ctx = this.chart.chart.ctx;
    let _stroke = ctx.stroke;
    ctx.stroke = function() {
      ctx.save();
      ctx.shadowColor = 'RGBA(12,198,31,0.9)';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      _stroke.apply(this, arguments);
      ctx.restore();
    };
  }
});

const getChart = (arr1, arr2) => {
  return {
    // The type of chart we want to create
    type: "line",
  
    // The data for our dataset
    data: {
      labels: arr1,
      datasets: [
        {
          label: "Income",
          backgroundColor: gradientBkgrd,
          borderColor: gradientStroke,
          data: arr2,
          pointBorderColor: "rgba(255,255,255,0)",
          pointBackgroundColor: "rgba(255,255,255,0)",
          pointBorderWidth: 0,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 4,
          pointRadius: 1,
          borderWidth: 5,
          pointHitRadius: 16,
          lineTension: 0,
        }
      ]
    },
  
    // Configuration options go here
    options: {
      // onHover: function(evt) {
      //   // var item = myLineChart.getElementAtEvent(evt);
      //   // console.log(this.getElementAtEvent(evt))
      //   if (this.getElementAtEvent(evt).length > 0) {
      //     console.log(this.getElementAtEvent(evt))
      //   }
      //   // if (item.length) {
      //   //   console.log("onHover",item, evt.type);
      //   //   console.log(">data", item[0]._index, data.datasets[0].data[item[0]._index]);
      //   // }
      // },
      tooltips: {
        
        backgroundColor: "#fff",
        displayColors: false,
        titleFontColor: "#000",
        bodyFontColor: "#000"
      },
      legend: {
        display: false
      },
      layout: {
        padding: {
          left: -10,
          bottom: -10,
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              display: false
          }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              display: false
          }
          }
        ]
      }
    }
  }
}


const options = getChart([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [50,50, 60, 60, 60 ,40, 40, 55, 55, 70, 60])

var chart = new Chart(ctx, options);

// document.onclick = () => {
//   console.log(chart)
//   chart.ctx.stroke = function() {
//     ctx.save();
//     ctx.shadowColor = '#FFFFF';
//     ctx.shadowBlur = 20;
//     ctx.shadowOffsetX = 0;
//     ctx.shadowOffsetY = 0;
//     chart.ctx.stroke.apply(this, arguments);
//     ctx.restore();
//   };
//     chart.update();
// }


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
  tl.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
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
  tl10.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
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
  tl11.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
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
  tl12.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
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
  tl13.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
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
  tl14.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
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
  tl15.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
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
  tl16.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl16,
  trigger: '.help__wrapper',
  start: 'top 40%',
  end: 'top 80%',
})



const tl17 = gsap.timeline();

tl17.to('#subscribeDot', {backgroundColor: '#00860B'})
tl17.to('#subscribeDotLink', {border: '0.2rem solid #00860B'})
tl17.to('#profitDot', {backgroundColor: '#afc7b1'})
tl17.to('#profitDotLink', {border: 'unset'})
tl17.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
tl17.to('#capabilitiesDotLink', {border: 'unset'})
tl17.to('#secureDot', {backgroundColor: '#afc7b1'})
tl17.to('#secureDotLink', {border: 'unset'})
tl17.to('#partnersDot', {backgroundColor: '#afc7b1'})
tl17.to('#partnersDotLink', {border: 'unset'})
tl17.to('#rewievsDot', {backgroundColor: '#afc7b1'})
tl17.to('#rewievsDotLink', {border: 'unset'})
tl17.to('#helpDot', {backgroundColor: '#afc7b1'})
tl17.to('#helpDotLink', {border: 'unset'})
tl17.to('#joinDot', {backgroundColor: '#afc7b1'})
tl17.to('#joinDotLink', {border: 'unset'})



ScrollTrigger.create({
  animation: tl17,
  trigger: '.subscribe',
  start: 'top 10%',
  end: 'top 0%',
  scrub: true,
})


const tl18 = gsap.timeline();

tl18.to('#subscribeDot', {backgroundColor: '#afc7b1'})
tl18.to('#subscribeDotLink', {border: 'unset'})
tl18.to('#profitDot', {backgroundColor: '#00860B'})
tl18.to('#profitDotLink', {border: '0.2rem solid #00860B'})
tl18.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
tl18.to('#capabilitiesDotLink', {border: 'unset'})
tl18.to('#secureDot', {backgroundColor: '#afc7b1'})
tl18.to('#secureDotLink', {border: 'unset'})
tl18.to('#partnersDot', {backgroundColor: '#afc7b1'})
tl18.to('#partnersDotLink', {border: 'unset'})
tl18.to('#rewievsDot', {backgroundColor: '#afc7b1'})
tl18.to('#rewievsDotLink', {border: 'unset'})
tl18.to('#helpDot', {backgroundColor: '#afc7b1'})
tl18.to('#helpDotLink', {border: 'unset'})
tl18.to('#joinDot', {backgroundColor: '#afc7b1'})
tl18.to('#joinDotLink', {border: 'unset'})



ScrollTrigger.create({
  animation: tl18,
  trigger: '.itsprofitable',
  start: 'top 20%',
  end: 'top 0%',
  scrub: true,
})


const tl19 = gsap.timeline();

tl19.to('#subscribeDot', {backgroundColor: '#afc7b1'})
tl19.to('#subscribeDotLink', {border: 'unset'})
tl19.to('#profitDot', {backgroundColor: '#afc7b1'})
tl19.to('#profitDotLink', {border: 'unset'})
tl19.to('#capabilitiesDot', {backgroundColor: '#00860B'})
tl19.to('#capabilitiesDotLink', {border: '0.2rem solid #00860B'})
tl19.to('#secureDot', {backgroundColor: '#afc7b1'})
tl19.to('#secureDotLink', {border: 'unset'})
tl19.to('#partnersDot', {backgroundColor: '#afc7b1'})
tl19.to('#partnersDotLink', {border: 'unset'})
tl19.to('#rewievsDot', {backgroundColor: '#afc7b1'})
tl19.to('#rewievsDotLink', {border: 'unset'})
tl19.to('#helpDot', {backgroundColor: '#afc7b1'})
tl19.to('#helpDotLink', {border: 'unset'})
tl19.to('#joinDot', {backgroundColor: '#afc7b1'})
tl19.to('#joinDotLink', {border: 'unset'})



ScrollTrigger.create({
  animation: tl19,
  trigger: '.Capabilities',
  start: 'top 20%',
  end: 'top 0%',
  scrub: true,
})



// const tl20 = gsap.timeline();

// tl20.to('#subscribeDot', {backgroundColor: '#afc7b1'})
// tl20.to('#subscribeDotLink', {border: 'unset'})
// tl20.to('#profitDot', {backgroundColor: '#afc7b1'})
// tl20.to('#profitDotLink', {border: 'unset'})
// tl20.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
// tl20.to('#capabilitiesDotLink', {border: 'unset'})
// tl20.to('#secureDot', {backgroundColor: '#00860B'})
// tl20.to('#secureDotLink', {border: '0.2rem solid #00860B'})
// tl20.to('#partnersDot', {backgroundColor: '#afc7b1'})
// tl20.to('#partnersDotLink', {border: 'unset'})
// tl20.to('#rewievsDot', {backgroundColor: '#afc7b1'})
// tl20.to('#rewievsDotLink', {border: 'unset'})
// tl20.to('#helpDot', {backgroundColor: '#afc7b1'})
// tl20.to('#helpDotLink', {border: 'unset'})
// tl20.to('#joinDot', {backgroundColor: '#afc7b1'})
// tl20.to('#joinDotLink', {border: 'unset'})



// ScrollTrigger.create({
//   animation: tl20,
//   trigger: '.Capabilities',
//   start: 'top 20%',
//   end: 'top 0%',
//   scrub: true,
// })



const tl21 = gsap.timeline();

tl21.to('#subscribeDot', {backgroundColor: '#afc7b1'})
tl21.to('#subscribeDotLink', {border: 'unset'})
tl21.to('#profitDot', {backgroundColor: '#afc7b1'})
tl21.to('#profitDotLink', {border: 'unset'})
tl21.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
tl21.to('#capabilitiesDotLink', {border: 'unset'})
tl21.to('#secureDot', {backgroundColor: '#00860B'})
tl21.to('#secureDotLink', {border: '0.2rem solid #00860B'})
tl21.to('#partnersDot', {backgroundColor: '#afc7b1'})
tl21.to('#partnersDotLink', {border: 'unset'})
tl21.to('#rewievsDot', {backgroundColor: '#afc7b1'})
tl21.to('#rewievsDotLink', {border: 'unset'})
tl21.to('#helpDot', {backgroundColor: '#afc7b1'})
tl21.to('#helpDotLink', {border: 'unset'})
tl21.to('#joinDot', {backgroundColor: '#afc7b1'})
tl21.to('#joinDotLink', {border: 'unset'})


ScrollTrigger.create({
  animation: tl21,
  trigger: '.secure',
  start: 'top 20%',
  end: 'top 0%',
  scrub: true,
})



const tl22 = gsap.timeline();

tl22.to('#subscribeDot', {backgroundColor: '#afc7b1'})
tl22.to('#subscribeDotLink', {border: 'unset'})
tl22.to('#profitDot', {backgroundColor: '#afc7b1'})
tl22.to('#profitDotLink', {border: 'unset'})
tl22.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
tl22.to('#capabilitiesDotLink', {border: 'unset'})
tl22.to('#secureDot', {backgroundColor: '#afc7b1'})
tl22.to('#secureDotLink', {border: 'unset'})
tl22.to('#partnersDot', {backgroundColor: '#00860B'})
tl22.to('#partnersDotLink', {border: '0.2rem solid #00860B'})
tl22.to('#rewievsDot', {backgroundColor: '#afc7b1'})
tl22.to('#rewievsDotLink', {border: 'unset'})
tl22.to('#helpDot', {backgroundColor: '#afc7b1'})
tl22.to('#helpDotLink', {border: 'unset'})
tl22.to('#joinDot', {backgroundColor: '#afc7b1'})
tl22.to('#joinDotLink', {border: 'unset'})



ScrollTrigger.create({
  animation: tl22,
  trigger: '.partners',
  start: 'top 20%',
  end: 'top 0%',
  scrub: true,
})


const tl23 = gsap.timeline();

tl23.to('#subscribeDot', {backgroundColor: '#afc7b1'})
tl23.to('#subscribeDotLink', {border: 'unset'})
tl23.to('#profitDot', {backgroundColor: '#afc7b1'})
tl23.to('#profitDotLink', {border: 'unset'})
tl23.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
tl23.to('#capabilitiesDotLink', {border: 'unset'})
tl23.to('#secureDot', {backgroundColor: '#afc7b1'})
tl23.to('#secureDotLink', {border: 'unset'})
tl23.to('#partnersDot', {backgroundColor: '#afc7b1'})
tl23.to('#partnersDotLink', {border: 'unset'})
tl23.to('#rewievsDot', {backgroundColor: '#00860B'})
tl23.to('#rewievsDotLink', {border: '0.2rem solid #00860B'})
tl23.to('#helpDot', {backgroundColor: '#afc7b1'})
tl23.to('#helpDotLink', {border: 'unset'})
tl23.to('#joinDot', {backgroundColor: '#afc7b1'})
tl23.to('#joinDotLink', {border: 'unset'})



ScrollTrigger.create({
  animation: tl23,
  trigger: '.rewievs',
  start: 'top 20%',
  end: 'top 0%',
  scrub: true,
})



const tl24 = gsap.timeline();

tl24.to('#subscribeDot', {backgroundColor: '#afc7b1'})
tl24.to('#subscribeDotLink', {border: 'unset'})
tl24.to('#profitDot', {backgroundColor: '#afc7b1'})
tl24.to('#profitDotLink', {border: 'unset'})
tl24.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
tl24.to('#capabilitiesDotLink', {border: 'unset'})
tl24.to('#secureDot', {backgroundColor: '#afc7b1'})
tl24.to('#secureDotLink', {border: 'unset'})
tl24.to('#partnersDot', {backgroundColor: '#afc7b1'})
tl24.to('#partnersDotLink', {border: 'unset'})
tl24.to('#rewievsDot', {backgroundColor: '#afc7b1'})
tl24.to('#rewievsDotLink', {border: 'unset'})
tl24.to('#helpDot', {backgroundColor: '#00860B'})
tl24.to('#helpDotLink', {border: '0.2rem solid #00860B'})
tl24.to('#joinDot', {backgroundColor: '#afc7b1'})
tl24.to('#joinDotLink', {border: 'unset'})



ScrollTrigger.create({
  animation: tl24,
  trigger: '.help',
  start: 'top 20%',
  end: 'top 0%',
  scrub: true,
})


const tl25 = gsap.timeline();

tl25.to('#subscribeDot', {backgroundColor: '#afc7b1'})
tl25.to('#subscribeDotLink', {border: 'unset'})
tl25.to('#profitDot', {backgroundColor: '#afc7b1'})
tl25.to('#profitDotLink', {border: 'unset'})
tl25.to('#capabilitiesDot', {backgroundColor: '#afc7b1'})
tl25.to('#capabilitiesDotLink', {border: 'unset'})
tl25.to('#secureDot', {backgroundColor: '#afc7b1'})
tl25.to('#secureDotLink', {border: 'unset'})
tl25.to('#partnersDot', {backgroundColor: '#afc7b1'})
tl25.to('#partnersDotLink', {border: 'unset'})
tl25.to('#rewievsDot', {backgroundColor: '#afc7b1'})
tl25.to('#rewievsDotLink', {border: 'unset'})
tl25.to('#helpDot', {backgroundColor: '#afc7b1'})
tl25.to('#helpDotLink', {border: 'unset'})
tl25.to('#joinDot', {backgroundColor: '#00860B'})
tl25.to('#joinDotLink', {border: '0.2rem solid #00860B'})



ScrollTrigger.create({
  animation: tl25,
  trigger: '.join',
  start: 'top 20%',
  end: 'top 0%',
  scrub: true,
})



const tl26 = gsap.timeline();

const arr26 = document.querySelectorAll('.bigTextAnimation1Span')

arr26.forEach(e => {
  tl26.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl26,
  trigger: '.itsprofitable__bottom-block',
  start: 'top 40%',
  end: 'top 80%',
})



// const tl27 = gsap.timeline();

// const arr27 = document.querySelectorAll('.bigTextAnimation1Span')

// arr27.forEach(e => {
//   tl27.from(e, {opacity: 0, x: -100, duration: 0.1})
// })


// ScrollTrigger.create({
//   animation: tl27,
//   trigger: '.itsprofitable__bottom-block',
//   start: 'top 40%',
//   end: 'top 80%',
// })


const tl28 = gsap.timeline();

const arr28 = document.querySelectorAll('.bigTextAnimation2Span')

arr28.forEach(e => {
  tl28.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl28,
  trigger: '.itsprofitable__bottom-block',
  start: 'top 60%',
  end: 'top 20%',
})


const tl29 = gsap.timeline();

const arr29 = document.querySelectorAll('.bigTextAnimation3Span')

arr29.forEach(e => {
  tl29.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl29,
  trigger: '.itsprofitable__bottom-block',
  start: 'top 60%',
  end: 'top 20%',
})



const tl30 = gsap.timeline();

const arr30 = document.querySelectorAll('.bigTextAnimation1Span')

arr30.forEach(e => {
  tl30.fromTo(e, {opacity: 0, x: -100, duration: 0.1}, {opacity: 1, x: 0, duration: 0.1})
})


ScrollTrigger.create({
  animation: tl30,
  trigger: '#bigTextAnimation1',
  start: 'top 60%',
  end: 'top 20%',
  // markers: true,
})



const tl31 = gsap.timeline();

const arr31 = document.querySelectorAll('.profit__container-item')

arr31.forEach(e => {
  tl31.to(e, {rotationY:'180_short'})
})


ScrollTrigger.create({
  animation: tl31,
  trigger: '.Capabilities',
  start: 'top 60%',
  end: 'top 20%',
  // markers: true,
})



const tl32 = gsap.timeline();

tl32.to('.rightBlockContainer', {rotationY:'180_short'})

ScrollTrigger.create({
  animation: tl32,
  trigger: '.help',
  start: 'top 60%',
  end: 'top 20%',
  // markers: true,
})


// const tl33 = gsap.timeline();

// tl33.to('.formContainer', {rotationY:'180_short'})

// ScrollTrigger.create({
//   animation: tl33,
//   trigger: '.help',
//   start: 'top 60%',
//   end: 'top 20%',
//   // markers: true,
// })