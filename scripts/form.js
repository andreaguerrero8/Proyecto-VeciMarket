document.getElementById("form_sumbit").addEventListener("click", function (event) {
    event.preventDefault()

    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("clave").value;
//Validacion de campos

if(nombre == ""){
    alert("Por favor incluir Nombre");
}else if(correo == ""){
    alert("Por favor incluir Correo");
}else if(contrasena == ""){
    alert("Por favor incluir Contrasena");
}
else{
    localStorage.setItem('name', nombre);
    localStorage.setItem('email', correo);
    localStorage.setItem('clave', contrasena);

    console.log(nombre, correo, email);
}

});