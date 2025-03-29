/*
	+-------------------------------------+
	| Expresiones Regulares en JavaSCript |
	+-------------------------------------+

	Las expresiones regulares (RegExp) son patrones utilizados para buscar, 
	validar o reemplazar texto dentro de cadenas.

	En JavaScript, se pueden crear usando:

	1) Sintaxis literal: /patrón/modificadores

	2) Constructor RegExp: new RegExp("patrón", "modificadores")
*/

	// Ejemplo:

	let re1 = /abc/i;
	let re2 = new RegExp("abc", "i");

	console.log(re1.test("abc")); // true	
	console.log(re1.test("abx")); // false
	
	/*
		Modificadores (flags) más comunes:
		----------------------------------

		g → Búsqueda global (no se detiene en la primera coincidencia).
		i → Búsqueda sin distinguir mayúsculas de minúsculas.
		m → Permite búsqueda en múltiples líneas.
	*/


	// Ejemplo:

	const regex = /hola/i;
	console.log(regex.test("Hola Mundo")); // true

	/*
		Caracteres especiales:
		----------------------			
		
		\d	Cualquier carácter dígito
		\w	Un carácter alfanumérico (“carácter de palabra”)
		\s	Cualquier carácter de espacio en blanco (espacio, tabulación, nueva línea, y similares)
		\D	Un carácter que no es un dígito
		\W	Un carácter no alfanumérico
		\S	Un carácter que no es de espacio en blanco
		.	Cualquier carácter excepto nueva línea
		\+ → Para el símbolo "+"
		\. → Para el símbolo "."
			let aPlus = /A\+/; // Significa "A+"
	*/	

	// Ejemplos:

	let regex = /A\+/i;

	console.log(regex.test("a+b")); // → true
	console.log(regex.test("a-b")); // → false

	// Formato de fecha y hora como 01-30-2003 15:20
	let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
	console.log(dateTime.test("01-30-2003 15:20")); // → true
	console.log(dateTime.test("30-ene-2003 15:20")); // → false

/*
	Cuantificadores:
	----------------

	+ → Uno o más (ej. \d+ → "123", "45").
	* → Cero o más (ej. a* → "", "a", "aaa").
	? → Cero o uno (ej. colou?r → "color", "colour").
	{n} → Exactamente n veces (ej. \d{3} → "123").
	{n,} → Al menos n veces (ej. \d{2,} → "12", "456").
	{n,m} → Entre n y m veces (ej. \d{2,4} → "12", "1234"
*/

	// Ejemplos:

	const regex = /\w{5,}/g;
	console.log("Hola mundo, JavaScript!".match(regex)); // ["mundo", "JavaScript"]

	console.log(/'\d+'/.test("'123'")); // → true
	console.log(/'\d+'/.test("''")); // → false

	let neighbor = /neighbou?r/;
	console.log(neighbor.test("neighbour")); // → true
	console.log(neighbor.test("neighbor"));	// → true

	/*
		Grupos y Alternancia (agrupando expresiones):
		---------------------------------------------

		(abc) → Grupo de caracteres exactos.
		(a|b|c) → Alternancia (ej. "rojo|verde|azul").
		(?:abc) → Grupo sin captura.
	*/

	// Ejemplos:

	const regex = /(hola|hello)/i;
	console.log("Dijo Hola!".match(regex)); // ["Hola"]


	let cartoonCrying = /boo+(hoo+)+/i;
	console.log(cartoonCrying.test("Boohoooohoohooo")); // true

	let animalCount = /\d+ (pig|cow|chicken)s?/;
	console.log(animalCount.test("15 pigs")); // → true
	console.log(animalCount.test("15 pugs")); // → false

	// La i al final de la expresión en el ejemplo hace que esta expresión regular ignore mayúsculas y minúsculas


	/*
		Métodos en JavaScript:
		----------------------

		test() → Devuelve true o false.
		match() → Retorna las coincidencias.
		replace() → Reemplaza coincidencias.
		search() → Retorna el índice de la coincidencia.
		split() → Divide una cadena en base a la RegExp.
	*/

	// Ejemplo:

	const regex = /\d+/g; // Busca al menos 1 digito, de principio a fin de la cadena
	console.log("3.14 y 2.71 son constantes matematicas".match(regex)); // ['3', '14', '2', '71']
