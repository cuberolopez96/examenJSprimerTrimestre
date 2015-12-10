//Juan Antonio Cubero Lopez
window.addEventListener("load",function(){
	var nombre = document.getElementById('nombre');
	var apellido1 = document.getElementById('apellido1');
	var apellido2 = document.getElementById('apellido2');
	var fechaN = document.getElementById('fechaDeNacimiento');
	var edad;
	var crear = document.getElementById('crear');
	var limpiar = document.getElementById('limpiar');
	var error = document.getElementById('error');
	crear.addEventListener("click",function(){
		nombre = nombre.value;
		apellido1 = apellido1.value;
		apellido2 = apellido2.value;
		fechaN = fechaN.value;
		
			var alumno = new Alumno(nombre,apellido1,apellido2,fechaN);
			alumno.mostrar();
		alert("hola");


	});
	
	function Alumno(nombre,apellido1,apellido2,fechaDeNacimiento){
		this.nombre = nombre;
		this.apellido1 = apellido1;
		this.apellido2 = apellido2;
		this.fechaDeNacimiento = this.crearFechaNacimiento(fechaDeNacimiento);
	}
	Alumno.prototype.crearFechaNacimiento =function(fechaDeNacimiento){
		var patron = new RegExp('\\d\\d-\\d\\d-\\d\\d\\d\\d');
		if(patron.test(fechaDeNacimiento)==false){
					throw new {
						this.name = "FormatoFechaInvalida";
						this.message = "la fecha está mal Escrita";
					}
		}
		fechaDeNacimiento = fechaDeNacimiento.split('-');
		dia = fechaDeNacimiento[0];
		mes = fechaDeNacimiento[1];
		anho = fechaDeNacimiento[2];
		fechaDeNacimiento = new Date();
		fechaDeNacimiento.setDate(dia);
		fechaDeNacimiento.setMonth(mes-1);
		fechaDeNacimiento.setFullYear(anho);
		if(fechaDeNacimiento.getDate != dia||fechaDeNacimiento.getMonth() != mes-1||fechaDeNacimiento.getFullYear()!=anho){
			throw new {
				this.name = "FechaInvalida";
				this.message = "la fecha es  invalida";

			}
		}
	}
	Alumno.prototype.mostrar=function(){
		var nuevaVentana = window.open();
		nuevaVentana.document.open();
		nuevaVentana.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>JuanAntonioCuberoLopez</title></head><body><p>Nombre:'+this.nombre+'</p><p>Apellido1:'+this.apellido1+'</p><p>Apellido2:'this.apellido2'</p><p></p></body></html>');
	}
	 
	
});