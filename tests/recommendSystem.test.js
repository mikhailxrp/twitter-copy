import { assert } from "chai";
import recommendRead from '../public/assets/recomend_system.js';

describe('Рекомендательная система', function () {
  it('Один профиль', function () {
    assert.equal(
      recommendRead(
        {
          id: 256,
          posts: ['Привет. #сегодня был на концерте группы #linkinpark', 'как вам новая песня #linkinpark'],
        },
        [
          {
            id: 257,
            posts: ['Сегодня вышла новая версия #javascript', 'как вам новая версия #javascript?'],
          },
          {
            id: 258,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
        ],
        1
      ),
      258
    );
  });
  it('Два профиля', function () {
    assert.deepEqual(
      recommendRead(
        {
          id: 256,
          posts: ['Привет. #сегодня был на концерте группы #linkinpark', 'как вам новая песня #linkinpark'],
        },
        [
          {
            id: 257,
            posts: ['Сегодня вышла новая версия #javascript', 'как вам новая версия #javascript?'],
          },
          {
            id: 258,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
        ],
        2
      ),
      [258, 257]
    );
  });
  it('Три профиля', function () {
    assert.deepEqual(
      recommendRead(
        {
          id: 256,
          posts: [
            'Привет. #сегодня был на концерте группы #linkinpark',
            'как вам новая песня #linkinpark',
            'как вам новая версия #javascript?',
            'Мой первый язык #программирования #javascript',
            'А как Вы относитесь к #javascript',
          ],
        },
        [
          {
            id: 257,
            posts: ['Сегодня вышла новая версия #javascript', 'как вам новая версия #javascript?'],
          },
          {
            id: 258,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 259,
            posts: ['#сегодня мне не понравилась новая песня как вам новая версия #javascript?'],
          },
          {
            id: 260,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 261,
            posts: ['#python это тоже язык #программирования как и #javascript'],
          },
        ],
        3
      ),
      [257, 258, 260]
    );
  });
  it('Четыре профиля', function () {
    assert.deepEqual(
      recommendRead(
        {
          id: 256,
          posts: [
            'Привет. #сегодня был на концерте группы #linkinpark',
            'как вам новая песня #linkinpark',
            'как вам новая версия #javascript?',
            'Мой первый язык #программирования #javascript',
            'А как Вы относитесь к #javascript',
          ],
        },
        [
          {
            id: 257,
            posts: ['Сегодня вышла новая версия #javascript', 'как вам новая версия #javascript?'],
          },
          {
            id: 258,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 259,
            posts: ['#сегодня мне не понравилась новая песня как вам новая версия #javascript?'],
          },
          {
            id: 260,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 261,
            posts: ['#python это тоже язык #программирования как и #javascript'],
          },
        ],
        4
      ),
      [257, 258, 260, 261]
    );
  });
  it('Пять профилей', function () {
    assert.deepEqual(
      recommendRead(
        {
          id: 256,
          posts: [
            'Привет. #сегодня был на концерте группы #linkinpark',
            'как вам новая песня #linkinpark',
            'как вам новая версия #javascript?',
            'Мой первый язык #программирования #javascript',
            'А как Вы относитесь к #javascript',
          ],
        },
        [
          {
            id: 257,
            posts: ['Сегодня вышла новая версия #javascript', 'как вам новая версия #javascript?'],
          },
          {
            id: 258,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 259,
            posts: ['#сегодня мне не понравилась новая песня как вам новая версия #javascript?'],
          },
          {
            id: 260,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 261,
            posts: ['#python это тоже язык #программирования как и #javascript'],
          },
        ],
        5
      ),
      [257, 258, 260, 261, 259]
    );
  });
  it('Ноль профилей', function () {
    assert.deepEqual(
      recommendRead(
        {
          id: 256,
          posts: [
            'Привет. #сегодня был на концерте группы #linkinpark',
            'как вам новая песня #linkinpark',
            'как вам новая версия #javascript?',
            'Мой первый язык #программирования #javascript',
            'А как Вы относитесь к #javascript',
          ],
        },
        [
          {
            id: 257,
            posts: ['Сегодня вышла новая версия #javascript', 'как вам новая версия #javascript?'],
          },
          {
            id: 258,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 259,
            posts: ['#сегодня мне не понравилась новая песня как вам новая версия #javascript?'],
          },
          {
            id: 260,
            posts: ['#сегодня мне не понравилась новая песня #linkinpark'],
          },
          {
            id: 261,
            posts: ['#python это тоже язык #программирования как и #javascript'],
          },
        ],
        0
      ),
      []
    );
  });
});