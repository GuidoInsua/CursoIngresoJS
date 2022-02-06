/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	let fahrenheitIngresado;
	let resultado;

	fahrenheitIngresado=document.getElementById('txtIdTemperatura').value;

	fahrenheitIngresado = parseInt(fahrenheitIngresado);

	resultado = (fahrenheitIngresado - 32) * 5/9;

	alert(resultado);

}

function CentigradosFahrenheit () 
{
	
	let centigradosIngresado;
	let resultado;

	centigradosIngresado=document.getElementById('txtIdTemperatura').value;

	centigradosIngresado = parseInt(centigradosIngresado);

	resultado = (centigradosIngresado * 9/5) + 32;

	alert(resultado);

}
