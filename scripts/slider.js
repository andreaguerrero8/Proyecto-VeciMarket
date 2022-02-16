//Establecer las variables que me indiquen a mi menu
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
//Mediante el click envio el funcionamiento de para manejar clases CSS

//Si la clase no existe, la añade. Si no, la elimina.
//Ej: si menu ya tenia una clase, se la cambia a 'fa-time'
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
//Implemento un 'modulo' que al momento de scrollear se desactiva la clase
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}





