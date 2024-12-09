let bars = document.getElementById("bars");
let dropdown = document.getElementById("dropdown");




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