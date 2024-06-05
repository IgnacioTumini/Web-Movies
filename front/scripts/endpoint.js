import { crearTarjeta } from "./crearTrajeta.js";
import { agregarPelicula } from "./crearPeli.js";
import axios from "axios";

export async function endpoint() {
  try {
    const data = await axios.get("http://localhost:3000/movies");
    const pelis = data.data;
    const contenedorMovies = document.getElementById("conteiner-movies");
    const cardsHTML = pelis.map((mov) => crearTarjeta(mov));
    cardsHTML.forEach((elem) => contenedorMovies.appendChild(elem));
  } catch (error) {
    console.log(error);
  }
}
export const endpointPost = async (e) => {
  e.preventDefault(); // Prevenir el envío automático del formulario
  const nuevaPelicula = agregarPelicula();
  console.log(nuevaPelicula);
  if (nuevaPelicula == null) return "Error al crear la pelicula";
  // Usar la función para obtener la nueva película
  try {
    const respuesta = await axios.post(
      "http://localhost:3000/movies", // Cambia a la URL adecuada
      nuevaPelicula
    );
    alert("Pelicula creada con exito!");
    console.log("Película creada:", respuesta.data); // Log para confirmar éxito
  } catch (error) {
    console.error("Error al crear la película:", error.message); // Manejo de errores
  }
};
