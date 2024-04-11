const convertDate = (date) => {
  let monthNum = parseInt(date.slice(0, 10).split('-')[2]);
  let day = date.slice(0, 10).split('-')[2];
  let month = null;

  switch (monthNum) {
    case 1:
      month = 'Января';
      break;
    case 2:
      month = 'Февраля';
      break;
    case 3:
      month = 'Марта';
      break;
    case 4:
      month = 'Апреля';
      break;
    case 5:
      month = 'Мая';
      break;
    case 6:
      month = 'Июня';
      break;
    case 7:
      month = 'Июля';
      break;
    case 8:
      month = 'Августа';
      break;
    case 9:
      month = 'Сентября';
      break;
    case 10:
      month = 'Октября';
      break;
    case 11:
      month = 'Ноября';
      break;
    case 12:
      month = 'Декабря';
      break;
    default:
      console.log('incorrect value');
  }

  return day + ' ' + month;
};

export default convertDate;
