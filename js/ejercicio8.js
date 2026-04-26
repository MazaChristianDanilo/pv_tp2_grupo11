const notas=[9,4,3,10,8,7,1,6,5,2];
let aprobadas=[], desaprobadas=[], suma=0, promedio;

for(let i=0; i<notas.length;i++){
    console.log(`nota en la posicion ${i}: ${notas[i]}`);
    if(notas[i]>=6){
        aprobadas.push(notas[i]);
    }else{
            desaprobadas.push(notas[i]);
    }
    suma+=notas[i];
}
promedio=suma/notas.length;
console.log(`Notas aprobadas: ${aprobadas}`);
console.log(`Notas desaprobadas: ${desaprobadas}`);
console.log(`Promedio de notas en total: ${promedio}`);
console.log(`cantidad de notas aprobadas: ${aprobadas.length}`);