const form = document.forms[0];
const statesEl = form.elements.namedItem('state');

const states = {
  MG: 'Minas Gerais',
  SP: 'São Paulo',
  PR: 'Paraná',
  SC: 'Santa Catarina',
  RS: 'Rio Grande do Sul',
}

function setStates() {
  for (const state in states) {
    let op = document.createElement('option');
    op.value = state;
    op.innerText = states[state];
    statesEl.appendChild(op);
  }
}

function validateForm(e) {
  e.preventDefault();

  console.log(e.target);
}

window.onload = () => {
  setStates();
}
