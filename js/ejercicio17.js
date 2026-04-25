let contarLetraA = (cadena) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a') {
            contador++;
        }
    }
    return contador;
}

let texto = prompt("Ingrese una cadena de texto en minusculas:");

const res = contarLetraA(texto);

console.log(`La letra 'a' aparece ${res} en la cadena`);