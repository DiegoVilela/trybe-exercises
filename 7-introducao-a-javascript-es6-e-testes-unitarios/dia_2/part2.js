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