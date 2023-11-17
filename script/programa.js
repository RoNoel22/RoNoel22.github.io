/*Asigno valores de los elementos de entrada del formulario */ 
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

/* Logica para verificar campos del formulario */ 
form.addEventListener("submit",e=>{
    e.preventDefault() /* Previene que se asignen valores por defecto*/ 
    let warnings = "" /* Mensaje de advertencias*/ 
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  /*Comprueba el formato del email*/
    parrafo.innerHTML = ""
    if(nombre.value.length < 6){
        warnings+="El nombre es invalido <br>"
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += "El email no es valido<br>"
        entrar = true
    }

    if(telefono.value.length < 10){
        warnings+="El numero de telefono es invalido <br>"
        entrar = true
    }

    if(mensaje.value.length === 0){
        warnings += "Introducir mensaje<br>"
    }

    if (entrar){
        parrafo.innerHTML = warnings
    }
})