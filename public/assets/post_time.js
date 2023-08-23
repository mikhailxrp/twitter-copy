export default function getTimeHasPassed(num) {
  let milliSeconds = num * 1000 * 60;
  let day;
  let hours;
  let minutes;
  let postTime;

  if (num >= 1440) {
    day = Math.floor(milliSeconds / (1000 * 60 * 60 * 24));
  } else if (num >= 60) {
    hours = Math.floor(milliSeconds / (1000 * 60 * 60));
  } else if (num < 60) {
    minutes = Math.floor(milliSeconds / (1000 * 60));
  }

  if (day >= 365) {
    return 'более года назад';
  } else if (day) {
    const strDayEnds = ['день', 'дня', 'дней'];
    let dayEnd = Math.abs(day) % 30;
    let day1 = dayEnd % 10;
    if (dayEnd > 10 && dayEnd < 20) {
      return (postTime = day + ' ' + strDayEnds[2]) + ' назад';
    } else if (day1 > 1 && day1 < 5) {
      return (postTime = day + ' ' + strDayEnds[1]) + ' назад';
    } else if (day1 === 1) {
      return (postTime = day + ' ' + strDayEnds[0]) + ' назад';
    } else {
      return (postTime = day + ' ' + strDayEnds[2]) + ' назад';
    }
  }

  if (hours) {
    const strHourEnds = ['час', 'часа', 'часов'];
    hours = Math.abs(hours) % 24;
    let hours1 = hours % 10;
    if (hours > 10 && hours < 20) {
      return (postTime = hours + ' ' + strHourEnds[2] + ' назад');
    } else if (hours1 > 1 && hours1 < 5) {
      return (postTime = hours + ' ' + strHourEnds[1] + ' назад');
    } else if (hours1 === 1) {
      return (postTime = hours + ' ' + strHourEnds[0] + ' назад');
    } else {
      return (postTime = hours + ' ' + strHourEnds[2] + ' назад');
    }
  }
  if (minutes) {
    const strEnds = ['минута', 'минуты', 'минут'];

    minutes = Math.abs(minutes) % 60;
    let minutes1 = minutes % 10;

    if (minutes > 10 && minutes < 20) {
      return (postTime = minutes + ' ' + strEnds[2]) + ' назад';
    } else if (minutes1 > 1 && minutes1 < 5) {
      return (postTime = minutes + ' ' + strEnds[1]) + ' назад';
    } else if (minutes1 === 1) {
      return (postTime = minutes + ' ' + strEnds[0]) + ' назад';
    } else {
      return (postTime = minutes + ' ' + strEnds[2]) + ' назад';
    }
  }
}

