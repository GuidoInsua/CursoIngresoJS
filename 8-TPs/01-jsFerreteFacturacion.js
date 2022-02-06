/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	let primerNumero;
	let segundoNumero;
	let tercerNumero;
	let suma;

	primerNumero=document.getElementById('txtIdPrecioUno').value;
	segundoNumero=document.getElementById('txtIdPrecioDos').value;
	tercerNumero=document.getElementById('txtIdPrecioTres').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	tercerNumero = parseInt(tercerNumero);

	suma = primerNumero + segundoNumero + tercerNumero;
	alert(suma);

}
function Promedio () 
{
	
	let primerNumero;
	let segundoNumero;
	let tercerNumero;
	let suma;
	let promedio;

	primerNumero=document.getElementById('txtIdPrecioUno').value;
	segundoNumero=document.getElementById('txtIdPrecioDos').value;
	tercerNumero=document.getElementById('txtIdPrecioTres').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	tercerNumero = parseInt(tercerNumero);

	suma = primerNumero + segundoNumero + tercerNumero;
	promedio = suma / 3;

	alert(promedio);

}								
function PrecioFinal () 
{
	
	let primerNumero;
	let segundoNumero;
	let tercerNumero;
	let suma;
	let precioFinal;

	primerNumero=document.getElementById('txtIdPrecioUno').value;
	segundoNumero=document.getElementById('txtIdPrecioDos').value;
	tercerNumero=document.getElementById('txtIdPrecioTres').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	tercerNumero = parseInt(tercerNumero);

	suma = primerNumero + segundoNumero + tercerNumero;
	precioFinal = suma * 0.21 + suma;

	alert(precioFinal);

}