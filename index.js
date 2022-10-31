//Curtir card 1
let coracaoRosa = document.querySelector('.icone-curtir')
let coracaoVazio = document.querySelector('.icone-coracao')

//Salvar card 1
let salvarBranco = document.querySelector('.icone-salvar')
let salvarPintado = document.querySelector('.icone-salvar_pintado')

//Curtir card 2
let coracaoRosa2 = document.querySelector('.icone-curtir2')
let coracaoVazio2 = document.querySelector('.icone-coracao2')

//Salvar card 2
let salvarBranco2 = document.querySelector('.icone-salvar2')
let salvarPintado2 = document.querySelector('.icone-salvar_pintado2')

//Card 1
function curtir(){
    coracaoRosa.classList.add("mostrar")
    coracaoVazio.classList.add("esconder")
}

function descurtir(){
    coracaoRosa.classList.remove("mostrar")
    coracaoVazio.classList.remove("esconder")
}

function salvar(){
    salvarBranco.classList.add("esconder")
    salvarPintado.classList.add("mostrar")
}

function remover(){
    salvarBranco.classList.remove("esconder")
    salvarPintado.classList.remove("mostrar")
}

// card 2
function curtir2(){
    coracaoRosa2.classList.add("mostrar")
    coracaoVazio2.classList.add("esconder")
}

function descurtir2(){
    coracaoRosa2.classList.remove("mostrar")
    coracaoVazio2.classList.remove("esconder")
}

function salvar2(){
    salvarBranco2.classList.add("esconder")
    salvarPintado2.classList.add("mostrar")
}

function remover2(){
    salvarBranco2.classList.remove("esconder")
    salvarPintado2.classList.remove("mostrar")
}