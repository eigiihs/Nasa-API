let items = document.querySelectorAll('.carousel-moon .moon-element');
let next = document.getElementById('next-moon');
let prev = document.getElementById('prev-moon');

let active = 3;

function loadShow(){
    let stt = 0;
    for (var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px)`
    }
}
