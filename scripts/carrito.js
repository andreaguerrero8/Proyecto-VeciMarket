//Traer la informacion del localstorage
//Declarar variable para asignar informacion del localstorage
// Los articulos se encuentra dentro de un JSon que hay que manipular
let infoLocalStorage = localStorage.getItem('Articulos');
console.log(infoLocalStorage);

//Descompresion del Json y cambiarlo con  parse para lista
//Ya una vez que esta en modo lista , le aplicamos el foreach
let parseInfo = JSON.parse(infoLocalStorage);
console.log(parseInfo);

let sumaTotal = 0; //variable cero para acumular el total
parseInfo.forEach((e) => {
    let contenedor = document.getElementById('nombreProducto-contenedor');
    console.log(e.nombre);//aqui prueba de que muestra el nombre del producto ej:aceite

    let nombreProducto = document.createElement('p');
    nombreProducto.innerText = e.nombre + ' ................. ' + e.precio + " $ ";
    // P se esta insertando con el appendChild en el contenedor
    contenedor.appendChild(nombreProducto);

    sumaTotal = sumaTotal + parseFloat(e.precio);
    console.log(sumaTotal.toFixed(3));
});

let totalProducto = document.createElement('p');
totalProducto.innerText = sumaTotal.toFixed(3) + " $ ";

let contenedorTotal = document.getElementById('totalProducto-contenedor');
contenedorTotal.appendChild(totalProducto);


