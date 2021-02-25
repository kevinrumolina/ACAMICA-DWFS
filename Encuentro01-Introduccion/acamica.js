var nombre = document.querySelector("h1");
const descripcion = document.querySelector("p");

nombre.addEventListener("click", function () {
    alert("Bienvenido a mi sitio web");
});

descripcion.addEventListener("mouseenter", function () {
    descripcion.style.color = "black";
    descripcion.style.backgroundColor = "white";
});

descripcion.addEventListener("mouseout", function () {
    descripcion.style.color = "white";
    descripcion.style.backgroundColor = "black";
});