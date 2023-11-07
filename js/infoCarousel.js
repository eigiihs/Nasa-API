/* JS do carrossel dos cards que abrem */
//criando variáveis
const toggleAbout = document.getElementById("toggle-about");
const carouselAbout = document.getElementById("carousel-about");
//aboutCarouselIsOpen começa em falso pq o carrossel começa fechado, quando ele abre começa a valer verdadeiro
let aboutCarouselIsOpen = false;

//função para quando clicar trocar a imagem, da setinha pelo x e do x pela setinha
toggleAbout.addEventListener("click", () => {
  if (!aboutCarouselIsOpen) {
    carouselAbout.style.display = "block";
    toggleAbout.src = "img/close.png";
    aboutCarouselIsOpen = true;
  } else {
    carouselAbout.style.display = "none";
    toggleAbout.src = "img/arrow-up.png";
    aboutCarouselIsOpen = false;
  }
});

//criando as variaveis dos indicators (setinhas)
const carouselArrowBackAbout = document.getElementById("arrow-back-about"); //retrocede
const carouselArrowNextAbout = document.getElementById("arrow-next-about"); //avança
const paragraphsAbout = document.querySelectorAll(".carousel-paragraph-about");
const indicatorsAbout = document.querySelectorAll(
  ".carousel-info-indicator-about"
);
//posição inicial do carrossel
let paragraphAboutIndicator = 0;

//função para a setinha que retrocede (direita)
carouselArrowBackAbout.addEventListener("click", () => {
  if (paragraphAboutIndicator === 1) {
    carouselAnimation(paragraphsAbout, 315);
    paragraphAboutIndicator = 0;
    //serve para colorir a setinha
    carouselColorIndicators(indicatorsAbout, paragraphAboutIndicator);
  } else if (paragraphAboutIndicator === 2) {
    carouselAnimation(paragraphsAbout, 0);
    paragraphAboutIndicator = 1;
    carouselColorIndicators(indicatorsAbout, paragraphAboutIndicator);
  } else {
    carouselColorIndicators(indicatorsAbout, paragraphAboutIndicator);
  }
});

//função para a setinha que avança (esquerda)
carouselArrowNextAbout.addEventListener("click", () => {
  if (paragraphAboutIndicator === 1) {
    carouselAnimation(paragraphsAbout, -315);
    paragraphAboutIndicator = 2;
    carouselColorIndicators(indicatorsAbout, paragraphAboutIndicator);
  } else if (paragraphAboutIndicator === 0) {
    carouselAnimation(paragraphsAbout, 0);
    paragraphAboutIndicator = 1;
    carouselColorIndicators(indicatorsAbout, paragraphAboutIndicator);
  } else {
    carouselColorIndicators(indicatorsAbout, paragraphAboutIndicator);
  }
});

/* mesma coisa de cima só que para a caixinha de baixo */
const toggleHow = document.getElementById("toggle-how");
const carouselHow = document.getElementById("carousel-how");
let howCarouselIsOpen = false;

toggleHow.addEventListener("click", () => {
  if (!howCarouselIsOpen) {
    carouselHow.style.display = "block";
    toggleHow.src = "img/close.png";
    howCarouselIsOpen = true;
  } else {
    carouselHow.style.display = "none";
    toggleHow.src = "img/arrow-up.png";
    howCarouselIsOpen = false;
  }
});

const carouselArrowBackHow = document.getElementById("arrow-back-how");
const carouselArrowNextHow = document.getElementById("arrow-next-how");
const paragraphsHow = document.querySelectorAll(".carousel-paragraph-how");
const indicatorsHow = document.querySelectorAll(".carousel-info-indicator-how");
let paragraphHowIndicator = 0;

carouselArrowBackHow.addEventListener("click", () => {
  if (paragraphHowIndicator === 1) {
    carouselAnimation(paragraphsHow, 315);
    paragraphHowIndicator = 0;
    carouselColorIndicators(indicatorsHow, paragraphHowIndicator);
  } else if (paragraphHowIndicator === 2) {
    carouselAnimation(paragraphsHow, 0);
    paragraphHowIndicator = 1;
    carouselColorIndicators(indicatorsHow, paragraphHowIndicator);
  } else {
    carouselColorIndicators(indicatorsHow, paragraphHowIndicator);
  }
});

carouselArrowNextHow.addEventListener("click", () => {
  if (paragraphHowIndicator === 1) {
    carouselAnimation(paragraphsHow, -315);

    paragraphHowIndicator = 2;
    carouselColorIndicators(indicatorsHow, paragraphHowIndicator);
  } else if (paragraphHowIndicator === 0) {
    carouselAnimation(paragraphsHow, 0);

    paragraphHowIndicator = 1;
    carouselColorIndicators(indicatorsHow, paragraphHowIndicator);
  } else {
    carouselColorIndicators(indicatorsHow, paragraphHowIndicator);
  }
});

/* função para trocar os paragrafos de lugar*/
const carouselAnimation = (paragraphs, translateX) => {
  paragraphs.forEach((paragraph) => {
    paragraph.style.transform = `translateX(${translateX}px)`;
  });
};

// função para colorir os botões
const carouselColorIndicators = (indicators, paragraphIndicator) => {
  if (paragraphIndicator === 0) {
    indicators[0].style.backgroundColor = "#08428C";
    indicators[1].style.backgroundColor = "#FFF";
    indicators[2].style.backgroundColor = "#FFF";
  } else if (paragraphIndicator === 1) {
    indicators[0].style.backgroundColor = "#FFF";
    indicators[1].style.backgroundColor = "#08428C";
    indicators[2].style.backgroundColor = "#FFF";
  } else {
    indicators[0].style.backgroundColor = "#FFF";
    indicators[1].style.backgroundColor = "#FFF";
    indicators[2].style.backgroundColor = "#08428C";
  }
};