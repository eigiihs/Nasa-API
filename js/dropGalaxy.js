/* ========= Tratando o menu dropdown ========= */
// Seleciona todos os elementos com a classe "resultado"
var elementosResultado = document.querySelectorAll('.cards');

// Para cada elemento com a classe "resultado", adiciona um ouvinte de evento de clique
elementosResultado.forEach(function (cards) {
    // Quando um elemento com a classe "resultado" é clicado, é adicionado a classe "ativa"
    cards.addEventListener('click', function () {
        cards.classList.toggle('ativa');
    });
});