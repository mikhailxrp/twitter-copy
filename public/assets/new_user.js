import request from './api/api.js';

export default function () {
  newUser();
}

const registerForm = document.getElementById('registerForm');

function newUser() {
  registerForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    let data = new FormData(registerForm);

    let state = confirmPassword(data.get('password'), data.get('confirmPass'));

    if (state) {
      const user = {
        user_name: data.get('name'),
        user_lastname: '',
        user_nikname: '@' + data.get('name'),
        user_email: data.get('email'),
        user_password: data.get('password'),
        id: new Date().getTime(),
      };

      const response = await request('/api/server/newUser', 'POST', user);
      
      if (response.status === 200) {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPass').value = '';
        const modalRegister = document.querySelector('.modal-register');
        const overlay = document.querySelector('.overlay');
        modalRegister.classList.remove('active');
        overlay.classList.remove('visible');
      } else if(response.status !== 200 && response.name){
        document.querySelector('[data-err="name"]').textContent = response.name
        document.getElementById('name').closest('.contact-input').style.border = '1px solid rgb(228, 0, 96)';
      }else if(response.status !== 200 && response.email){
        document.querySelector('[data-err="email"]').textContent = response.email;
        document.getElementById('email').closest('.contact-input').style.border = '1px solid rgb(228, 0, 96)';
      }
    } else {
      document.querySelector('[data-err="pass"]').textContent = 'Пароли не совпадают';
    }
  });
}

function confirmPassword(pass, confPass) {
  if (pass === confPass) {
    return true;
  } else {
    return false;
  }
}
