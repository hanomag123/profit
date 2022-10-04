document.addEventListener("DOMContentLoaded", () => {


//= components/
  class Menu {
    constructor(menuElement, buttonElement) {
      this.menu = typeof menuElement === "string" ? document.querySelector(menuElement) : menuElement
      this.button = typeof buttonElement === "string" ? document.querySelector(buttonElement) : buttonElement
      this.overlay = document.createElement('div')
      this.overlay.hidden = true
      this._init()
    }

    _init() {
      document.body.appendChild(this.overlay)
      this.overlay.classList.add('overlay')

      this.overlay.addEventListener('click', this.toggleMenu.bind(this))
      this.button.addEventListener('click', this.toggleMenu.bind(this))
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
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }

    enableScroll() {
      window.onscroll = function() {};
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
    }
});

const swiper2 = new Swiper(".subscribe__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // navigation: {
  //     prevEl: ".copy-block__next",
  //     nextEl: ".copy-block__prev",
  // },
  breakpoints: {
      // when window width is >= 1024px
      1024: {
          slidesPerView: 5,
          spaceBetween: 20
      },
      768: {
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
      1024: {
          slidesPerView: 2.9,
          spaceBetween: 20
      },
      768: {
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
})











