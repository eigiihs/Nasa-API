//Variável que armazena a data solicitada 
const data = document.getElementById("campoBusca");

let btnSearch = document.getElementById("btnBusca");


btnSearch.addEventListener('click', () => {

    //Construção da url com a chave da api && a data solicitada na variável acima
    const url = "https://api.nasa.gov/planetary/apod?api_key=zYyghsww0ltCP7Qis4rXwXVmfon3Ge4hBUdS56y7&&date=" + data.value;

    console.log(url)
    //Iniciando solicitação HTTP para a URL acima (buscando recursos da web e retornando uma promise)
    fetch(url)

    //Pegando o resultado da resposta da API e transformando os dados em formato JSON
    .then(result => result.json())

    //Pega os dados JSON e os exibe no console usando console.log()
    .then(data => console.log(data))

});
