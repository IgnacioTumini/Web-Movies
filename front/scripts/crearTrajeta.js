export function crearTarjeta(movie) {
  // FUNCION PARA CREAR UNA TARJETA
  // CREO LA TARJETA EN HTML

  const { title, year, director, duration, genre, rate, poster } = movie; // obtengo los datos mediante el destructuring

  // Creo las etiquetas HTML
  const card = document.createElement("div");
  const tituloElemento = document.createElement("h3");
  const posterElemento = document.createElement("img");
  const directorElemento = document.createElement("p");
  const durationElemento = document.createElement("p");
  const genreElemento = document.createElement("p");
  const rateElemento = document.createElement("p");
  const yearElemento = document.createElement("p");

  // Asigno los valores a las etiquetas HTML
  tituloElemento.innerHTML = title;
  posterElemento.src = poster;
  directorElemento.innerHTML = "Director: " + director;
  durationElemento.innerHTML = "Duracion: " + duration;
  genreElemento.innerHTML = "Generos: " + genre;
  rateElemento.innerHTML = "Calificación: " + rate;
  yearElemento.innerHTML = "Año: " + year;

  // Agrego clases CSS a los elementos
  card.classList.add("tarjeta");
  tituloElemento.classList.add("titulo-tarjeta");
  posterElemento.classList.add("imgTarjeta");
  directorElemento.classList.add("descripcion-tarjeta");
  durationElemento.classList.add("descripcion-tarjeta");
  genreElemento.classList.add("descripcion-tarjeta");
  rateElemento.classList.add("descripcion-tarjeta");
  yearElemento.classList.add("descripcion-tarjeta");

  //removeElement.classList.add("remove-button");

  // Agrego los elementos creados a la tarjeta  HTML
  card.appendChild(tituloElemento);
  card.appendChild(posterElemento);
  card.appendChild(directorElemento);
  card.appendChild(durationElemento);
  card.appendChild(genreElemento);
  card.appendChild(rateElemento);
  card.appendChild(yearElemento);

  //card.appendChild(removeElement);

  // Retorno la tarjeta finalizada con todos los elementos dentro
  return card;
}
