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

const form = document.forms['cv'];
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

  if (beginValue[2] !== '/' || beginValue[5] !== '/') return false;

  let array = beginValue.split('/');
  let dd = Number(array[0]);
  let mm = Number(array[1]);
  let yyyy = Number(array[2]);

  if (dd < 1 || dd > 31) return false;
  if (mm < 1 || mm > 12) return false;
  if (yyyy < 1) return false;

  return true;
}

function validateForm(form) {
  const formData = new FormData(form);
  const invalidFields = [];

  for (let i of formData.entries()) {
    if (['state', 'type', 'begin'].includes(i[0])) continue;

    if (!i[1] || i[1].length > maxLengths[i[0]]) invalidFields.push(i[0]);
  }
  if (!validateBegin(formData)) invalidFields.push('begin');

  return {
    formData: formData,
    invalidFields: invalidFields
  }
}

const errorsAside = document.getElementById('errors');
const errorsList = document.getElementById('error-list');
const resultSection = document.getElementById('result');

function handleErrors(invalidFields) {
  errorsAside.style.display = 'none';

  if (invalidFields.length) {
    while (errorsList.firstChild) errorsList.firstChild.remove(); // Older erros

    for (let i of invalidFields) {
      let li = document.createElement('li');
      li.innerHTML = `The field <strong>${i}</strong> is required and its <i>max length</i> is <strong>${maxLengths[i]}</strong>.`;
      errorsList.appendChild(li);
    }
    errorsAside.style.display = 'block';
  }
}

function showResults(formData) {
  resultSection.style.display = 'none';

  const formDataTable = document.getElementById('formData');
  while (formDataTable.firstChild) formDataTable.firstChild.remove(); // Older data

  for (let field of formData) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td = document.createElement('td');
    th.innerText = field[0]; // name
    td.innerText = field[1]; // value
    tr.appendChild(th);
    tr.appendChild(td);
    formDataTable.appendChild(tr);
  }

  resultSection.style.display = 'flex';
}

function handleForm(e) {
  e.preventDefault();

  data = validateForm(e.target)
  handleErrors(data.invalidFields);
  showResults(data.formData);
}

window.onload = () => {
  setStates();
  form.addEventListener('submit', handleForm);
}
