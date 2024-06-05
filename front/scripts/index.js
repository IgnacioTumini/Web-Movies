//import { tempData } from "./tempData.js";
import { endpoint, endpointPost } from "./endpoint.js";
import { limpiarFormulario } from "./clear.js";

endpoint();
const botonAgregar = document.getElementById("boton-form");
botonAgregar.addEventListener("click", endpointPost);
const botonLimpiar = document.getElementById("clear");
botonLimpiar.addEventListener("click", limpiarFormulario);
