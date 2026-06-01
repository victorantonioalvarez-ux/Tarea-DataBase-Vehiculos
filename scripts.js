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
    document.getElementById('carregarVehicles').addEventListener('click', cargarDatos);
    document.getElementById('tipusVehicle').addEventListener('change', cambiarTipo);
    document.getElementById('afegirVehicle').addEventListener('click', addVehiculo);
});

function mostrarVehiculos(vehiculos){
    lista.innerHTML = "";
    vehiculos.forEach(vehiculo => {
        const div = document.createElement("div");
        let type;
        let extra;
        if(vehiculo instanceof Coche){
            extra = vehiculo.puertas;
            type = "Coche";
        } else if(vehiculo instanceof Moto){
            extra = vehiculo.tipo;
            type = "Moto";
        } else if(vehiculo instanceof Camion){
            extra = vehiculo.peso;
            type = "Camion";
        } else {
            extra = vehiculo.extra;
            type = vehiculo.type;
        }

        div.innerHTML = `<div>${type} | ${vehiculo.marca} | ${vehiculo.modelo} | ${vehiculo.año} | ${extra}</div>`;
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

async function addVehiculo(){
    const tipo = document.getElementById('tipusVehicle').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('model').value;
    const año = document.getElementById('any').value;
    const extra = document.getElementById('extra').value;
    let nuevoVehiculo;

    if(!marca || !modelo || !año || !extra) {
        alert("Todos los campos son obligatorios!!!");
        return;
    }

    if(tipo === "Cotxe"){
        nuevoVehiculo = new Coche(marca ,modelo, año, extra);
    }else if(tipo === "Moto"){
        nuevoVehiculo = new Moto(marca, modelo, año, extra);
    }else {
        nuevoVehiculo = new Camion(marca, modelo, año, extra);
    }

    try{
        const promesa = await new Promise ((resolve, reject) => {
            setTimeout(() => {
                db.agregar(nuevoVehiculo);
                resolve(nuevoVehiculo);
            }, 1000);
        });
        mostrarVehiculos(db.listaVehiculos);
    }catch(error) {
        alert(error);
    }
}