$(document).ready(inicio);
var estudiante;
var numerocontrol;
var carrera;
var grupo;
var lista_array= [];
function inicio(){
var datos= localStorage.getItem("listaStorage");
//localStorage.clear();
if(datos!=undefined && datos!=null){
lista_array= datos.split("//");
for(i=0;i<lista_array.length;i++){
$("#lista_de_estudiantes").append("<div class='linea'>" + lista_array[i]
+"</div>");
}
}
$("#registrar").click(registrar)

}
function registrar(){
estudiante = $("#input_estudiante").val();
numerocontrol = $("#input_numerocontrol").val();
carrera = $("#input_carrera").val();
grupo = $("#input_grupo").val();

if(estudiante.length > 0 && lista_array.indexOf(estudiante)==-1){
lista_array.push(estudiante);
lista_array.push(numerocontrol);
lista_array.push(carrera);
lista_array.push(grupo);
$("#lista_de_estudiantes").append("<div class='linea'>"+numerocontrol+"," + estudiante+","+carrera+","+grupo
+"</div>");
$("#input_estudiante").val("").focus();
}
registrarStorage();
}
function registrarStorage(){
var datos= lista.join("//");
localStorage.setItem("listaStorage",datos);
//alert(datos);
}

function eliminartodo(){
	localStorage.clear();
}