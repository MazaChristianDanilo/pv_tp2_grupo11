const parOImpar = (num) => {
    if (num % 2 === 0) {
        return "El número es par";}
    else {
        return "El número es impar";
    }
};

let numero = parseInt(prompt("Ingrese un número:"));

const res = parOImpar(numero)

console.log(res);