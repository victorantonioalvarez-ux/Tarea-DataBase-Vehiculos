import Vehiculo from './vehiculo.js';

export class Moto extends Vehiculo {
	constructor(marca, modelo, año, tipo) {
		super(marca, modelo, año);
		this._tipo = tipo;
	}

	set tipo(tipo){
		this._tipo = tipo;
	}

	get tipo(){
		return this._tipo;
	}

}