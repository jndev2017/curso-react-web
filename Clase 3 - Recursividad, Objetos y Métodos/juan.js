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