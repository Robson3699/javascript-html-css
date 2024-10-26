//document.getElementById("txt inicial").innerText="Texto Atualizado"
//document.getElementById("txt inicial").style.color="red"
let quadrado =document.getElementById("quadrado")

function mudarCor(){
quadrado.style.backgroundColor="green"
}
function desfazer(){
    quadrado.style.backgroundColor="aquamarine"
}
function diminuirTamanho(){
    quadrado.style.height="100px"
    quadrado.style.width="100px"
}
function voltarTamanho(){
    quadrado.style.height="200px"
    quadrado.style.width="200px"
}