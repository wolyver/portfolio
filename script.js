function validarEmail() {
    var email= document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if(!email.checkValidity()) {
        error.innerHTML = "E-mail inválido";

    } else {
        alert ("E-mail válido");
        
    }
} 

function redefinirMsg() {
    var error = document.querySelector('#error-email');
    if(error.innerHTML == "Email inválido") {
        error.innerHTML = "";

    }
    
}