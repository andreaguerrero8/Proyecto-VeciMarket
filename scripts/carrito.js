let btn_pagar = document.getElementById('money');
btn_pagar.addEventListener('click', () => {

    if(sumaTotal == 0){
        alert('Agrega productos al carrito antes de llenar la información de envío')
    }
    
});


//Traer la informacion del localstorage
//Declarar variable para asignar informacion del localstorage
// Los articulos se encuentra dentro de un JSon que hay que manipular
let infoLocalStorage = localStorage.getItem('Articulos');

//Descompresion del Json y cambiarlo con  parse para lista
//Ya una vez que esta en modo lista , le aplicamos el foreach
let parseInfo = JSON.parse(infoLocalStorage);

let sumaTotal = 0; //variable cero para acumular el total
parseInfo.forEach((e) => {
    let contenedor = document.getElementById('nombreProducto-contenedor');
    console.log(e.nombre); //aqui prueba de que muestra el nombre del producto ej:aceite

    let nombreProducto = document.createElement('p');
    nombreProducto.innerText = e.nombre + ' ................. ' + e.precio + " $ ";
    // P se esta insertando con el appendChild en el contenedor
    contenedor.appendChild(nombreProducto);

    sumaTotal = sumaTotal + parseFloat(e.precio);
});

let totalProducto = document.createElement('p');
totalProducto.innerText = sumaTotal.toFixed(3) + " $ ";

let contenedorTotal = document.getElementById('totalProducto-contenedor');
contenedorTotal.appendChild(totalProducto);

//Paso 2: Incluir funcionalidad de limpiar carrito desde VeciFactura

let btn_limp = document.querySelector('.btn_limpiar');
btn_limp.addEventListener('click', () => {
    let limpiar_lista = document.querySelectorAll('p');
    limpiar_lista.forEach((parrafo) => {
    parrafo.innerText = null;

});
alert('Tu carrito esta vacio, regresa a VeciMarket');
//Borrar lista de localstore
localStorage.clear();

});


