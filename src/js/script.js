let bars = document.getElementById("bars");
let dropdown = document.getElementById("dropdown");
let btn__text = document.getElementById("btn__text");
let discover__btn = document.getElementById("discover__btn");
let btn__text_suscribe = document.getElementById("btn__text_suscribe");
let suscribe__btn = document.getElementById("suscribe__btn");

let suscribe_form = document.getElementById('suscribe_form');
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword');



//Efecto para algunos botones
discover__btn.addEventListener('mouseover', () => {
    btn__text.classList.add("animate-dropdown");
})
discover__btn.addEventListener('mouseout', () => {
    btn__text.classList.add("animate-dropdown");
})

discover__btn.addEventListener('animationend', () => {
    btn__text.classList.remove("animate-dropdown");
})



//Abrir o cerrar el menu hamburguesa
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

inputName.addEventListener('change', () => {
    if(!inputName.validity.valueMissing){
        inputName.classList.remove('invalid');
        inputName.classList.add('valid');
    } else{
        inputName.classList.remove('valid');
        inputName.classList.add('invalid');
    }
})

inputEmail.addEventListener('change', () => {
    if(!inputName.validity.valueMissing){
        inputName.classList.remove('invalid');
        inputName.classList.add('valid');
    } else{
        if(!inputPassword) {
            inputName.classList.remove('valid');
            inputName.classList.add('invalid');
        }else {
            inputName.classList.remove('invalid');
            inputName.classList.add('valid');
        }
    }
})

inputPassword.addEventListener('change', () => {
    if(!inputName.validity.valueMissing){
        inputName.classList.remove('invalid');
        inputName.classList.add('valid');
    } else{
        if(!inputPassword) {
            inputName.classList.remove('valid');
            inputName.classList.add('invalid');
        }else {
            inputName.classList.remove('invalid');
            inputName.classList.add('valid');
        }
    }
})


// Validacion del formulario
suscribe_form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(inputEmail);
    console.log(inpuName);
    console.log(inputPassword);
})


