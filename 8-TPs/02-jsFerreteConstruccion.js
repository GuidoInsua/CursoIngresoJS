/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	let largoIngresado;
	let anchoIngresado;
	let perimetro;
	let alambreNecesario;

	largoIngresado=document.getElementById('txtIdLargo').value;
	anchoIngresado=document.getElementById('txtIdAncho').value;

	largoIngresado = parseInt(largoIngresado);
	anchoIngresado = parseInt(anchoIngresado);

	perimetro = largoIngresado * 2 + anchoIngresado * 2;
	alambreNecesario = perimetro * 3;

	alert("Se necesitan " + alambreNecesario + " metros de alambre");


}
function Circulo () 
{

	let radioIngresado;
	let circunferencia;
	let alambreNecesario;

	radioIngresado=document.getElementById('txtIdRadio').value;

	radioIngresado = parseInt(radioIngresado);

	circunferencia = 2 * 3.141592 * radioIngresado;
	alambreNecesario = circunferencia * 3;

	alert("Se necesitan " + alambreNecesario + " metros de alambre");
	
}
function Materiales () 
{
	
	let largoIngresado;
	let anchoIngresado;
	let area;
	let cemento;
	let cal;

	largoIngresado=document.getElementById('txtIdLargo').value;
	anchoIngresado=document.getElementById('txtIdAncho').value;

	largoIngresado = parseInt(largoIngresado);
	anchoIngresado = parseInt(anchoIngresado);

	area = largoIngresado * anchoIngresado;

	cemento = area * 2;
	cal = area * 3;

	alert("se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal" );
	
}