//Implementando a função
function dividir(a, b) {
    if (b === 0){
        throw new Error("Erro: divisão por zero")
    }
    return a / b;
}

module.exports = dividir