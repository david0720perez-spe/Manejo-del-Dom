
// Obtener los elementos del HTML
const contadorElemento = document.getElementById("contador");

const botonClic = document.getElementById("botonClic");

const tablaRegistros = document.getElementById("tablaRegistros");

// Variable para almacenar el número de clics
let contador = 0;

// Escuchar el evento clic del botón
botonClic.addEventListener("click", function () {

// Incrementar el contador
contador++;

// Mostrar el nuevo número en la página
contadorElemento.textContent = contador;

// Obtener la hora exacta del clic
const horaActual = new Date().toLocaleTimeString("es-CO", {
hour12: false
});

// Crear una nueva fila para la tabla
const nuevaFila = document.createElement("tr");

// Agregar el número de clic y la hora
nuevaFila.innerHTML = `
<td>${contador}</td>
<td>${horaActual}</td>
`;

// Insertar el registro al inicio de la tabla
tablaRegistros.prepend(nuevaFila);

});