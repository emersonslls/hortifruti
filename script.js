document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".div-produtos");
    const setaEsquerda = document.getElementById("seta-esquerda");
    const setaDireita = document.getElementById("seta-direita");

    setaEsquerda.addEventListener("click", function() {
        container.scrollBy({
            left: -200, // Ajuste este valor conforme necessário
            behavior: 'smooth'
        });
    });

    setaDireita.addEventListener("click", function() {
        container.scrollBy({
            left: 200, // Ajuste este valor conforme necessário
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".div-produtosHorti");
    const setaEsquerda = document.getElementById("seta-esquerdaHorti");
    const setaDireita = document.getElementById("seta-direitaHorti");

    setaEsquerda.addEventListener("click", function() {
        container.scrollBy({
            left: -200, // Ajuste este valor conforme necessário
            behavior: 'smooth'
        });
    });

    setaDireita.addEventListener("click", function() {
        container.scrollBy({
            left: 200, // Ajuste este valor conforme necessário
            behavior: 'smooth'
        });
    });
});

