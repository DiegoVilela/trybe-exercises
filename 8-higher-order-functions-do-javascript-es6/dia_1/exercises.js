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
