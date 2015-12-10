//Juan Antonio Cubero Lopez
window.addEventListener("load",function(){
	//declaracion de los botones
	var botonFechas = document.getElementById("ejercicio1");
	var botonAlumnos = document.getElementById("ejercicio2");
	//EventListener del boton del ejercicio 1
	botonFechas.addEventListener("click",function(){
		var ejercicio1 = window.open();
		ejercicio1.document.open();
		ejercicio1.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>JuanAntonioCuberoLopez</title><script src="js/fecha.js"></script></head><body><header><h1>Juan Antonio Cubero López</h1></header><p id="hoy"></p><p id="fin"></p><p id="cuentaAtras"></p><input type="submit" id="cerrar" value = "cerrar"/></body></html>');
		ejercicio1.document.close();
	});
	//EventListener del boton del ejercicio 2
	botonAlumnos.addEventListener("click",function(){

		var ejercicio2 = window.open('alumnos.html');
		;
	});



});