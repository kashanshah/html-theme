console.log(
  '%c Teknoffice! :)',
  'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
);

$(document).ready(function () {
  colorTheme();
});

// Color theme switcher
function colorTheme() {
  const getCurrentTheme = () => localStorage.getItem('teknoffice-theme');
  const updateCurrentTheme = (theme) => localStorage.setItem('teknoffice-theme', theme);

  const getSystemTheme = () => {
    const storedTheme = getCurrentTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const updateTheme = (theme) => {
    if (theme === 'auto') {
      document.documentElement.setAttribute(
        'data-bs-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      );
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  updateTheme(getSystemTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getCurrentTheme();
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      updateTheme(getSystemTheme());
    }
  });
}

document.getElementById('primary-color').addEventListener('input', function (event) {
  let primaryColor = event.target.value;
  document.documentElement.style.setProperty('--bs-primary', primaryColor);
});

document.getElementById('secondary-color').addEventListener('input', function (event) {
  let secondaryColor = event.target.value;
  document.documentElement.style.setProperty('--bs-secondary', secondaryColor);
});

// Load saved colors on page load
window.onload = function () {
  let savedPrimary = localStorage.getItem('primaryColor');
  let savedSecondary = localStorage.getItem('secondaryColor');

  if (savedPrimary) {
    document.documentElement.style.setProperty('--bs-primary', savedPrimary);
    document.getElementById('primary-color').value = savedPrimary;
  }

  if (savedSecondary) {
    document.documentElement.style.setProperty('--bs-secondary', savedSecondary);
    document.getElementById('secondary-color').value = savedSecondary;
  }
};

function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }

  // 6 digits
  if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `${r}, ${g}, ${b}`;
}

// Save colors when changed
document.getElementById('primary-color').addEventListener('input', function (event) {
  let primaryColor = event.target.value;
  document.documentElement.style.setProperty('--bs-primary', primaryColor);
  document.documentElement.style.setProperty('--bs-primary-rgb', hexToRgb(primaryColor));
  localStorage.setItem('primaryColor', primaryColor);
});

document.getElementById('secondary-color').addEventListener('input', function (event) {
  let secondaryColor = event.target.value;
  document.documentElement.style.setProperty('--bs-secondary', secondaryColor);
  localStorage.setItem('secondaryColor', secondaryColor);
});
