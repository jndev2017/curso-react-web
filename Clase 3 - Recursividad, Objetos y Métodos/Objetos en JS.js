/*
	Un objeto en JS es una estructura de datos que tiene el par clave-valor

	let obj1 = {
		par1: clave1,
		par2: clave2,
		...
		fun1: function(<params>) {
			instruccion1;
			instruccion1;
			...
		}
	}
*/

let juan = {
	nombre: "Juan",
	edad: 30,
	profesion: "deportista",
	posicion: 100,
	
	correr: function(pasos) {
		posicion += pasos
	},
	saludar: function(nombre) {
		console.log("Hola " + nombre);
	}
}

juan.correr(100) // actualiza posicion a 200 (100+100)
juan.saludar("Jorge") // Hola Jorge
