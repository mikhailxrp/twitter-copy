import {assert} from 'chai';
import postTime from '../public/assets/post_time.js';

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