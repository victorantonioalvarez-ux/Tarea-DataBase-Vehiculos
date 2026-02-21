class Vehiculo {
	constructor(id, marca, modelo, año){
		this._id = Date.now() + Math.random();
		this._marca = marca;
		this._modelo = modelo;
		this._año = año;
	}


	pintame(){
		return `<span> ${this.marca} </span>`;
	}
}