const carousel = document.querySelector(".carousel-planet-image");

// selecionando a primeira imagem no carrossel
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".carousel-planets i");

// variável para controlar o início do arrasto
let isDragStart = false;
// variáveis para rastrear a posição do mouse e a posição de rolagem
let prevPageX, prevScrollLeft;
// calculando a largura da primeira imagem
let firstImgWidth = firstImg.clientWidth + 5;

// adicionando um ouvinte no evento de clique para os ícones de seta
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //vendo se é a seta da esquerda ou direita
        if (icon.id === "left") {
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
    });
});

// função para iniciar o arrasto quando o mouse é pressionado
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;

}

// função para arrastar o carrossel enquanto o mouse é movido
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    // atualizar a posição de rolagem com base na diferença de posição do mouse
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

// função para parar o arrasto quando o mouse é liberado
const dragStop = () => {
    isDragStart = false;
}

// adicionando ouvintes de evento para o mouse
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);