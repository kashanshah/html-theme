console.log(
  '%c Teknoffice! :)',
  'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
);

$(document).ready(function () {
  colorTheme();
});

// Color theme switcher
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
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', preferredTheme);
    updateCurrentTheme(theme);
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme);
    updateCurrentTheme(theme);
  }
};

updateTheme(getSystemTheme());

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const storedTheme = getCurrentTheme();
  if (storedTheme !== 'light' && storedTheme !== 'dark') {
    updateTheme(getSystemTheme());
  }
});

document.getElementById('primary-color').addEventListener('change', function (event) {
  let primaryColor = event.target.value;
  document.body.setAttribute('data-bs-theme', primaryColor);
  updateTheme(primaryColor);
});

// Load saved colors on page load
window.onload = function () {
  let savedTheme = getCurrentTheme();

  if (savedTheme) {
    document.getElementById('primary-color').value = savedTheme;
  }
};

function colorTheme() {
  document.getElementById('primary-color').addEventListener('input', function (event) {
    let primaryColor = event.target.value;
    localStorage.setItem('primaryColor', primaryColor);
  });
}
