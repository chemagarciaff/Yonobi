let bars = document.getElementById("bars");
let dropdown = document.getElementById("dropdown");
let btn__text = document.getElementById("btn__text");
let discover__btn = document.getElementById("discover__btn");
let btn__text_suscribe = document.getElementById("btn__text_suscribe");
let suscribe__btn = document.getElementById("suscribe__btn");



discover__btn.addEventListener('mouseover', () => {
    btn__text.classList.add("animate-dropdown");
})
discover__btn.addEventListener('mouseout', () => {
    btn__text.classList.add("animate-dropdown");
})

discover__btn.addEventListener('animationend', () => {
    btn__text.classList.remove("animate-dropdown");
})




let hide = true;

bars.addEventListener("click", () => {
    if (hide) {
        dropdown.classList.remove("left-[-100%]");
        dropdown.classList.remove("animate-hide");
        dropdown.classList.add("animate-show");
    } else {
        dropdown.classList.remove("animate-show");
        dropdown.classList.add("animate-hide");
    }

    hide = !hide;
})