import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';
import replaceLink from '../public/assets/replace_link.js';

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
