import { DataBase } from './db.js';
import { Coche } from './coche.js';
import { Moto } from './moto.js';
import { Camion } from './camion.js';

const lista = document.getElementById('llistaVehicles');
const db = new DataBase();


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
});
