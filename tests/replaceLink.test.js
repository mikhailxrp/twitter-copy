import { assert } from "chai";
import replaceLink from '../public/assets/replace_link.js';

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