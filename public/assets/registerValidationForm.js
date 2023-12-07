import isValidEmail from './email_is_valid.js';
const registerForm = document.getElementById('registerForm');

export default function registerFormValidation() {
  let formData = getInputValue();

  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let formDataKeys = Object.keys(formData).length;
    let error = 'Не правильно заполнены поля';
    if (formDataKeys < 4) {
      console.log(error);
    } 
  });
}

function getInputValue() {
  let formData = {};
  let inputName = document.querySelector('#name');
  let inputMail = document.querySelector('#email');
  let inputPass = document.querySelector('#password');
  let confirmPass = document.querySelector('#confirmPass');

  inputName.addEventListener('blur', function () {
    if (inputName.value != '' && inputName.value.length > 2) {
      formData.name = inputName.value;
      withoutError();
    } else {
      errorText('name', 'Поле не должно быть пустым и не менее двух символов');
    }
  });

  inputMail.addEventListener('blur', function () {
    if (inputMail.value != '' && isValidEmail(inputMail.value)) {
      formData.email = inputMail.value;
      withoutError();
    } else {
      errorText('email', 'Введите email: в формате example@exaple.ru');
    }
  });

  inputPass.addEventListener('blur', function () {
    if (inputPass.value != '') {
      formData.password = inputPass.value;
      withoutError();
    } else {
      errorText('pass', 'Поле не может быть пустым');
    }
  });

  confirmPass.addEventListener('blur', function () {
    if (confirmPass.value != '' && confirmPass.value === inputPass.value) {
      formData.confirmPass = confirmPass.value;
      withoutError();
    } else {
      errorText('confirm-pass', 'Поле не может быть пустым пароли должны совпадать');
    }
  });
  return formData
}

function errorText(elem, text) {
  let error = document.querySelector(`[data-err = "${elem}"]`);
  error.closest('.contact-input').style.border = '1px solid #e40060';
  error.textContent = text;
}

function withoutError() {
  let errors = document.querySelectorAll('[data-err]');
  for (let error of errors) {
    error.closest('.contact-input').style.border = '1px solid #dfdfdf';
    error.textContent = '';
  }
}
