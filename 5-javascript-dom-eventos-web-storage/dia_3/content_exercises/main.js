const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

divUm.addEventListener('click', addTechClass);
divDois.addEventListener('click', addTechClass);
divTres.addEventListener('click', addTechClass);
input.addEventListener('keyup', changeTextTech);
myWebpage.addEventListener('dblclick', goToMyPage);
myWebpage.addEventListener('mouseover', changeColor);

function addTechClass(event) {
    let divClicked = event.target;

    if (divClicked.id == 'divUm') {
        divDois.className = '';
        divTres.className = '';
        divClicked.className = 'tech';
    } else if (divClicked.id == 'divDois') {
        divUm.className = '';
        divTres.className = '';
        divClicked.className = 'tech';
    } else if (divClicked.id == 'divTres') {
        divUm.className = '';
        divDois.className = '';
        divClicked.className = 'tech';
    }
}

function changeTextTech(event) {
    let text = event.target.value;

    document.getElementsByClassName('tech')[0].innerText = text;
}

function goToMyPage() {
    window.location.href = 'https://diegovilela.github.io';
}

function changeColor(event) {
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.color = `#${randomColor}`;
}
