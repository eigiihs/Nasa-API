const carousel = document.querySelector(".carousel-planet-image");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".carousel-planets i");

let isDragStart = false;
let prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 5;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "left") {
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;

}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);