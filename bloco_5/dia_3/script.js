window.onload = () => {
  createDaysOfTheWeek();
  createMonth(dezDaysList, holidays, fridays);
  addToBtnContainer(btnHolidays, btnFridays);
  btnHolidays.addEventListener('click', toggleHolidaysBgColor);
}

/** Buttons */
const btnHolidays = createBtnHolidays('Feriados');
const btnFridays = createBtnFridays('Sexta-feiras');

/** Days */
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25]

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

/** Exercise 1 */

function createMonth(days, holidays, fridays) {
  const monthDaysList = document.getElementById('days');

  for (let day of days) {
    const dayListItem = document.createElement('li');
    dayListItem.className = 'day';

    if (holidays.includes(day)) dayListItem.className = `${dayListItem.className} holiday`;

    if (fridays.includes(day)) dayListItem.className = `${dayListItem.className} friday`;

    dayListItem.innerHTML = day;
    monthDaysList.appendChild(dayListItem);
  }
}


/** Exercise 2 */

function createBtnHolidays(str) {
  const btn = document.createElement('button');
  btn.innerText = str;
  btn.id = 'btn-holidays';
  return btn;
}

function addToBtnContainer(...buttons) {
  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  for (let i = 0; i < arguments.length; i++) {
    btnContainer.appendChild(arguments[i]);
  }
}

/** Exercise 3 */
function toggleHolidaysBgColor() {
  let bgColor = 'green';
  const holidays = document.getElementsByClassName('holiday');
  const currentBgColor = holidays[0].style.backgroundColor;

  for (let day of holidays) {
    if (currentBgColor) {
      day.style.removeProperty('background-color');
      day.style.removeProperty('color');
    } else {
      day.style.backgroundColor = bgColor;
      day.style.color = 'white';
    }
  }
};

/** Exercise 4 */

function createBtnFridays(str) {
  const btn = document.createElement('button');
  btn.innerText = str;
  btn.id = 'btn-friday';
  return btn;
}
