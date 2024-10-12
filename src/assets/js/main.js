console.log('%c Teknoffice! :)', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

$(document).ready(function () {
  colorTheme();
  heroSlider();
});

// Color theme switcher
const getCurrentTheme = () => localStorage.getItem('teknoffice-theme')
const updateCurrentTheme = theme => localStorage.setItem('teknoffice-theme', theme)

const getSystemTheme = () => {
  const storedTheme = getCurrentTheme()
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const updateTheme = theme => {
  if (theme === 'auto') {
    const preferredTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', preferredTheme)
    updateCurrentTheme(theme);
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
    updateCurrentTheme(theme);
  }
}

function colorTheme(){
  updateTheme(getSystemTheme())
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getCurrentTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      updateTheme(getSystemTheme())
    }
  })
}
var swiper;
function heroSlider() {
  $('.hero-slider').each(function (el, index) {
    const $this = $(this);
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
    swiper = new Swiper($this.get(0), {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: number => `0${number}`.slice(-2),
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      grabCursor: $this.attr('data-grab-cursor') === 'true',
      loop: $this.attr('data-loop') === 'true',
      ...getEffect($this.attr('data-effect')),
    });
  })
}
