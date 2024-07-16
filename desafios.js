// Lista de desafios 1

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarChute(){
    console.log('O botão foi clicado');
}

function alertaBotao(){
    alert('Eu amo JS');
}

let cidade;
function promptBotao(){
   cidade = prompt('Fale um cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

let numero1, numero2, soma;

function somaNumeros(){
    numero1 = parseInt(prompt('Digite um número:'));
    console.log(numero1);
    numero2 = parseInt(prompt('Digite um número:'));
    console.log(numero2);
    // numero2 = prompt(parseInt(prompt('Digite um número:')));
    alert(`A soma do primeiro número com o segundo número é ${soma=(numero1 + numero2)}.`)
    console.log(soma);
}