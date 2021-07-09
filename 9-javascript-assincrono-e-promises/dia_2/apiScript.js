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
  const array = [...Array(10)].map(() => ((Math.random() * 51) + 1) ** 2);
  const arraySum = array.reduce((acc, curr) => acc + curr);
  console.log('Debug arraySum:', arraySum);
  if (arraySum < 8000) {
    resolve(array);
  } else {
    reject(new Error('Sum >= 8000'));
  }
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));

window.onload = () => fetchJoke();
