//Curtir
let coracaoRosa = document.querySelector('.icone-curtir')
let coracaoVazio = document.querySelector('.icone-coracao')

//Salvar
let salvarBranco = document.querySelector('.icone-salvar')
let salvarPintado = document.querySelector('.icone-salvar_pintado')

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

function descurtir(){
    salvarBranco.classList.remove("esconder")
    salvarPintado.classList.remove("mostrar")
}
