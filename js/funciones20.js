export const mostrarDatos = () => {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector('#libreta').value;

    return { nombre, apellido, libreta };
};