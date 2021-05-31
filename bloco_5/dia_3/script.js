window.onload = () => {
  createDaysOfTheWeek();
  createMonth(dezDaysList, holidays, fridays);
  addToBtnContainer(btnHolidays, btnFridays);
  btnHolidays.addEventListener('click', toggleHolidaysBgColor);
  btnFridays.addEventListener('click', toggleFridaysText);
  addEventListenerToAllDays();
  addEventListenerToAllTasks();
  btnAdd.addEventListener('click', createAppointment);
  inputAptmt.addEventListener('keyup', createAppointment);
}

/** Buttons */
const btnHolidays = createBtnHolidays('Feriados');
const btnFridays = createBtnFridays('Sexta-feiras');
const btnAdd = document.getElementById('btn-add');

/** Days */
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25]

/** Special days elements */
const holidayElements = document.getElementsByClassName('holiday');
const fridayElements = document.getElementsByClassName('friday');

const allDays = document.getElementsByClassName('day');
const tasksContainer = document.getElementsByClassName('my-tasks')[0];
const appointmentList = document.getElementsByClassName('task-list')[0];
const inputAptmt = document.getElementById('task-input');


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

    if (holidays.includes(day)) dayListItem.className += ' holiday';

    if (fridays.includes(day)) dayListItem.className += ' friday';

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
  const currentBgColor = holidayElements[0].style.backgroundColor;

  for (let day of holidayElements) {
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


/** Exercise 5 */
function toggleFridaysText() {
  const currentText = fridayElements[0].innerHTML;
  const newText = '<strong>Sextou!</strong>';

  for (let i = 0; i < fridayElements.length; i++) {
    if (currentText === newText) {
      fridayElements[i].innerHTML = fridays[i];
    } else {
      fridayElements[i].innerHTML = newText;
    }
  }
}


/** Exercise 6 */

function addEventListenerToAllDays() {
  for (let day of allDays) {
    day.addEventListener('mouseover', zoomIn);
    day.addEventListener('mouseout', zoomOut);
    day.addEventListener('click', toggleMarkDay);
  }
}

function zoomIn(event) {
  event.target.style.fontSize = '2em';
}

function zoomOut(event) {
  event.target.style.removeProperty('font-size');
}


/** Exercise 7 */

function createTask(str) {
  let taskElement = document.createElement('span');
  taskElement.innerText = str;
  tasksContainer.appendChild(taskElement);
}
createTask("Study JavaScript");


/** Exercise 8 */

function createLegend(color) {
  let legendDiv = document.createElement('div');
  legendDiv.className = 'task';
  legendDiv.style.backgroundColor = color;
  tasksContainer.appendChild(legendDiv);
}
createLegend('blue');


/** Exercise 9 */

function toggleSelectTask(event) {
  const taskClicked = event.target;

  if (taskClicked.className.includes('selected')) {
    taskClicked.className = 'task';
  } else {
    taskClicked.className = 'task selected';
  }
}

function addEventListenerToAllTasks() {
  const legendElements = document.getElementsByClassName('task');

  for (let legend of legendElements) {
    legend.addEventListener('click', toggleSelectTask);
  }
}


/** Exercise 10 */

function toggleMarkDay(event) {
  const taskSelected = document.querySelector('.task.selected');

  if (taskSelected) {
    const clicked = event.target;
    const isDayAlreaySelected = Boolean(clicked.style.backgroundColor);
    const color = taskSelected.style.backgroundColor;

    (isDayAlreaySelected) ? deselectDay(clicked) : selectDay(clicked, color);
  }
}

function selectDay(dayElement, bgColor) {
  dayElement.style.backgroundColor = bgColor;
  dayElement.style.color = 'white';
}

function deselectDay(dayElement) {
  dayElement.style.removeProperty('background-color');
  dayElement.style.removeProperty('color');
}


/** Bonus */

function createAppointment(event) {
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  if (event.type === 'click' || event.code === 'Enter') {

    if (!inputAptmt.value) return alert('Please, enter a valid text.');

    const li = document.createElement('li');
    li.innerText = inputAptmt.value;
    appointmentList.appendChild(li);
    inputAptmt.value = null;
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus
    inputAptmt.focus({preventScroll: true});
  }
}
