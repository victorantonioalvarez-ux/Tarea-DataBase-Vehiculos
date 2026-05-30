import { Vehiculo } from './vehiculo.js';

export class Coche extends Vehiculo {
	constructor(marca, modelo, año, puertas) {
		super(marca, modelo, año);
		this._puertas = puertas;
	}
	
	set puertas(puertas){
		this._puertas = puertas;
	}

	get puertas(){
		return this._puertas;
	}

}