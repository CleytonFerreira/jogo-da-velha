let jogador, vencedor = null;
const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');
const quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    const quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '') {
        return;
    }

    quadrado.innerHTML = jogador;

    if (jogador === 'X') {
        jogador = 'O';
        
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = `<b>${jogador}</b>`;
}

function checaVencedor() {
    const q1 = document.getElementById(1);
    const q2 = document.getElementById(2);
    const q3 = document.getElementById(3);
    const q4 = document.getElementById(4);
    const q5 = document.getElementById(5);
    const q6 = document.getElementById(6);
    const q7 = document.getElementById(7);
    const q8 = document.getElementById(8);
    const q9 = document.getElementById(9);

    if (checaSequencia(q1, q2, q3)) {
        mudaCorQuadrado(q1, q2, q3);
        mudarVencedor(q1);
        return;
    }

    if (checaSequencia(q4, q5, q6)) {
        mudaCorQuadrado(q4, q5, q6);
        mudarVencedor(q4);
        return;
    }

    if (checaSequencia(q7, q8, q9)) {
        mudaCorQuadrado(q7, q8, q9);
        mudarVencedor(q7);
        return;
    }

    if (checaSequencia(q1, q4, q7)) {
        mudaCorQuadrado(q1, q4, q7);
        mudarVencedor(q1);
        return;
    }

    if (checaSequencia(q2, q5, q8)) {
        mudaCorQuadrado(q2, q5, q8);
        mudarVencedor(q2);
        return;
    }

    if (checaSequencia(q3, q6, q9)) {
        mudaCorQuadrado(q3, q6, q9);
        mudarVencedor(q3);
        return;
    }

    if (checaSequencia(q1, q5, q9)) {
        mudaCorQuadrado(q1, q5, q9);
        mudarVencedor(q1);
        return;
    }

    if (checaSequencia(q3, q5, q7)) {
        mudaCorQuadrado(q3, q5, q7);
        mudarVencedor(q3);
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = `<b>${vencedor}</b>`;
}

function mudaCorQuadrado(q1, q2, q3) {
    q1.style.background = 'red';
    q1.style.color = '#fff';
    q2.style.background = 'red';
    q2.style.color = '#fff';
    q3.style.background = 'red';
    q3.style.color = '#fff';
}

function checaSequencia(q1, q2, q3) {
    let eigual = false;

    if (q1.innerHTML !== '' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        const quadradoInicial = document.getElementById(i);
        quadradoInicial.style.background = '#a3a2a2';
        quadradoInicial.style.color = '#000';
        quadradoInicial.innerHTML = '';
    }

    mudarJogador('X');
}