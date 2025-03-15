// Recursividad
// ------------

/*
	Una funcion recursiva es una funcion que se invoca a sí misma dentro de su definición.

	En la función factorial tenemos:
		- Punto de parada: factorial(1) y factorial(0)
		- Llamada recursiva: num * factorial (num-1)
*/


//var cantLlamadas = 0

function factorial(num) {
	//cantLlamadas++;
	if (num == 1 or num == 0) {
		return 1;
	}
	else {
		return num * factorial(num-1);
	}
}

factorial(1) -> 1
factorial(2) -> 2 * factorial(1)
factorial(3) -> 3 * factorial(2)

factorial(num) -> num * factorial(num-1)

/*
	Ventajas:
		- Existen problemas que son mucho más fáciles de pensar como funciones recursivas

	Desventajas:
		- Se hace un uso intensivo del stack de llamadas, demorando así la respuesta de la funcion recursiva y sobrecargando el stack de llamadas

	Alternativa:
		- Normalmente usar una versión iterativa de la función o Programación Dinámica
*/