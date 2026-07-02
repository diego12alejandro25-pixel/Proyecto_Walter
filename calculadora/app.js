let resultado = document.getElementById("resultado"); //scope global

function escribirUno() {
  resultado.value += "1";
}
function escribirDos() {
  resultado.value += "2";
}
function escribirTres() {
  resultado.value += "3";
}
function escribirCuatro() {
  resultado.value += "4";
}function escribirCinco() {
  resultado.value += "5";
}
function escribirSeis() {
  resultado.value += "6";
}function escribirSiete() {
  resultado.value += "7";
}
function escribirOcho() {
  resultado.value += "8";
}
function escribirNueve() {
  resultado.value += "9";
}
function escribirCero() {
  resultado.value += "0";
}
function sumar() {
  resultado.value += "+";
}
function restar() {
  resultado.value += "-";
}
function multiplicar() {
  resultado.value += "*";
}
function dividir() {
  resultado.value += "/";
}
function igual() {
let total = eval(resultado.value);
    resultado.value=total;
}
function limpiar() {
  resultado.value = " ";
}

function porcentaje(){
  resultado.value += "%";
}
function punto(){
  resultado.value += ".";
}
function sin(){
  resultado.value =Math.sin("resultado"*Math.sin);
}

