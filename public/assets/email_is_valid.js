export default function isValidEmail(str) {
  const reg = /.+@.+\..+/;

  str = str.toLowerCase();
  str = str.trim();

  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}
