let hora = 2;
let min = 30;
const convertidorASegundos = (h, m) => {
    let segundosHora = h * 3600;
    let segundosMinuto = m * 60;
    return segundosHora + segundosMinuto;
}

const res = convertidorASegundos(hora, min);

console.log(`La cantidad de segundos en ${hora} horas y ${min} minutos es: ${res}`);
