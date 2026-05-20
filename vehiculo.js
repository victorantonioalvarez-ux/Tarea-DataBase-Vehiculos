export class Vehiculo {
	constructor(id, marca, modelo, año){
		this._id = Date.now() + Math.random();
		this._marca = marca;
		this._modelo = modelo;
		this._año = año;
	}

	set marca(marca) { 
		this._marca = marca; 
	}
    set modelo(modelo) { 
    	this._modelo = modelo; 
	}
    set año(año) { 
    	this._año = año; 
	}

	get marca() { 
		return this._marca; 
	}
    get modelo() { 
    	return this._modelo; 
	}
    get año() { 
    	return this._año; 
    }
    get id() { 
    	return this._id; 
    }
}