import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';
import replaceLink from '../public/assets/replace_link.js';
import isValidEmail from '../public/assets/email_is_valid.js';
import postTime from '../public/assets/post_time.js';
import hashtagColor from '../public/assets/hashtag_color.js';

describe('Функция проверки расчета размера поста', function () {
  it('без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });
  it('со ссылкой', function () {
    assert.equal(
      postSize('https://github.com/burtovoy/template/blob/master/tests/post_size.test.js Это новый пост'),
      15
    );
  });
  it('Только ссылки', function () {
    assert.equal(postSize('www.kinopoisk.ru https://www.kinopoisk.ru https://www.kinopoisk.ru'), 2);
  });

  it('ссылка без домена', function () {
    assert.equal(postSize('www.kinopoisk тут самые классные фильмы'), 39);
  });
  it('без пробелов', function () {
    assert.equal(postSize('словословословослово'), 20);
  });
  it('ссылка без протокола с доменом', function () {
    assert.equal(postSize('kinopoisk.ru тут самые лучшие фильмы'), 24);
  });
  it('две ссылки', function () {
    assert.equal(postSize('kinopoisk.ru тут самые лучшие фильмы или тут https://www.kinopoisk.ru'), 33);
  });
  it('Пробелы', function () {
    assert.equal(postSize('          '), 10);
  });
  it('Пустая строка', function () {
    assert.equal(postSize(''), 0);
  });
  it('ссылки с большой буквы', function () {
    assert.equal(postSize('WWW.KINOPOISK.RU'), 0);
  });
});

describe('Функция замены ссылок на html', function () {
  it('без ссылок', function () {
    assert.equal(replaceLink('this string no link'), 'this string no link');
  });
  it('со ссылкой', function () {
    assert.equal(
      replaceLink('Эта строка github.com имеет ссылку'),
      'Эта строка <a href="https://github.com">github.com</a> имеет ссылку'
    );
  });
  it('сылка с протоколом', function () {
    assert.equal(
      replaceLink('Эта строка https://github.com имеет ссылку с протоколом'),
      'Эта строка <a href="https://github.com">https://github.com</a> имеет ссылку с протоколом'
    );
  });
  it('ссылка с протоколом и без протокола', function () {
    assert.equal(
      replaceLink('Эта строка https://github.com имеет ссылку с протоколом и тут без протокола github.com'),
      'Эта строка <a href="https://github.com">https://github.com</a> имеет ссылку с протоколом и тут без протокола <a href="https://github.com">github.com</a>'
    );
  });
  it('без ссылки с частью протокола', function () {
    assert.equal(replaceLink('Эта строка https://github без ссылки'), 'Эта строка https://github без ссылки');
  });
});

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

describe('Функция времени публикации', function () {
  it('10 минут', function () {
    assert.equal(postTime(10), '10 минут назад');
  });
  it('3 минуты', function () {
    assert.equal(postTime(3), '3 минуты назад');
  });
  it('48 минут', function () {
    assert.equal(postTime(48), '48 минут назад');
  });
  it('1 час', function () {
    assert.equal(postTime(61), '1 час назад');
  });
  it('10 часов', function () {
    assert.equal(postTime(610), '10 часов назад');
  });
  it('1 день', function () {
    assert.equal(postTime(1445), '1 день назад');
  });
  it('3 дня', function () {
    assert.equal(postTime(4325), '3 дня назад');
  });
  it('1 год', function () {
    assert.equal(postTime(525605), 'более года назад');
  });
});

describe('Функция замены hashtag', function () {
  it('Один хэштег', function () {
    assert.equal(hashtagColor('#javascript'), "<a href='/search?tag=javascript'>#javascript</a>");
  });
  it('Предложение с хэштегом', function () {
    assert.equal(
      hashtagColor('Что такое #javascript ?'),
      "Что такое <a href='/search?tag=javascript'>#javascript</a> ?"
    );
  });
  it('Несколько хэштегов', function () {
    assert.equal(
      hashtagColor('#python #ruby #javascript'),
      "<a href='/search?tag=python'>#python</a> <a href='/search?tag=ruby'>#ruby</a> <a href='/search?tag=javascript'>#javascript</a>"
    );
  });
  it('Без хэштегов', function () {
    assert.equal(hashtagColor('Что такое javascript ?'), 'Что такое javascript ?');
  });
  it('Без хэштегов со знаком хэша', function () {
    assert.equal(hashtagColor('Что такое # javascript ?'), 'Что такое # javascript ?');
  });
});
