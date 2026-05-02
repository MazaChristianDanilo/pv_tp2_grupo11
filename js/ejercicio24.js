import { mostrarseleccion } from "./funciones24.js";
const radios = document.querySelectorAll('input[name="lenguaje"]');
radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const valor = radio.value;
        mostrarseleccion(valor);
        console.log(`seleccionado: ${valor}`);
    });
});