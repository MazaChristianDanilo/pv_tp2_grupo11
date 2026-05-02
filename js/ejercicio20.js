import { mostrarDatos } from './funciones20.js';
const boton = document.querySelector('#botonmostrar');

boton.addEventListener('click', () => {
    const { nombre, apellido, libreta } = mostrarDatos();
    alert(`Los datos ingresados son:
        Nombre: ${nombre}
        Apellido: ${apellido}
        Libreta: ${libreta}`);
});