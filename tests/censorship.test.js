import { assert } from 'chai';
import textCensorship from '../public/assets/censorship.js';

describe('Функция замены матерных слов (цензура)', function () {
  it('одно плохое слово', function () {
    assert.equal(textCensorship('Вот ты пидор'), 'Вот ты *****');
  });
  it('два плохих слова', function () {
    assert.equal(textCensorship('Вот ты пидор конечно, это просто пиздец'), 'Вот ты ***** конечно, это просто ******');
  });
  it('три плохих слова подряд', function () {
    assert.equal(textCensorship('Бля пиздец ты гандон'), '*** ****** ты ******');
  });
  it('Плохие слова через слово', function () {
    assert.equal(
      textCensorship('Пиздец какой сегодня хуевый прихуевый день'),
      '****** какой сегодня ****** ********* день'
    );
  });
  it('Плохое утверждение', function () {
    assert.equal(textCensorship('Мне похуй все козлы'), 'Мне ***** все козлы');
  });
});
