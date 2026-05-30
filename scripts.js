import { DataBase } from './db.js';
import { Coche } from './coche.js';
import { Moto } from './moto.js';
import { Camion } from './camion.js';

const lista = document.getElementById('llistaVehicles');
const db = new DataBase();
const textoExtra = document.getElementById('text-extra');
const inputExtra = document.getElementById('extra');


async function cargarDatos(){
    lista.innerHTML = `<div>Cargando datos...</div>`; 
    try{
        const respuesta = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(db.datosIniciales()); }, 2000);
        });
        mostrarVehiculos(respuesta)
    } catch (error) {
       lista.innerHTML = `<div>Error: ${error}</div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('carregarVehicles').addEventListener("click", cargarDatos);
    document.getElementById('tipusVehicle').addEventListener('change', cambiarTipo);
});

function mostrarVehiculos(vehiculos){
    lista.innerHTML = "";
    vehiculos.forEach(vehiculo => {
        const div = document.createElement("div");
        div.innerHTML = `<div>${vehiculo.tipo} | ${vehiculo.marca} | ${vehiculo.modelo} | ${vehiculo.año} | ${vehiculo.extra}</div>`;
        lista.appendChild(div)
    });
}

function cambiarTipo(){
    let extra;
    const tipo = document.getElementById('tipusVehicle').value;
    if (tipo === "Cotxe") {
        extra = "Portes";
    } else if (tipo === "Moto"){
        extra = "Tipus";
    } else {
        extra = "Pes";
    } 
    textoExtra.innerHTML = extra;
    inputExtra.placeholder = extra;
}
