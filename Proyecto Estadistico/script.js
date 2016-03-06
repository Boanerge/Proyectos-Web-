//proyecto para asignacion estadistica
//Medidas estadisticas

//Recojer los datos
//DATOS PARA PROBAR= 2.3, 2.4, 3.2, 1.8, 2.6, 1.8, 3.2, 3.3, 3.7, 4.2, 5.2, 3.6, 2.3, 3.1, 2.4, 2.8, 2.3, 3.4, 3.9, 3.8, 1.9, 2.3, 2.4, 3.5, 3.6, 5.4, 4.1, 4.1, 4.6, 4.6, 2.3, 2.7, 2.3, 2.5, 1.8, 3.2, 2.8, 3.2, 3.3, 3.2, 4.7, 3.2, 1.8, 1.8, 2.5, 2.5, 2.4 , 3.0, 2.4, 2.5
var datos = [22,20,19,15,5,8,17,26,14,21,15,11,17,21,13,19,11,23,20,15,13,13,14,10,13,23,17,24,26,7,23,11,21,13,16,9,10,17,11,15];//Envase de los datos
//Preguntar numero de datos
//var numDatos = parseInt(prompt("Introduzca la cantidad de datos con la que desea operar que  desea: "));
//Que el usuario ingrese los datos
//var dato;//Almacenar cada dato

//for (i = 0; i < numDatos; i ++) {
//	var sumando=1;
//	dato = parseFloat(prompt("Ingrese el dato numero " + (i+sumando) +" : "));//Leyendo cada dato
//	datos.push(dato);//Agregando el dato al vector.
//}

//Calculos Básicos
//Numero de datos--------------------------------------------------------------
var operacionNumeroDatos = function() {
	return datos.length;//retornar el conteo de datos
}

//datos.sort(function (a,b) { return a - b; } );//Ordenar los Datos en el vector
//El menor de los datos--------------------------------------------------------
var operacionNumeroMenor = function() {
	return eval('Math.min('+ datos.join(',')+')');
};
//El mayor de los datos--------------------------------------------------------
var operacionNumeroMayor = function () {
	return eval('Math.max('+ datos.join(',')+')');
};

//El rango de todos los datos--------------------------------------------------
//R= max - min
var operacionRango = function() {
	var max = operacionNumeroMayor(),
        min = operacionNumeroMenor();
	return max - min;
};
//Intervalos de clase (K).-----------------------------------------------------
/*Para calcular los intervalos de clase podemos usar la regla de sturges.
Formula: 1+3.332log N
Pasos: 	-->Sacamos el logaritmo de N  (donde N es el numero de datos).
		-->Eso lo multiplicamos por 3.332.
		-->Luego le sumamos 1.
A coniderar: 	-->La cantidad de intervalos debe ser un numero impar. 
				-->El resultado simpre debe ser redondeado a la baja, a menos que el
				numero de la baja se un numero par, en ese caso se debe redondear a
				la alta.!

*/
var operacionIntervalosClase = function() {
	var numDatos = datos.length;
	var numIntervalos = (1+(3.332*(Math.log10(numDatos)))); //Aplicando el metodo Sturges
	var numIntervalosRedondeado=Math.round(numIntervalos);  //Redondeando al entero mas proximo.
	
	return numIntervalosRedondeado;

}
//Amplitud.--------------------------------------------------------------------
/*Formuala para calcular la Amplitud: A= R/K
donde R= rango y K= el intervalo de clase.*/
var operacionAmplitud  = function() {
	var A = operacionRango() / operacionIntervalosClase();
	return A;
};
// Distribuccion de frecuencia.------------------------------------------------
	//Limites------------------------------------------------------------------
var limitInferior = [operacionNumeroMenor()]; //push()--Agregar en la ultima posición
var limitSuperior = [operacionNumeroMayor()]; //unshift()-Agregar el la posicion 0

var agregarLimitInferior = function() {
	var numIntervalos = operacionIntervalosClase();
		for( i = 0; i <= limitInferior.length; i++) {
			if(limitInferior.length  < numIntervalos) {	
				limitInferior.push(limitInferior[i] + operacionAmplitud());
		};
	};
};
var agregarLimitSuperior = function() {
	var numIntervalos = operacionIntervalosClase(); 
	for ( i = 0; i <= limitSuperior.length; i++) {
		if( limitSuperior.length < numIntervalos) {
			limitSuperior.push(limitSuperior[i] - operacionAmplitud());
		};
	};
	limitSuperior.reverse();//Invertir el orden de los elementos
};
	//Puntos medios Xi---------------------------------------------------------
	//Xi = (limiteInferior + limiteSuperior)/2
var puntosMedios=[];
var operacionPuntosMedios = function() {
	var numIntervalos = operacionIntervalosClase();//Cantidad de intervalos
	for(i = 0; i <= puntosMedios.length; i++) {
		if(puntosMedios.length < numIntervalos) {
			puntosMedios.push((limitInferior[i] + limitSuperior[i])/2);
		};
	};
};
    //Frecuencia Absoluta------------------------------------------------------
    //Fi = cuantos datos se repiten entre los limites de un intervalo
    //Los intervalos los vamos trabajar como semi-abierto [ , )

var frecuenciaAbsoluta = [];
var operacionFrecuenciaAbsoluta = function() {
	var numIntervalos = operacionIntervalosClase(); //6
	var acumFi = 0;
	//console.log("dentro de la funcion");
	for (var i = 0; i < datos.length; i++) {

		//console.log("Dentro del for");
		for (var j = 0; j < numIntervalos; j++) {

			console.log("Dentro del segundo for.");

			if (datos[i] = limitInferior[j] && datos[i] <= limitSuperior[j]) {

				acumFi++; console.log(acumFi);

				if (frecuenciaAbsoluta.length <= numIntervalos) {
					frecuenciaAbsoluta[j] = acumFi;
					//frecuenciaAbsoluta.push(acumFi);
				};
			}
			else { 
				acumFi = 0; 
			};
		};
	};
};


//Llmadas de las funciones-----------------------------------------------------
document.write("El numero de datos es: " + operacionNumeroDatos() +"<br>");
document.write("El menor de los datos es: " + operacionNumeroMenor() +"<br>");
document.write("El mayor de los datos es: " + operacionNumeroMayor() +"<br>");
document.write("El rango es: " + operacionRango() +"<br>");
document.write("La cantidad de intervalos es: " + operacionIntervalosClase() + "<br>");
document.write("La Amplitud es: " + operacionAmplitud() + "<br>");
agregarLimitInferior();
agregarLimitSuperior();
operacionPuntosMedios();
operacionFrecuenciaAbsoluta();
//Imprimir limites en consola--------------------------------------------------
console.log("-->Limites superiores y inferiores de cada intervalo.");
for(i = 0; i <= limitInferior.length-1; i++){ 
	console.log((i+1)+ ") " + limitInferior[i] + "|--|" + limitSuperior[i]);
};
//Imprimir Puntos medios en consola--------------------------------------------
console.log("-->Puntos medios de casda intervalo.");
for(i = 0; i < puntosMedios.length; i++) {
	console.log((i+1)+ ") " +puntosMedios[i]);
}
//Imprimir Las frecuencias absolutas de cada intervalos------------------------
console.log("-->Frecuencias absolutas de cada intervalo.")
for (i = 0; i < frecuenciaAbsoluta.length; i++) {
    console.log((i+1)+ ") " + frecuenciaAbsoluta[i]);
};
//Operaciones-Medidas de tendencia central