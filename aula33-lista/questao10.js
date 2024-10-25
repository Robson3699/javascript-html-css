const somar = require('./questao01');
const elevarPotencia = require('./questao06');
const calcularRaizQuadrada = require('./questao09');

function calcularHipotenusa(cateto1, cateto2) {
    const cateto1AoQuadrado = elevarPotencia(cateto1, 2);
    const cateto2AoQuadrado = elevarPotencia(cateto2, 2);

    const somaDosQuadrados = somar(cateto1AoQuadrado, cateto2AoQuadrado);
    
    return calcularRaizQuadrada(somaDosQuadrados);
}

module.exports = calcularHipotenusa

