import {obtenerColorAleatorio,cambiarColorFondo, mostrarMensaje} from "./funciones25.js";

const boton = document.getElementById("btnColor");

boton.addEventListener("click", () => {
    const color = obtenerColorAleatorio();

    cambiarColorFondo(color);
    mostrarMensaje(color);
});