import { productos } from "./data.js";

document.addEventListener('DOMContentLoaded', (e) => {
    let cocina = document.getElementById('cocina');
    let salud = document.getElementById('salud');
    let snacks = document.getElementById('snacks');
    let higiene = document.getElementById('higiene');
    mostrarCocina(cocina.id);
    mostrarSalud(salud.id);

    mostrarSnacks(snacks.id);
    mostrarHigiene(higiene.id);

})



function mostrarCocina(idCocina) {

    productos.forEach(element => {
    const { nombre, imagen, precio, id, categoria } = element;

        let cocina = document.getElementById('cocina');

        if (categoria == idCocina) {

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

            card.appendChild(imgCard);
            card.appendChild(contenedorCard);

            contenedorCard.appendChild(nombreProducto);
            contenedorCard.appendChild(precios);

            fragmento.appendChild(card);

            cocina.appendChild(fragmento);

        }
    });
}


function mostrarSalud(idSalud) {

    productos.forEach(element => {
    const { nombre, imagen, precio, id, categoria } = element;

        let salud = document.getElementById('salud');

        if (categoria == idSalud) {

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

            card.appendChild(imgCard);
            card.appendChild(contenedorCard);

            contenedorCard.appendChild(nombreProducto);
            contenedorCard.appendChild(precios);

            fragmento.appendChild(card);

            salud.appendChild(fragmento);

        }
    }); 
}



function mostrarSnacks(idSnacks) {

    productos.forEach(element => {
    const { nombre, imagen, precio, id, categoria } = element;

        let snacks = document.getElementById('snacks');

        if (categoria == idSnacks) {

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

            card.appendChild(imgCard);
            card.appendChild(contenedorCard);

            contenedorCard.appendChild(nombreProducto);
            contenedorCard.appendChild(precios);

            fragmento.appendChild(card);

            snacks.appendChild(fragmento);

        }
    });
}


function mostrarHigiene(idHigiene) {

    productos.forEach(element => {
    const { nombre, imagen, precio, id, categoria } = element;

        let higiene = document.getElementById('higiene');

        if (categoria == idHigiene) {

            let fragmento = document.createDocumentFragment();
            let card = document.createElement('div');
            card.setAttribute('class', 'box');

            let imgCard = document.createElement('img');
            imgCard.setAttribute('src', `${imagen}`);
            imgCard.style.width = '100%';


            let contenedorCard = document.createElement('div');
            contenedorCard.setAttribute('class', 'content');

            let nombreProducto = document.createElement('h3');
            nombreProducto.textContent = `${nombre}`;

            let precios = document.createElement('div');
            precios.setAttribute('class', 'precio');
            precios.textContent = `${precio}`;

            card.appendChild(imgCard);
            card.appendChild(contenedorCard);

            contenedorCard.appendChild(nombreProducto);
            contenedorCard.appendChild(precios);

            fragmento.appendChild(card);

            higiene.appendChild(fragmento);

        }
    });
}