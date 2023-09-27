export default function hashtagColor(str) {
  let strArr = str.split(' ');
  let hashtagArr = [];
  for (let word of strArr) {
    if (word[0] === '#' && word.length > 1) {
      let hashtag = `<a href='/search?tag=${word.substring(1)}'>${word}</a>`;
      hashtagArr.push(hashtag);
      word = '';
    } else {
      hashtagArr.push(word);
    }
  }
  str = hashtagArr.join(' ');
  return str;
}
