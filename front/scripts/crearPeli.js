export function agregarPelicula() {
  const title = document.getElementById("titulo").value.trim();
  const year = document.getElementById("año").value.trim();
  const director = document.getElementById("director").value.trim();
  const duration = document.getElementById("duracion").value.trim();
  const rate = document.getElementById("calificacion").value.trim();
  const poster = document.getElementById("imagen").value.trim();

  const generosSeleccionados = [];
  const generos = document.querySelectorAll("#genero");

  generos.forEach((genero) => {
    if (genero.checked) {
      generosSeleccionados.push(genero.nextElementSibling.textContent.trim());
    }
  });
  // Verificar campos vacíos
  const campos = {
    Título: title,
    Año: year,
    Director: director,
    Duración: duration,
    Calificación: rate,
    Imagen: poster,
  };
  for (const [campo, valor] of Object.entries(campos)) {
    if (!valor) {
      alert(`El campo ${campo} es obligatorio.`);
      return null;
    }
  }
  if (generosSeleccionados.length === 0) {
    alert("Debe seleccionar al menos un género.");
    return null;
  }
  const nuevaPelicula = {
    title,
    year,
    director,
    duration,
    genre: generosSeleccionados,
    rate,
    poster,
  };

  return nuevaPelicula;
}
