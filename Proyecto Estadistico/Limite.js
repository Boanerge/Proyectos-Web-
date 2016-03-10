//Calculo de los limites inferiores y superiores.
//LI = Limite inferior
//LS = limite superior

var limitesIntervalos = [];
 var operacionLimites = function(valorMayor,valorMenor, amplitud, arregloEnvase) {
 	valorMenor = operacionNumeroMenor();
 	valorMayor = operacionNumeroMayor();
 	amplitud = operacionAmplitud();

 	var limiteMenor = valorMenor;
 	var limiteMayor = valorMenor + amplitud;

 	while(limiteMayor <= valorMayor) {

 			arregloEnvase.push({'LI':limiteMenor,'LS':limiteMayor});
 			limiteMenor = limiteMayor;
 			limiteMayor = limiteMenor + amplitud;
 	};
 };