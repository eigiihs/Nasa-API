fetch("galaxias.json")
  .then((result) => result.json())
  .then((result) => {
    const galaxias = result.galaxias;

    const randomGalaxy = galaxias.sort(() => Math.random() - 0.5);

    console.log(randomGalaxy);

    const ElementDad = document.getElementById("ElementDad");

    randomGalaxy.forEach((galaxy) => {
      const myElement = document.createElement("div");

      myElement.innerHTML = `
            <div class="cards"> <!-- Div que contém o resultado -->
            <div class="image">
                <img id="imagem" src="${galaxy.image}" alt=""> <!-- Imagem do resultado -->
            </div>

            <h3 class="title">${galaxy.title}</h3> <!-- Título da imagem -->

            </div>
            `;

      ElementDad.appendChild(myElement);

      myElement.addEventListener("click", () => {
        window.location.href = `galaxye-example.html?id=${galaxy.id}`;
      });

      /* ========= Tratando o menu dropdown ========= */
      // Seleciona todos os elementos com a classe "resultado"
      var elementosResultado = document.querySelectorAll(".cards");

      // Para cada elemento com a classe "resultado", adiciona um ouvinte de evento de clique
      elementosResultado.forEach(function (cards) {
        // Quando um elemento com a classe "resultado" é clicado, é adicionado a classe "ativa"
        cards.addEventListener("click", function () {
          cards.classList.toggle("ativa");
        });
      });
    });
  });
