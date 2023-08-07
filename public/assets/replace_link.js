export default function replaceLink(post) {
  const dictionary = [
    '.ru',
    '.su',
    '.рф',
    '.com',
    '.net',
    '.name ',
    '.com.ru',
    '.net.ru',
    '.org',
    '.ru',
    '.com',
    '.cyou',
    '.net',
    '.biz',
    '.info',
    '.name',
    '.site',
  ];

  let link = null;

  let wordsArr = post.split(' ');
  let arrLinks = [];

  wordsArr.forEach(function (word) {
    for (let i of dictionary) {
      if (word.endsWith(i)) {
        if (word.startsWith('https://') || word.startsWith('http://')) {
          link = `<a href="${word}">${word}</a>`;
          arrLinks.push(link);
          word = '';
        } else {
          link = `<a href="https://${word}">${word}</a>`;
          arrLinks.push(link);
          word = '';
        }
      }
    }
    arrLinks.push(word);
  });

  arrLinks.find((elem, index) => {
    if (elem === '') {
      arrLinks.splice(index, 1);
    }
  });

  post = arrLinks.join(' ');
  return post;
}
