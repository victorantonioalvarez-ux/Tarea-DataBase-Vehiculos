import Vehiculo from './vehiculo.js';

export class Coche extends Vehiculo {
	constructor(id, marca, modelo, año, puertas) {
		super(marca, modelo, año);
		this._puertas = puertas;
	}
	
	set(puertas){
		this._puertas = puertas;
	}

	get(){
		return this._puertas;
	}

}