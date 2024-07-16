// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
console.log(`O número secreto é: ${numeroSecreto}.`);
let tentativas = 1;
exibirMensagemInicial();

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){  //.include verifica se o número gerado ja esta na lista
      return gerarNumeroAleatorio();  
    } else{ 
        listaDeNumerosSorteados.push(numeroEscolhido); //.push adiciona item ao final da lista / Para remover o último elemento da lista, você pode usar o método .pop
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    } 
    
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(`O número chutado é: ${chute}`);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativa);   
        chute = document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor!');
        } else{
            exibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    console.log('Jogo reiniciado.');
    numeroSecreto = gerarNumeroAleatorio();
    console.log(`O número secreto é: ${numeroSecreto}.`);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    chute = document.getElementById('reiniciar').setAttribute('disabled', true); 
}


