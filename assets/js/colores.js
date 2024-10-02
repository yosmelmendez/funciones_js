const azul = document.getElementById("contenedor1");
const rojo = document.getElementById("contenedor2");
const verde = document.getElementById("contenedor3");
const amarillo = document.getElementById("contenedor4");

function colorear(elemento) {
  elemento.style.backgroundColor = "black";
}
azul.addEventListener("click", function (event) {
  colorear(event.target);
});
rojo.addEventListener("click", function (event) {
  colorear(event.target);
});
verde.addEventListener("click", function (event) {
  colorear(event.target);
});
amarillo.addEventListener("click", function (event) {
  colorear(event.target);
});
