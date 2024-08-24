
const div = document.getElementById("bot");
div.addEventListener("click", function() {
    alert("Hola soy  el div");
});


const boton = document.getElementById("miBoton");
boton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    alert("Hola soy el botón");
});