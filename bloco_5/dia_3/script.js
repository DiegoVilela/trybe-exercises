window.onload = () => {
  createDaysOfTheWeek();
  createMonth(dezDaysList, holidays, fridays);
}

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
