let clickCount = 0;
const btn = document.getElementsByTagName('button')[0];
const target = document.getElementsByTagName('p')[0];

function count() {
  clickCount += 1;
  target.innerText = clickCount;
}

window.onload = () => {
  btn.addEventListener('click', count);
}
