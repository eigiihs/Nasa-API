//PARTE DA API
//Variável que armazena a data solicitada 
const data = document.getElementById("campoBusca");

let btnSearch = document.getElementById("btnBusca");


btnSearch.addEventListener('click', () => {

    //Construção da url com a chave da api && a data solicitada na variável acima
    const url = "https://api.nasa.gov/planetary/apod?api_key=zYyghsww0ltCP7Qis4rXwXVmfon3Ge4hBUdS56y7&&date=" + data.value;

    //Iniciando solicitação HTTP para a URL acima (buscando recursos da web e retornando uma promise)
    fetch(url)
        //Pegando o resultado da resposta da API e transformando os dados em formato JSON
        .then(result => result.json())
        //Pega os dados JSON e os exibe no console usando console.log()
        .then(result => {

            console.log(result)

            const valorAPI = result;
            console.log(valorAPI.date)

            const divPai = document.getElementById("pai")
            let divElement = document.createElement('div')

            divElement.innerHTML = `
            <p>${valorAPI.title}</p>
            <p>${valorAPI.date}</p>
            <img src="${valorAPI.url}" alt="">
            <p>${valorAPI.explanation}</p>
            
            `
            divPai.appendChild(divElement)
        })

});
// ENCERRANDO PARTE DA API

//MEXENDO NO FRONT
var elementsInfo = document.querySelectorAll('.info');

// executando uma função para cada uma das informações
elementsInfo.forEach(function (info) {
    info.addEventListener('click', function() {
        // alternar a classe 'ativa' na div .info
        info.classList.toggle('ativa');
        var arrow = info.querySelector('.arrow');
        var x = info.querySelector('.x');
        
        if (info.classList.contains('ativa')) {
            arrow.style.display = 'none';
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            arrow.style.display = 'block';
        }
    });
});