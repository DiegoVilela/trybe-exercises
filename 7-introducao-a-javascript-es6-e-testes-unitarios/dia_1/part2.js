/** Exercise 1 */

fatorial = n => (n <= 1) ? n : n * fatorial(n - 1);

console.log(`5! = ${fatorial(5)}`);


/** Exercise 2 */

longestWord = word => {
  const wordsArray = word.split(' ');

  let longest = wordsArray[0];
  for (const word of wordsArray) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

const phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";
console.log(`\n${longestWord(phrase)}`);
