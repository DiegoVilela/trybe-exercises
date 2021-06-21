const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

add = (obj, key, value) => {
  return obj[key] = value;
}
add(lesson2, 'turno', 'manhã');
console.table(lesson2);

listKeys = (obj) => {
  Object.keys(obj).forEach(value => console.log(value));
}
listKeys(lesson3);

size = obj => {
  let size = 0;
  for (const key in obj) if (obj.hasOwnProperty(key)) size += 1;

  return size;
}
console.log(size(lesson1));

listValues = (obj) => {
  Object.values(obj).forEach(value => console.log(value));
}
listValues(lesson3);

allLessons = {}
Object.assign(allLessons, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});
console.log(allLessons);

studentTotal = objLessons => {
  return Object.values(objLessons).reduce((acc, cur) => acc + cur.numeroEstudantes, 0);
}
console.log(studentTotal(allLessons));

getValueByNumber = (key, idx) => {
  return Object.values(allLessons[key])[idx];
}
console.log(getValueByNumber('lesson1', 0));
