const states = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goías',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraíma',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

const maxLengths = {
  name: 40,
  email: 50,
  cpf: 11,
  address: 200,
  city: 28,
  excerpt: 1000,
  role: 40,
  description: 500,
}

const form = document.forms[0];
const statesEl = form.elements.namedItem('state');

function setStates() {
  for (const state in states) {
    let op = document.createElement('option');
    op.value = state;
    op.innerText = states[state];
    statesEl.appendChild(op);
  }
}

function validateBegin(data) {
  const beginValue = data.get('begin');

  // todo validate it
  return true;
}

function validateForm(e) {
  e.preventDefault();

  const errors = [];
  const formData = new FormData(e.target);

  for (let i of formData.entries()) {
    if (['state', 'type', 'begin'].includes(i[0])) continue;

    if (!i[1] || i[1].length > maxLengths[i[0]]) errors.push(i[0]);
  }
  if (!validateBegin(formData)) errors.push('begin');

  if (errors.length > 0) {
    // todo Show div
    console.log("Errors:", errors.join(', '));
  }
}

window.onload = () => {
  setStates();
  form.addEventListener('submit', validateForm);
}
