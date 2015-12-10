window.addEventListener("load",function(){
	//declaracion de variables
	var pHoy = document.getElementById("hoy");//parrafo de la fecha de hoy
	var pFin = document.getElementById("fin");//parrafo de la fecha de fin de curso
	var pCuentaAtras = document.getElementById("cuentaAtras");//parrafo de la cuenta atras
	var fechaHoy = new Date();//fecha de hoy
	var finCurso = crearFecha(2016,6,20);//fecha del fin de curso
	var cuentaAtras = (finCurso.getTime() - fechaHoy.getTime())/3600000/24;//cuenta atras para que se acabe el curso
	var diasSemana =  ['Domingo','Lunes','Martes','Miercoles','Jueves','viernes','sabado'];//array dias de la semana
	var  meses= ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
	//declaracion de funciones 
	function crearFecha(anho,mes,dia){
		var date = new Date();
		date.setFullYear(anho);
		date.setMonth(mes-1);
		date.setDate(dia);
		return date;
	}
	//procedemos añadir escribir sobre el arbol DOM
	pHoy.innerHTML='Hoy es '+diasSemana[fechaHoy.getDay()]+', '+fechaHoy.getDate()+' de '+meses[fechaHoy.getMonth()]+' de '+fechaHoy.getFullYear();
	pFin.innerHTML = 'El fin de curso será el '+diasSemana[finCurso.getDay()]+', '+finCurso.getDate()+' de '+meses[finCurso.getMonth()]+' de '+finCurso.getFullYear();
	pCuentaAtras.innerHTML = 'y sólo quedan '+cuentaAtras.toFixed(0)+' días';
});