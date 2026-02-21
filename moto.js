import Vehiculo from './Vehiculo';

class Moto extends Vehiculo {
	constructor(marca, modelo, año, tipo) {
		super(marca, modelo, año);
		this._tipo = tipo;
	}

	set(tipo){
		this.tipo = tipo
	}

	get(){
		return this._tipo
	}

}