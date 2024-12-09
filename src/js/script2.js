let bars = document.getElementById("bars");
let dropdown = document.getElementById("dropdown");

let suscribe_form = document.getElementById('suscribeForm');
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword');

// Del nombre solo se valida que no este vacio
inputName.addEventListener('change', () => {
    if (!inputName.validity.valueMissing) {
        inputName.classList.remove('invalid');
        inputName.classList.add('valid');
    } else {
        inputName.classList.remove('valid');
        inputName.classList.add('invalid');
    }
})

inputEmail.addEventListener('change', () => {
    // Compruebo si esta vacio o no
    if (!inputEmail.validity.valueMissing) {
        inputEmail.classList.remove('invalid');
        inputEmail.classList.add('valid');
    } else {
        inputEmail.classList.remove('valid');
        inputEmail.classList.add('invalid');
    }
})

inputPassword.addEventListener('change', () => {
    if (!inputPassword.validity.valueMissing) {
        // Compruebo el patron
        // Si concuerda
        if (!inputPassword.validity.patternMismatch) {
            inputPassword.classList.remove('invalid');
            inputPassword.classList.add('valid');
            // Si no concuerda
        } else {
            inputPassword.classList.remove('valid');
            inputPassword.classList.add('invalid');
        }
        // Si esta vacio
    } else {
        inputPassword.classList.remove('valid');
        inputPassword.classList.add('invalid');
    }
    
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