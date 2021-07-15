const hydrate = (str) => {
  const numbers = str.match(/\d+/g).map(Number);
  const cupsTotal = numbers.reduce((acc, curr) => acc + curr);
  let un = 'copos';
  if (cupsTotal === 1) un = 'copo';

  return `${cupsTotal} ${un} de água`;
}

module.exports = hydrate;
