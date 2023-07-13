export default function postSize(post) {
  let RegExp =
    /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

  let arr = post.split(" ");

  let arrNoLinks = []
  for(let str of arr){
    if(RegExp.test(str) === true){
      arrNoLinks.push('')
    }else {
      arrNoLinks.push(str)
    }
  }

  let str = arrNoLinks.join(",");
  return str.length;
}
