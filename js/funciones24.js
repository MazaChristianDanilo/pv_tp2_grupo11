export const mostrarseleccion = (valor) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `Lenguaje seleccionado: ${valor}`;
};