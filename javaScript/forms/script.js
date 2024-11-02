function exibirInfo(){
    let nome= document.getElementById("nome").value
    let email = document.getElementById("email").value
    let info = document.getElementById("info")

    info.innerText=`ola seu nome eh ${nome} e seu email eh ${email}?`
    info.style.display="block"
    info.style.fontSize = 4
    info.style.color="green"
}

function buttonBlue(){
    let texto = document.getElementById("texto").value
    let titulo = document.getElementById("titulo")

    titulo.innerText=`Bem vindo ao curso ${texto}`
    titulo.style.color="blue"
}

fetch ()
.then(response =>response.json())
.then(data =>{console.log(data)})
.catch(erro=>{console.erro("erro na requisicao",console.error()
)})