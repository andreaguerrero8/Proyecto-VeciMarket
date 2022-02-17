document.getElementById("form_sumbit").addEventListener("click", function (event) {
    event.preventDefault()

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    //let contrasena = document.getElementById("clave").value;

    //Validacion de campos
if(nombre == ""){
    alert("Por favor incluir Nombre");
}else if(telefono == ""){
    alert("Por favor incluir Télefono");
}else if (direccion == "")
    alert("Por favor incluir Dirección");
//Informacion que se guarda en el localstorage
else{
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('direccion', direccion);

    mostrarEnvio(nombre, telefono, direccion);
    console.log(nombre, telefono, direccion);
}

});

function mostrarEnvio(nomb, tel, dir) {

    let modalBody = document.getElementById('modal-body');

    modalBody.innerHTML ='';

    modalBody.innerHTML += `
                <h2 class="h"> Estimad@, ${nomb}</h1><br>
                <ul class="ul">
                    <li><h3 >El pedido será enviado a la dirección : ${dir}</h1></li>
                    <li><h3>Te contactaremos al telefono: ${tel}</h1></li>
                    <li><h3>Agradecemos tu confianza en nosotros </h3></li><br>
                    <center><h3 class="h">Esperamos que vuelvas pronto..!</h3></center>
                </ul>
                        `
    
}

//Paso 2: Incluir funcionalidad de limpiar carrito desde VeciFactura

let btn_limp = document.querySelector('.close');
btn_limp.addEventListener('click', () => {
    let limpiar_lista = document.querySelectorAll('p');
    limpiar_lista.forEach((parrafo) => {
    parrafo.innerText = null;

});
alert('Tu carrito esta vacio, regresa a VeciMarket');
//Borrar lista de localstore
localStorage.clear();

});
