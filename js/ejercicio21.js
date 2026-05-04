import { datos, cargarOpciones, seleccionarCapital, mostrarSeleccion } from "./funciones21.js";

const selectPaises = document.getElementById("paises");
const selectCapitales = document.getElementById("capitales");

cargarOpciones(selectPaises, Object.keys(datos));
cargarOpciones(selectCapitales, Object.values(datos));

selectPaises.addEventListener("change", () => {
    const paisSeleccionado = selectPaises.value;

    seleccionarCapital(paisSeleccionado, selectCapitales);
    mostrarSeleccion(paisSeleccionado);
});