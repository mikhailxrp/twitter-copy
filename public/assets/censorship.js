export default function textCensorship(text) {

  const listOfRoots = [
    'Бля',
    'Гандон',
    'Гнида',
    'Говно',
    'Дроч',
    'Еба',
    'Ёба',
    'Ёбн',
    'Ёбы',
    'Ёпт',
    'Жопа',
    'Залупа',
    'Конч',
    'Лох',
    'Мразь',
    'Мудак',
    'Мудач',
    'Педик',
    'Пидор',
    'Пидр',
    'Пизд',
    'Поскуд',
    'Сать',
    'Сосать',
    'Сука',
    'Уебан',
    'Хер',
    'Хуё',
    'Хует',
    'Хуит',
    'Хуй',
    'Хуя',
    'Шалава',
    'Шлюха',
    'Оху',
    'пидар',
    'хуе',
  ];
  text = text.toLowerCase();
  let arrText = text.split(' ');

  arrText.forEach((word, index) => {
    listOfRoots.filter(function (item) {
      if (word.includes(item.toLowerCase())) {
        arrText.splice(index, 1, replaceLetters(word));
      }
    });
  });
  text = arrText.join(' ');
  return text[0].toUpperCase() + text.substr(1)
}



// функция замены букв на звездочки
function replaceLetters(word) {
  word = word.toLowerCase();
  let wordArr = word.split('');
  wordArr = wordArr.map(() => {
    return '*';
  });
  word = wordArr.join('');
  return word;
}
