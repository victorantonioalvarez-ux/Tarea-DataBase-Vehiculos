import Vehiculo from './Vehiculo';

class Camion extends Vehicle {
	constructor(id, marca, modelo, año, peso) {
		super(marca, modelo, año);
		this._peso = peso;
	}
	
	set(peso){
		this._peso = peso;
	}

	get(){
		return this._peso;
	}
}