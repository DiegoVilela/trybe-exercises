const techList = (techArray, name) => {
  if (!techArray.length) return 'Vazio!';

  return techArray.map((tech) => ({ tech, name }))
    .sort((a, b) => (a.tech > b.tech) ? 1 : -1);
};

module.exports = techList;
