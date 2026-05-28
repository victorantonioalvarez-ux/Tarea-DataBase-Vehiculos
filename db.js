export class DataBase{

	constructor(){
		this.listaVehiculos = [];
	}

	agregar(v) {
		this.listaVehiculos.push(v);
	}

	borrar(id){
		thislistaVehiculos.filter(v => v.id !== id);
	}

	datosIniciales(){
		return [
			{ tipo: 'Cotxe', marca: 'Toyota', modelo: 'Corolla', año: 2020, extra: '4 portes' },
            { tipo: 'Moto', marca: 'Yamaha', modelo: 'R1', año: 2022, extra: 'Esportiva' },
            { tipo: 'Camió', marca: 'Volvo', modelo: 'FH16', año: 2018, extra: '20 tones' }
		];
	}
	
}