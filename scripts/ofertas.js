import { productos } from "./data.js";

const cardOfertas = document.getElementById('cards');
let datosOfertas = [];


document.addEventListener('DOMContentLoaded', () => {
    mostrarCardsOfertas();
})


//muestra las cards de forma dinamica, mediante el forEarch, usando la costante importada productos, 
//desde el archivo data.js
function mostrarCardsOfertas() {

    productos.forEach(element => {
        const { nombre, imagen, precio, id, oferta } = element;

        if (oferta == true) {

            let fragmento = document.createDocumentFragment();
            let card = document.createElement('div');
            card.setAttribute('class', 'box');



            let imgCard = document.createElement('img');
            imgCard.setAttribute('src', `${imagen}`)


            let contenedorCard = document.createElement('div');
            contenedorCard.setAttribute('class', 'content');

            let nombreProducto = document.createElement('h3');
            nombreProducto.textContent = `${nombre}`;

            let precios = document.createElement('div');
            precios.setAttribute('class', 'precio');
            precios.textContent = `$ ${precio}`;

            let btnComprar = document.createElement('button');
            btnComprar.setAttribute('class', 'btn');
            btnComprar.textContent = 'Comprar';
            btnComprar.setAttribute('id', `${id}`);

            card.appendChild(imgCard);
            card.appendChild(contenedorCard);

            contenedorCard.appendChild(nombreProducto);
            contenedorCard.appendChild(precios);
            contenedorCard.appendChild(btnComprar);

            fragmento.appendChild(card);
            cardOfertas.appendChild(fragmento);
        }
    });

}


//escucha el evento click y captura el id del botón, posterior a ello lo envía a la funcion Envio Datos

cardOfertas.addEventListener('click', (e) => {
    envioDatosOfertas(e.target.id);
})

//se busca el elemento en la data mediante un forEach que contenga el id de la tarjeta oprimida
// y luego se procede a guardar en un objeto los datos nombre, precio y id, para ser usados mas adelante
function envioDatosOfertas(id) {
    productos.forEach(element => {
        if (element.id == id) {

            let algo =
            {
                nombre: `${element.nombre}`,
                precio: `${element.precio}`,
                id: `${element.id}`
            }

            // agregar al arreglo datos, el objeto datos que contiene la informacion de la cards seleccionada
            datosOfertas.push(algo);

            //agregar al localStorage los datos del objeto(datos)
            localStorage.setItem('Articulos', JSON.stringify(datosOfertas));

            //traer datos del localStorage 
            localStorage.getItem('Articulos');

            console.log(datosOfertas);
        }
    })

}

