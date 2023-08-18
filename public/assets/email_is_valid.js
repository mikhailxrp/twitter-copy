export default function isValidEmail(str) {

  str = str.trim().toLowerCase();

  if (str.includes('@') && str.includes('.') && !str.includes('@.') && str[0] != '@') {
    return true;
  } else {
    return false;
  }
}
