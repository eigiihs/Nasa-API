document.addEventListener("DOMContentLoaded", function () {
    
    const params = new URLSearchParams(window.location.search);
    const galaxyId = params.get('id');

    const pai = document.getElementById('pai');

    fetch("galaxias.json")
        .then((result) => result.json())
        .then((result) => {
            // Encontrar a galáxia com o ID correspondente
            const galaxySelected = result.galaxias.find(galaxy => galaxy.id === galaxyId);

            // Fazer algo com a galáxia selecionada
            console.log(galaxySelected);

            // Aqui você pode exibir os detalhes da galáxia selecionada na página
            // Por exemplo, atualizar o HTML para mostrar as informações da galáxia
            const detailsElement = document.getElementById('pai');
            detailsElement.innerHTML = `
            <div class="title">
            <h1>
              ${galaxySelected.title}
            </h1>
          </div>
        <div class="image">
          <img src="${galaxySelected.image}" alt="" />
        </div>
        
        <div class="description">
          <h1>
            ${galaxySelected.description}
          </h1>
        </div>
            `;
        })
        .catch((error) => {
            console.error('Erro ao obter os dados das galáxias:', error);
        });
});