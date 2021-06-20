function replaceX(str, replacer) {
  return str.replace(/x/g, replacer);
}
console.log(`${replaceX("Tryber x aqui!", "\\o/")}\n`);

const skills = [
  'Django',
  'Python',
  'JavaScript',
  'Scrum',
  'SQL',
];

function showSkills(str) {
  let r = 0;
  skills.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a !== b) (a < b) ? r = -1 : r = 1;

    return r;
  });

  let result = `${str} Minhas cinco principais habilidades são:\n`;

  for (const skill of skills) {
    result = `${result} * ${skill}\n`;
  }

  return result;
}
console.log(showSkills(replaceX("Tryber x aqui!", "\\o/")));
