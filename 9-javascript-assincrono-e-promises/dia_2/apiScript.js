const API_URL = 'https://icanhazdadjoke.com/';

const jokeContainer = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeContainer.innerText = data.joke);
};

const myPromise = new Promise((resolve, reject) => {
  const array = Array.from(
    { length: 10 },
    () => ((Math.random() * 51) + 1) ** 2
  );
  const arraySum = array.reduce((acc, curr) => acc + curr);
  (arraySum < 8000) ? resolve(arraySum) : reject(new Error('Sum >= 8000'));
})
.then((response) => [2, 3, 5, 10].map((i) => response / i))
.then((resultArray) => console.log(resultArray))
.catch(() => console.log('Promise rejeitada'));

window.onload = () => fetchJoke();
