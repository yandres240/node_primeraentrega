console.log('Historia de usuario 1');
console.log('');
console.log('Educación continua');
console.log('');
console.log('Información de cursos ofertados');
console.log('');
	let cursos = [
		{
			id: 1,
			nombre: 'Algoritmos 1',
			duracion: '3 meses',
			valor: '100000'
		},
		{
			id: 2,
			nombre: 'Algoritmos 2',
			duracion: '3 meses',
			valor: '100000'
		},
		{
			id: 3,
			nombre: 'Arquitectura de software 1',
			duracion: '4 meses',
			valor: '300000'
		},
		{
			id: 4,
			nombre: 'Programación .Net',
			duracion: '2 meses',
			valor: '200000'
		},
		{
			id: 5,
			nombre: 'Programación Java',
			duracion: '2 meses',
			valor: '200000'
		}
	];

async function listarCursos(){
	for(var i = 0; i < cursos.length;i++){
		await sleep(2000)
		imprimirInformacion(cursos[i]);
	}
}

function imprimirInformacion(curso){
     console.log("El curso identificado con id " + curso.id + " se llama " + curso.nombre + ", tiene una duración de " + curso.duracion + " y un valor de " + curso.valor);
}
 
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

//Descomentar para testear la historia de usuario 1
//listarCursos();


console.log('Historia de usuario 2');
console.log('');

function BuscarCurso(curso){
	let informacion = cursos.find(info => info.id == curso)
	
	if(isEmpty(informacion)) {
		console.log("No existe el curso con id " + curso);
		console.log("Listado de cursos existentes");
		console.log("");
		listarCursos();
		
		return false;
	} else {
		console.log("El curso identificado con id " + informacion.id + " se llama " + informacion.nombre + ", tiene una duración de " + informacion.duracion + " y un valor de " + informacion.valor);
		return true;
	}
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function InscribirCurso(curso, nombre, cedula){
	let existeCurso = BuscarCurso(curso);
	if(existeCurso){
		GenerarArchivo(curso, nombre, cedula);
	}
}

function GenerarArchivo(curso, nombre, cedula){
	let fs = require('fs');
	let stream = fs.createWriteStream("Inscripcion_usuario_"+cedula+".txt");
	stream.once('open', function(fd) {
	  stream.write("Id curso "+ curso +" \n");
	  stream.write(", Nombre " + nombre +" \n");
	  stream.write(", Cedula "+ cedula +" \n");
	  stream.end();
	});
	
	console.log('');
	console.log('Inscripción realizada satisfactoriamente.');
	console.log('Archivo generado correctamente.');
	console.log('');
}

//Comentar las dos siguientes lineas para testear la historia de usuario 1
InscribirCurso(1,'Andres','99999999');
InscribirCurso(7,'Andres','99999999');