import { Coche } from './coche.js';
import { Moto } from './moto.js';
import { Camion } from './camion.js';

export class DataBase{

	constructor(){
		this.listaVehiculos = [];
	}

	agregar(v) {
		this.listaVehiculos.push(v);
	}

	borrar(id){
		this.listaVehiculos = this.listaVehiculos.filter(v => v.id !== Number(id));
	}

	datosIniciales(){
		return [
			new Coche('Toyota', 'Corolla', 2020, 4),
			new Moto('Yamaha', 'R1', 2022, 'Esportiva'),
        	new Camion('Volvo', 'FH16', 2018, 20)
		];
	}
	
}