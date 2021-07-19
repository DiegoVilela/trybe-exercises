const fetch = require('node-fetch');

const getRandomDogImage = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const json = await response.json();

  if (response.ok) return json;
  throw new Error('error getting dog image');
};

module.exports = { getRandomDogImage };
