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

verifyPair = (obj, key, value) => {
  return (obj[key] === value) ? true : false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));

countMathStudents = (acc, cur) => (cur.materia === 'Matemática') ? acc + cur.numeroEstudantes : acc;
watchedMath = (objLessons) => Object.values(objLessons).reduce(countMathStudents, 0);
console.log(watchedMath(allLessons));

createReport = (objLessons, teacher) => {
  const aulas = [];
  let estudantes = 0;
  const lessonList = Object.values(objLessons);
  for (const lesson of lessonList) {
    if (lesson.professor === teacher) {
      aulas.push(lesson.materia);
      estudantes += lesson.numeroEstudantes;
    }
  }
  return `\nprofessor(a): ${teacher}\naulas: [ ${aulas} ]\nestudantes: ${estudantes}`;
}
console.log(createReport(allLessons, 'Maria Clara'))
