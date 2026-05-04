import { transcribir } from "./funciones22.js";

const escrituraUsuario = document.getElementById("entrada");
const parrafo = document.getElementById("escrito");

escrituraUsuario.addEventListener("input",()=>{
    transcribir(parrafo,escrituraUsuario.value);
    
});
