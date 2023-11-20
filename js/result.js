document.addEventListener("DOMContentLoaded", function () {

    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get("search");

    const key = "zYyghsww0ltCP7Qis4rXwXVmfon3Ge4hBUdS56y7";

    //Construção da url com a chave da api && a data solicitada na variável acima
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&&date=${search}`;

    const dad = document.getElementById("results");

    //Iniciando solicitação HTTP para a URL acima
    fetch(url)
        .then((result) => result.json())
        .then((result) => {
            console.log(result);

            const valorAPI = result;

            const myElement = document.createElement('div');

            myElement.innerHTML = `
            <div class="resultado"> <!-- Div que contém o resultado -->
            <div class="image">
                <img id="image-test" src="${valorAPI.url}" alt=""> <!-- Imagem do resultado -->
            </div>

            <h3 class="title">${valorAPI.title}</h3> <!-- Título da imagem -->
            <p class="date">${valorAPI.date}</p> <!-- Data -->

            <img src="img/arrow.svg" alt="" id="arrow-down"> <!-- Ícone de seta para baixo -->
           
            <p class="description"> <!-- Descrição do resultado -->
                ${valorAPI.explanation}
            </p>
            </div>
            `

            dad.appendChild(myElement);

            /* ========= Tratando o menu dropdown ========= */
            // Seleciona todos os elementos com a classe "resultado"
            var elementosResultado = document.querySelectorAll('.resultado');

            // Para cada elemento com a classe "resultado", adiciona um ouvinte de evento de clique
            elementosResultado.forEach(function (resultado) {
                // Quando um elemento com a classe "resultado" é clicado, é adicionado a classe "ativa"
                resultado.addEventListener('click', function () {
                    resultado.classList.toggle('ativa');
                });
            });

        });
});