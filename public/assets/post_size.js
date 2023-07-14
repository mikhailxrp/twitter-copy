export default function postSize(post) {
  let arr = post.split(" ");
  let arrNoLinks = [];

  arr.forEach(function (item) {
    arrNoLinks.push(isLink(item));
  });
  post = arrNoLinks.join(" ");

  return post.length;
}

let dictionary = [
  "ru",
  "su",
  "рф",
  "com",
  "net",
  "name ",
  "com.ru",
  "net.ru",
  "org",
  "ru",
  "com",
  "cyou",
  "net",
  "biz",
  "info",
  "name",
  "site",
];

function isLink(str) {
  for (let i of dictionary) {
    if (str.endsWith(i)) {
      str = "";
    }
  }
  return str;
}
