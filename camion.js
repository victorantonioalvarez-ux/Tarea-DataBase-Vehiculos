import Vehiculo from './vehiculo.js';

export class Camion extends Vehiculo {
	constructor(id, marca, modelo, año, peso) {
		super(marca, modelo, año);
		this._peso = peso;
	}
	
	set peso(peso){
		this._peso = peso;
	}

	get peso(){
		return this._peso;
	}
}