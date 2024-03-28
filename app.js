let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Você acertou!');
    let numeroTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemNaTela = `Descobriu o número secreto com ${tentativas} ${numeroTentativas}!`
    exibirTextoNaTela('p', mensagemNaTela);
    document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(numeroSecreto > chute){
            exibirTextoNaTela('p', 'O número secreto é maior.');
        } else if(numeroSecreto < chute){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido
    }
}

function limparCampo() {
    const chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}









