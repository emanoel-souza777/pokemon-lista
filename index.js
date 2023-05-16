// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao  body
const body = document.querySelector("body");

const ImagemBotaoTrocaDeTema = document.
querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

        const ModoEscuroEstaAtivo = body.classList.
        contains("modo-escuro");

        body.classList.toggle("modo-escuro");

        if(ModoEscuroEstaAtivo) {
            body.classList.remove("modo-escuro")

            ImagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")

        } else{

        body.classList.add("modo-escuro");

        ImagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")
        }
        });