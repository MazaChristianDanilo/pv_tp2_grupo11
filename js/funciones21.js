export const datos = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Perú": "Lima",
    "Colombia": "Bogotá",
    "México": "Ciudad de México"
};

export const cargarOpciones = (select, lista) => {
    lista.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
};

export const seleccionarCapital = (pais, selectCapitales) => {
    selectCapitales.value = datos[pais] || "";
};

export const mostrarSeleccion = (pais) => {
    if (pais && datos[pais]) {
        console.log(`País: ${pais} - Capital: ${datos[pais]}`);
    }
};