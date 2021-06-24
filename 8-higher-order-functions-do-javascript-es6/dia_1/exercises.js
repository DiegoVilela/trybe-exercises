/** Exercise 1 */

const newEmployees = (chosenFunc) => {
  const employees = {
    id1: chosenFunc('Pedro Guerra'),
    id2: chosenFunc('Luiza Drumond'),
    id3: chosenFunc('Carla Paiva'),
  }
  return employees;
};

const slugfy = (str) => str.toLocaleLowerCase().replace(/ /g, '_');
const createEmployee = (fullName) => ({fullName, email: `${slugfy(fullName)}@trybe.com`});

console.log(newEmployees(createEmployee));


/** Exercise 2 */

const wonBet = (expected, actual) => expected === actual;

const betResult = (betNumber, betChecker) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return (wonBet(betNumber, randomNumber)) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(betResult(3, wonBet));


/** Exercise 3 */
/*
Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

    Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pointsChecker = (target, attempt) => {
  let points = 0;
  for (let i = 0; i <= target.length; i += 1) {
    if (attempt[i] === 'N.A') continue;

    (target[i] === attempt[i]) ? points += 1 : points -= 0.5;
  }
  return points;
}

const assessmentHandler = (template, answers, checker) => {
  return checker(template, answers);
}

console.log(assessmentHandler(rightAnswers, studentAnswers, pointsChecker));
