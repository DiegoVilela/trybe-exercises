/** Exercise 1 */

fatorial = n => (n <= 1) ? n : n * fatorial(n - 1);

console.log(`5! = ${fatorial(5)}`);
