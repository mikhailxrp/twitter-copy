export default function isValidEmail(str) {
  const dictionary = [
    '.рф',
    '.com.ru',
    '.exnet.su',
    '.net.ru',
    '.org.ru',
    '.pp.ru',
    '.ru',
    '.ru.net',
    '.su',
    '.site',
    '.aero',
    '.asia',
    '.biz',
    '.com',
    '.info',
    '.mobi',
    '.name',
    '.net',
    '.org',
    '.pro',
    '.tel',
    '.travel',
    '.xxx',
  ];

  str = str.trim().toLowerCase();
  for (let i of dictionary) {
    if (str.includes('@') && str.includes(i)) {
      return true;
    }
  }
  return false
}
