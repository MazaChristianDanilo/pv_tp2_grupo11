export const colores = ["white", "blue", "green", "yellow", "red", "grey"];

export const obtenerColorAleatorio = () => {
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
};

export const cambiarColorFondo = (color) => {
    document.body.style.backgroundColor = color;
};

export const mostrarMensaje = (color) => {
    console.log(`Color cambiado a: ${color}`);
};