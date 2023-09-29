// Работа с модальными окнами
const signUpBtns = document.querySelectorAll('.btn-sign-up');
const loginBtns = document.querySelectorAll('.btn-login');
const overlay = document.querySelector('#overlay');
const closeBtns = document.querySelectorAll('[data-close="close"]');
const registerWindow = document.querySelector('[data-modal="register"]');
const loginWindow = document.querySelector('[data-modal="login"]');

export default function interactionModal() {
  signUpBtns.forEach((item) => {
    item.addEventListener('click', function () {
      openWindow(registerWindow, overlay);

      if (registerWindow.classList.contains('no-active')) {
        registerWindow.classList.remove('no-active');
      }
    });
  });

  loginBtns.forEach((item) => {
    item.addEventListener('click', function () {
      openWindow(loginWindow, overlay);

      if (loginWindow.classList.contains('no-active')) {
        loginWindow.classList.remove('no-active');
      }
    });
  });

  closeBtns.forEach(function (close) {
    close.addEventListener('click', closeWindow);
  });

  // если ширина экрана меньше 575px
  if (window.innerWidth <= 575) {
    // Свайп по окну регистрации или логина
    document.addEventListener('touchstart', touchStart, false);
    document.addEventListener('touchmove', touchMove, false);
  }
}

function disableActivity() {
  setTimeout(function () {
    loginWindow.classList.remove('active');
    overlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
  }, 200);
}

let y1 = null;

function touchStart(event) {
  const firstTouch = event.touches[0];
  y1 = firstTouch.clientY;
}

function touchMove(event) {
  if (!y1) {
    return false;
  }

  let y2 = event.touches[0].clientY;

  let yDiff = y2 - y1;

  if (Math.abs(yDiff)) {
    if (yDiff > 0 && loginWindow.classList.contains('active')) {
      loginWindow.classList.add('no-active');
      disableActivity();
    } else if (yDiff > 0 && registerWindow.classList.contains('active')) {
      registerWindow.classList.add('no-active');
      disableActivity();
    }
  }
  y1 = null;
}

function closeWindow() {
  overlay.classList.remove('visible');
  registerWindow.classList.remove('active');
  loginWindow.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function openWindow(window, overlay) {
  overlay.classList.add('visible');
  window.classList.add('active');
  document.body.classList.add('no-scroll');
}
