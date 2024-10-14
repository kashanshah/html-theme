console.log('%c Teknoffice! :)', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

$(document).ready(function () {
  colorTheme();
  heroSlider();
  clientsSlider();
  gallerySlider();
});

function colorTheme(){
  const isDark = () =>
    document.documentElement.getAttribute("data-bs-theme") === "dark";
  const toggleDarkMode = () => {
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
      // extra
      document.getElementById("moon").classList.add("activeThemeIcon");
      document.getElementById("sun").classList.remove("activeThemeIcon");
      return;
    }

    document.documentElement.setAttribute("data-bs-theme", "dark");
    // extra
    document.getElementById("sun").classList.add("activeThemeIcon");
    document.getElementById("moon").classList.remove("activeThemeIcon");
  };

  const isAppearanceTransition =
    document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const themeToggleClickHandler = (evt) => {
    if (!isAppearanceTransition || !evt) {
      toggleDarkMode();
      return;
    }

    const centerX = event.currentTarget.getBoundingClientRect().left + (event.currentTarget.getBoundingClientRect().width / 2);
    const centerY = event.currentTarget.getBoundingClientRect().top + (event.currentTarget.getBoundingClientRect().height / 2)

    // Get the mouse click position, pos 0 when keyboard click
    const x = event.clientX || centerX;
    const y = event.clientY || centerY;

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => toggleDarkMode());
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: isDark() ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 400,
          easing: "ease-in",
          pseudoElement: isDark()
            ? "::view-transition-old(theme-toggle)"
            : "::view-transition-new(theme-toggle)"
        }
      );
    });
  };

  // set default theme, ideally load from local storage and respect OS preference
  document.documentElement.dataset.theme = "light";
  document.getElementById("moon").classList.add("activeThemeIcon");

  /** @type {?HTMLButtonElement} */
  const themeToggle = document.getElementById("theme-toggle");
  if (!(themeToggle instanceof HTMLButtonElement)) {
    return;
  }

  themeToggle.addEventListener("click", themeToggleClickHandler, false);
}

function heroSlider() {
  $('.hero-slider').each(function (el, index) {
    const $this = $(this);
    if($this.attr('data-has-particles') === 'true') {
      $this.find('.hero-banner').each(function(){
        const customId = makeId();
        $(this).append('<div class="particles-js" id="particles-js'+ customId +'"></div>');
        particlesJS.load('particles-js'+ customId, './assets/js/particlesjs-config.json', function() {
          // console.log('callback - particles.js config loaded');
        });
      });
    }
    const creativeEffects = [
      {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
      {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      {
        prev: {
          shadow: true,
          translate: [0, 0, -800],
          rotate: [180, 0, 0],
        },
        next: {
          shadow: true,
          translate: [0, 0, -800],
          rotate: [-180, 0, 0],
        },
      },
      {
        prev: {
          shadow: true,
          translate: ["-125%", 0, -800],
          rotate: [0, 0, -90],
        },
        next: {
          shadow: true,
          translate: ["125%", 0, -800],
          rotate: [0, 0, 90],
        },
      },
      {
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      },
    ];
    function getEffect(effect = '') {
      if (effect.includes('creative')) {
        const effectName = effect.split('-')[0];
        const effectIndex = effect.split('-')?.[1] || 0;
        return {
          effect: effectName || 'slide',
          creativeEffect: creativeEffects[(Number(effectIndex) - 1)] || creativeEffects[0],
        };
      }
      return {
        effect: effect || 'slide',
      };
    }
    var swiper = new Swiper($this.get(0), {
      lazy: (boolToStringBool($this.attr('data-lazy')) !== 'false'),
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: number => `0${number}`.slice(-2),
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      grabCursor: (boolToStringBool($this.attr('data-grab-cursor')) !== 'false'),
      loop: boolToStringBool($this.attr('data-loop')) === 'true',
      autoplay: boolToStringBool($this.attr('data-autoplay')) === 'true' ? {
        delay: Number($this.attr('data-autoplay')) || 5000,
      } : false,
      ...getEffect($this.attr('data-effect')),
    });
  })
}

function makeId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function boolToStringBool(value) {
  if(value === true || value === 'true') {
    return 'true';
  }
  if(value === false || value === 'false') {
    return 'false';
  }
  if(!!value) {
    return 'true';
  }
  return '';
}

function clientsSlider() {
  $('.clients-slider').each(function() {
    const $this = $(this);
    var swiper = new Swiper($this.get(0), {
      spaceBetween: $this.attr('data-gap') || 32,
      grabCursor: (boolToStringBool($this.attr('data-grab-cursor')) !== 'false'),
      lazy: (boolToStringBool($this.attr('data-lazy')) !== 'false'),
      loop: (boolToStringBool($this.attr('data-loop')) !== 'false'),
      navigation: boolToStringBool($this.attr('data-navigation')) !== 'false' ?  {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } : false,
      pagination: boolToStringBool($this.attr('data-pagination')) !== 'false' ? {
        el: '.swiper-pagination',
        clickable: true,
      } : false,
      autoplay: boolToStringBool($this.attr('data-autoplay')) === 'true' ? {
        delay: $this.attr('data-autoplay') || 2500,
        disableOnInteraction: false,
      } : false,
      breakpoints: {
        0: { // default
          slidesPerView: $this.attr('data-slides-per-view'),
        },
        ...($this.attr('data-slides-per-view-sm') ? {
          576: { // sm
            slidesPerView: $this.attr('data-slides-per-view-sm'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-md') ? {
          768: { // md
            slidesPerView: $this.attr('data-slides-per-view-md'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-lg') ? {
          992: { // lg
            slidesPerView: $this.attr('data-slides-per-view-lg'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-xl') ? {
          1200: { // xl
            slidesPerView: $this.attr('data-slides-per-view-xl'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-xxl') ? {
          1400: { // xxl
            slidesPerView: $this.attr('data-slides-per-view-xxl'),
          }
        } : {}),
      }
    });
  })
}

function gallerySlider() {
  $('.gallery-slider').each(function() {
    const $this = $(this);

    const container = $this.get(0);
    const options = { 
      infinite: boolToStringBool($this.attr('data-loop')) !== 'false',
      center: boolToStringBool($this.attr('data-center')) !== 'false',
      direction: $('body').attr('dir') || 'ltr',
      dragFree: $this.attr('data-dragfree'),
      Navigation: boolToStringBool($this.attr('data-navigation')) !== 'false' ? {
        classes: {
          container: "f-carousel__nav",
          button: "carousel-button-prev-next",
          isNext: "carousel-button-next",
          isPrev: "carousel-button-prev",
        },
        nextTpl: '<span class="visually-hidden">NEXT</span>',
        prevTpl: '<span class="visually-hidden"> PREVIOUS</span>',
      } : false,
    };

    new Carousel(container, options);
    return;
    
    var swiper = new Swiper($this.get(0), {
      spaceBetween: $this.attr('data-gap') || 32,
      grabCursor: (boolToStringBool($this.attr('data-grab-cursor')) !== 'false'),
      lazy: (boolToStringBool($this.attr('data-lazy')) !== 'false'),
      loop: (boolToStringBool($this.attr('data-loop')) !== 'false'),
      navigation: boolToStringBool($this.attr('data-navigation')) !== 'false' ?  {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } : false,
      pagination: boolToStringBool($this.attr('data-pagination')) !== 'false' ? {
        el: '.swiper-pagination',
        clickable: true,
      } : false,
      autoplay: boolToStringBool($this.attr('data-autoplay')) === 'true' ? {
        delay: $this.attr('data-autoplay') || 2500,
        disableOnInteraction: false,
      } : false,
      breakpoints: {
        0: { // default
          slidesPerView: $this.attr('data-slides-per-view'),
        },
        ...($this.attr('data-slides-per-view-sm') ? {
          576: { // sm
            slidesPerView: $this.attr('data-slides-per-view-sm'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-md') ? {
          768: { // md
            slidesPerView: $this.attr('data-slides-per-view-md'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-lg') ? {
          992: { // lg
            slidesPerView: $this.attr('data-slides-per-view-lg'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-xl') ? {
          1200: { // xl
            slidesPerView: $this.attr('data-slides-per-view-xl'),
          }
        } : {}),
        ...($this.attr('data-slides-per-view-xxl') ? {
          1400: { // xxl
            slidesPerView: $this.attr('data-slides-per-view-xxl'),
          }
        } : {}),
      }
    })
  });
}
