const nombres =['Luciana','Rocio','Valentina','Santino','Aldana','Emilia'];
let nl='';

for(let i=0; i<nombres.length;i++){
    console.log(`Nombre del Array en la posicion ${i}: ${nombres[i]}`);

    if(nl.length<nombres[i].length){

        nl=nombres[i];
    }
}
console.log(`Nombre mas largo: ${nl}`);