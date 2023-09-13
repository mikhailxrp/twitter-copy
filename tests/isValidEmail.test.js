import { assert } from "chai";
import isValidEmail from '../public/assets/email_is_valid.js';

describe('Функция проверки email', function () {
  it('Корректный email', function () {
    assert.equal(isValidEmail('test@test.com'), true);
  });
  it('Email без домена', function () {
    assert.equal(isValidEmail('test@test'), false);
  });
  it('Email без знака @', function () {
    assert.equal(isValidEmail('test#test.ru'), false);
  });
  it('Email заглавными', function () {
    assert.equal(isValidEmail('TEST@TEST.COM'), true);
  });
  it('Email без названия домена', function () {
    assert.equal(isValidEmail('test@.ru'), false);
  });
  it('Email без имени', function () {
    assert.equal(isValidEmail('@test.ru'), false);
  });
});