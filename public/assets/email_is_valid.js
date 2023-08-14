export default function isValidEmail(str) {
  str = str.trim().toLowerCase();

  if (str.includes('@') && str.includes('.') && !str.includes('@.')) {
    return true;
  } else {
    return false;
  }
}
