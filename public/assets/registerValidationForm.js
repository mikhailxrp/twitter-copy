import isValidEmail from './email_is_valid.js';
const registerForm = document.getElementById('registerForm');

export default function registerFormValidation() {
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let mail = document.querySelector('#email').value;
    let pass = document.querySelector('#password').value;
    let confirmPass = document.querySelector('#confirmPass').value;

    let formData = passwordCheck(name, mail, pass, confirmPass);

    let formDataKeys = Object.keys(formData).length;
    if (formDataKeys < 4) {
      console.log('Не правильно заполнены поля');
    } else {
      let errors = document.querySelectorAll('[data-err]');
      for(let error of errors){
        error.closest('.contact-input').style.border = '1px solid #dfdfdf';
        error.textContent = '';
      }
      console.log(formData);
    }
  });
}

function passwordCheck(name, mail, pass, confirmPass) {
  let formData = {};

  if (name != '') {
    formData.name = name;
  } else {
    let error = document.querySelector('[data-err = "name"]');
    error.closest('.contact-input').style.border = '1px solid #e40060';
    error.textContent = 'Поле не должно быть пустым';
  }

  if (mail != '' && isValidEmail(mail)) {
    formData.email = mail;
  } else {
    let error = document.querySelector('[data-err = "email"]');
    error.closest('.contact-input').style.border = '1px solid #e40060';
    error.textContent = 'Введите email: в формате example@exaple.ru';
  }

  if (pass != '') {
    formData.password = pass;
  } else {
    let error = document.querySelector('[data-err = "pass"]');
    error.closest('.contact-input').style.border = '1px solid #e40060';
    error.textContent = 'Поле не может быть пустым';
  }

  if (confirmPass != '' && confirmPass === pass) {
    formData.confirmPass = confirmPass;
  } else {
    let error = document.querySelector('[data-err = "confirm-pass"]');
    error.closest('.contact-input').style.border = '1px solid #e40060';
    error.textContent = 'Пароли не совпадают';
  }
  return formData;
}

