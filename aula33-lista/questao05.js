const dividir = require("./questao04.js")

function calcularMedia(nota1, nota2, nota3, nota4) {
    const soma = nota1 + nota2 + nota3 + nota4;
    return dividir(soma, 4);
}

module.exports = calcularMedia