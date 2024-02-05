
let listaNumerosSortiados = [];
let numeroMaximo = 10;
let numeroAleatorio = geradorNumeroAleatorio(numeroMaximo);
let tentativa = 1;
let paragrafoIncial = `O número secreto está entre 0 e ${numeroMaximo}`
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = `O número secreto está entre 0 e ${numeroMaximo}`;
exibirMensagemInicial();

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function exibirMensagemInicial(){
    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p', paragrafoIncial);

}
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tetativas': 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            exibirTexto('p', 'O número secreto é menor!');
        }else{
            exibirTexto('p','O número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }

}

function geradorNumeroAleatorio(){
    
    let numeroEscolido = Math.round(Math.random()*numeroMaximo);
    let quantidadeNumeroEscolido = listaNumerosSortiados.length
    if(listaNumerosSortiados==quantidadeNumeroEscolido){
        listaNumerosSortiados=[]
    }
    if(listaNumerosSortiados.includes(numeroEscolido)){
        return geradorNumeroAleatorio();
    }else{
        listaNumerosSortiados.push(numeroEscolido)
        return numeroEscolido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciar(){
    numeroAleatorio = geradorNumeroAleatorio(numeroMaximo);
    exibirMensagemInicial();
    limparCampo();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
