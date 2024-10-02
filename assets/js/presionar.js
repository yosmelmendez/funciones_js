var color;
let pulsar = document.getElementById("key");
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    color = "pink";
    colorear(pulsar, color);
  } else if (event.key === "s" || event.key === "S") {
    color = "orange";
    colorear(pulsar, color);
  } else if (event.key === "d" || event.key === "D") {
    color = "lightblue";
    colorear(pulsar, color);
  } else if (event.key === "q" || event.key === "Q") {
    color = "purple";
    agregarElemento(color);
  } else if (event.key === "w" || event.key === "W") {
    color = "gray";
    agregarElemento(color);
  } else if (event.key === "e" || event.key === "E") {
    color = "brown";
    agregarElemento(color);
  }
});

function colorear(elemento, color) {
  elemento.style.backgroundColor = color;
}

const contenedor = document.getElementById("contenedor");

function agregarElemento(color) {
  const nuevoElemento = document.createElement("div");
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.border = "2px solid black";
  nuevoElemento.style.backgroundColor = color;

  contenedor.appendChild(nuevoElemento);
}
