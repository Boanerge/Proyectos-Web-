//Valor que hay escrito en la pantalla.
var pantalla = document.getElementById("pantalla");

//Obtener el valor que hay en la pantalla para concatenarlo con el numero presinado.
var obtenerNum = function(Num){
	var x = document.getElementById("pantalla");	
	var concatenarNumeros = x.value + Num;
	toString(x.value = concatenarNumeros);
}

var valor_viejo = 0, signo;

//Operaciones
var suma = function(){
	valor_viejo = parseFloat(pantalla.value);
	pantalla.value = '';
	signo = '+';
}
var resta = function(){
	valor_viejo = parseFloat(pantalla.value);
	pantalla.value = '';
	signo = '-';
}
var multiplicar = function(){
	valor_viejo = parseFloat(pantalla.value);
	pantalla.value = '';
	signo = '*';
}
var division = function(){
	valor_viejo = parseFloat(pantalla.value);
	pantalla.value = '';
	signo = '/';
}
var limpiarPantalla = function () {
	pantalla.value = " ";
}
//Resultado
var resultado = function(){
	var valor_A, valor_B;
	valor_A = valor_viejo;
	valor_B = (parseFloat(pantalla.value));
	
	if(signo == '+'){
		pantalla.value = valor_A + valor_B;
	}
	else if(signo == '-'){
		pantalla.value = valor_A - valor_B;
	}
	else if(signo == '*'){
		pantalla.value = valor_A * valor_B;
	}
	else if(signo == '/'){
		pantalla.value = valor_A / valor_B;
	}
}
