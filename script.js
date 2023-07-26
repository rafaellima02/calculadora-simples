// Função para limpar o visor da calculadora
function clean() {
    document.getElementById("resultado").innerText = "";
}

// Função para voltar um caractere no visor
function back() {
    const resultado = document.getElementById("resultado").innerText;
    document.getElementById("resultado").innerText = resultado.slice(0, -1);
}

// Função para inserir um caractere no visor da calculadora
function insert(value) {
    document.getElementById("resultado").innerText += value;
}

// Função para realizar a adição
function add() {
    const resultado = document.getElementById("resultado").innerText;
    const partes = resultado.split('+');
    const num1 = parseFloat(partes[0]);
    const num2 = parseFloat(partes[1]);
    const resposta = num1 + num2;
    document.getElementById("resultado").innerText = resposta;
}

// Função para realizar a subtração
function subtract() {
    const resultado = document.getElementById("resultado").innerText;
    const partes = resultado.split('-');
    const num1 = parseFloat(partes[0]);
    const num2 = parseFloat(partes[1]);
    const resposta = num1 - num2;
    document.getElementById("resultado").innerText = resposta;
}

// Função para realizar a multiplicação
function multiply() {
    const resultado = document.getElementById("resultado").innerText;
    const partes = resultado.split('*');
    const num1 = parseFloat(partes[0]);
    const num2 = parseFloat(partes[1]);
    const resposta = num1 * num2;
    document.getElementById("resultado").innerText = resposta;
}

// Função para realizar a divisão
function divide() {
    const resultado = document.getElementById("resultado").innerText;
    const partes = resultado.split('/');
    const num1 = parseFloat(partes[0]);
    const num2 = parseFloat(partes[1]);
    const resposta = num1 / num2;
    document.getElementById("resultado").innerText = resposta;
}

// Função para realizar o cálculo
function calcular() {
    const resultado = document.getElementById("resultado").innerText;
    const operador = resultado.includes('+') ? '+' : resultado.includes('-') ? '-' : resultado.includes('*') ? '*' : '/';

    switch (operador) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        default:
            break;
    }
}