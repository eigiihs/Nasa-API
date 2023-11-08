//PARTE DA API
//Variável que armazena a data solicitada
const data = document.getElementById("campoBusca");
const btnSearch = document.getElementById("btnBusca");

btnSearch.addEventListener("click", () => {
  console.log(data.value);

  //Construção da url com a chave da api && a data solicitada na variável acima
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=zYyghsww0ltCP7Qis4rXwXVmfon3Ge4hBUdS56y7&&date=" +
    data.value;

  //Iniciando solicitação HTTP para a URL acima (buscando recursos da web e retornando uma promise)
  fetch(url)
    //Pegando o resultado da resposta da API e transformando os dados em formato JSON
    .then((result) => result.json())
    //Pega os dados JSON e os exibe no console usando console.log()
    .then((result) => {
      console.log(result);

      const valorAPI = result;
      console.log(valorAPI.date);

      const newTab = window.open('result.html', '_blank');

      // Aguarde um pouco para garantir que a nova aba esteja carregada
      setTimeout(function () {
        // Atualize os elementos na página result.html com os valores da API
        newTab.document.getElementById('image-test').src = valorAPI.url;
        newTab.document.getElementById('title').textContent = valorAPI.title;
        newTab.document.getElementById('date').textContent = valorAPI.date;
        newTab.document.getElementById('description').textContent = valorAPI.explanation;
      }, 1000); // Você pode ajustar o tempo de espera conforme necessário
    

    });
});
