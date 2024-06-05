export function limpiarFormulario() {
  // Obtener todos los campos de texto por su id
  document.getElementById("titulo").value = "";
  document.getElementById("año").value = "";
  document.getElementById("director").value = "";
  document.getElementById("duracion").value = "";
  document.getElementById("calificacion").value = "";
  document.getElementById("imagen").value = "";

  // Obtener todos los checkboxes para desmarcarlos
  const generos = document.querySelectorAll("#genero");
  generos.forEach((genero) => {
    genero.checked = false;
  });
}
