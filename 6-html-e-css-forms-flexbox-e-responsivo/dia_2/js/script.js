const resultSection = document.getElementById('result');

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

const validateOptions = {
  rules: {
    name: {
      required: true,
      maxLengths: 40,
    },
    email: {
      required: true,
      maxLengths: 50,
      email: true,
    },
    cpf: {
      required: true,
      function: (cpf, value) => /^\d{11}$/g.test(value),
    },
    address: {
      required: true,
      maxLengths: 200,
    },
    city: {
      required: true,
      maxLengths: 28,
    },
    state: {
      required: true,
      maxLengths: 2,
    },
    type: {
      required: true,
      maxLengths: 5,
    },
    excerpt: {
      required: true,
      maxLengths: 1000,
    },
    role: {
      required: true,
      maxLengths: 40,
    },
    description: {
      required: true,
      maxLengths: 500,
    },
    begin: {
      required: true,
    }
  },
  messages: {
    cpf: 'Please enter a valid CPF.'
  },
}

function setStates(statesEl) {
  for (const state in states) {
    let op = document.createElement('option');
    op.value = state;
    op.innerText = states[state];
    statesEl.appendChild(op);
  }
}

function showResults(e) {
  e.preventDefault(); // Won't work because of JustValidate lib

  // The page will be refreshed if the form is valid.
}

window.onload = () => {
  const form = document.forms['cv'];

  setStates(form.elements.namedItem('state')); 
  form.elements.namedItem('begin').DatePickerX.init();
  form.addEventListener('submit', showResults);
  // JustValidate also submits the form if it is valid.
  // event.preventDefault() won't work here
  new window.JustValidate('.js-form', validateOptions);
}
