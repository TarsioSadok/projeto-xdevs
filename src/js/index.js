console.log(document.getElementById("btn-avancar"));

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");


btnAvancar.addEventListener("click", function () {
    
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartoeSelecionado();

    cartaoAtual++;
    mostrarCartao();


});


btnVoltar.addEventListener("click", function () {

 
    if(cartaoAtual === 0) return;

    esconderCartoeSelecionado();

    
    cartaoAtual--;
    mostrarCartao()

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoeSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}