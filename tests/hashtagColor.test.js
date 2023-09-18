import { assert } from "chai";
import hashtagColor from '../public/assets/hashtag_color.js';

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