// Seleciona todos os elementos com a classe "resultado"
var elementosResultado = document.querySelectorAll('.resultado');

// Para cada elemento com a classe "resultado", adiciona um ouvinte de evento de clique
elementosResultado.forEach(function (resultado) {
    // Quando um elemento com a classe "resultado" é clicado, é adicionado a classe "ativa"
    resultado.addEventListener('click', function() {
        resultado.classList.toggle('ativa');
    });
});