import request from './api/api.js';

const modalLogin = document.getElementById('modal-login');

export function userLogin() {
  modalLogin.addEventListener('submit', async function (event) {
    event.preventDefault();
    let data = new FormData(modalLogin);
    const user = {};

    if (data.get('email') === '') {
      notFoundEmail('');
      return false;
    } else if (data.get('password') === '') {
      notFoundEmail('', true);
      return false;
    } else {
      user.user_email = data.get('email');
      user.user_password = data.get('password');
    }

    const response = await request('/api/server/login', 'POST', user);

    if (response.status === 200) {
      turnOffVisibility();
      // redirect new page
      window.location.replace('/feed');
    } else if (response.status === 401) {
      notFoundEmail(response.status);
    } else if (response.status === 400) {
      notFoundEmail(response.status);
    }
  });
}

function turnOffVisibility() {
  const modalLogin = document.querySelector('.modal-login');
  const overlay = document.querySelector('.overlay');
  modalLogin.classList.remove('active');
  overlay.classList.remove('visible');
  modalLogin.querySelector('#emailLogin').value = '';
  modalLogin.querySelector('#passwordLogin').value = '';
  modalLogin.querySelector('#loginEmail').textContent = '';
  modalLogin
    .querySelector('#loginEmail')
    .closest('.contact-input').style.border = '1px solid #dfdfdf';
  modalLogin.querySelector('#loginPass').textContent = '';
  modalLogin
    .querySelector('#loginPass')
    .closest('.contact-input').style.border = '1px solid #dfdfdf';
}

function notFoundEmail(status, email = false, pass = false) {
  if (status === 401) {
    modalLogin.querySelector('#loginEmail').textContent =
      'Пользователь с таким email не найден';
    modalLogin
      .querySelector('#loginEmail')
      .closest('.contact-input').style.border = '1px solid rgb(228, 0, 96)';
  } else if (status === '' && email === false) {
    modalLogin.querySelector('#loginEmail').textContent =
      'Необходимо заполнить поля';
    modalLogin
      .querySelector('#loginEmail')
      .closest('.contact-input').style.border = '1px solid rgb(228, 0, 96)';
  } else if (status === '' && pass === false) {
    modalLogin.querySelector('#loginPass').textContent =
      'Необходимо заполнить поля';
    modalLogin
      .querySelector('#loginPass')
      .closest('.contact-input').style.border = '1px solid rgb(228, 0, 96)';
  } else if (status === 400) {
    modalLogin.querySelector('#loginPass').textContent = 'Неверный пароль';
    modalLogin
      .querySelector('#loginPass')
      .closest('.contact-input').style.border = '1px solid rgb(228, 0, 96)';
  }
}
