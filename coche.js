import Vehiculo from './Vehiculo';

class Coche extends Vehicle {
	constructor(id, marca, modelo, año, puertas) {
		super(marca, modelo, año);
		this._puertas = puertas;
	}
	
	set(puertas){
		this._puertas = tipo
	}

	get(){
		return this._puertas
	}


}