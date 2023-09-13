import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

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