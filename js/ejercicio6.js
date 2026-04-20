const edades = [25, 30, 35, 40, 45, 50, 55, 60];
let suma = 0;
for (let i = 0; i < edades.length; i++) {
    console.log(`Edad en la posicion ${i}: ${edades[i]}`);
    suma += edades[i];
}

const promedio = suma / edades.length;
console.log(`El promedio de las edades es: ${promedio.toFixed(2)}`);

//el lenght nos permite saber la cantidad de elementos que tiene un array.