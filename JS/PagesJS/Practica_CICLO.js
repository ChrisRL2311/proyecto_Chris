console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },//0
    { nombre: "Ana", edad: 17, activo: false },//1
    { nombre: "Carlos", edad: 30, activo: true },//2
    { nombre: "Laura", edad: 16, activo: true },//3
    { nombre: "Pedro", edad: 40, activo: false }//4


];

let Clientes = [
    { nombre: "Juan", edad: 25, activo: true },//0
    { nombre: "Ana", edad: 17, activo: false },//1
    { nombre: "Carlos", edad: 30, activo: true },//2
    { nombre: "Laura", edad: 16, activo: true },//3
    { nombre: "Pedro", edad: 40, activo: false }//4


];

console.log(personas[4].nombre)

console.log(personas[1].nombre)

personas.forEach(element => {

    console.log(element)

});

Clientes.forEach(element => {

    if (element.activo === true) {

        console.log(element.nombre,element.activo)

    }

});


console.log(personas.length)


let buscarnombre = personas.find(x =>x.nombre === "Ana" )

console.log(buscarnombre)

let buscaractivo = personas.find(x =>x.activo === true )

console.log(buscaractivo)

function Filtrar() {
    let valor = document.getElementById('sensitivo').value; //gi
    console.log(valor)
}

// ejercicio 1
function buscarDesdeInput() {
  let input1 = document.getElementById('buscarNombre').value.trim();  //Metio el valor pepe
  let resultado = document.getElementById('resultadoBusqueda');


  let busqueda = personas.find(x=> x.nombre.toUpperCase() === input1.toUpperCase()) //nombre == pepe


 
  if (busqueda) {
    
    resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`

  } else {
    resultado.innerHTML = `No encontrado a la persona`
  }
}

//ejercicio 2
function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');//inner 

    let busqueda = personas.find(x=> x.activo == true)

    
 
  if (busqueda) {
    
    resultado.innerHTML = `primera persona encontrada  ${busqueda.nombre}`

  } else {
    resultado.innerHTML = `No se encontro nadie activo `
  }

}

//ejercicio 6
function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        
        if (element.activo == true) {
            
          resultado.innerHTML += `
          
            <li>nombre : ${element.nombre} </li>`
          
            
        }

    });
}

// ejercicio 3
function primeraMayorDeEdad() {
  let resultado = document.getElementById('resultadoMayor');

  let busqueda = personas.find(x => x.edad > 18);

  if (busqueda) {
      resultado.innerHTML = `Primera persona mayor de 18: ${busqueda.nombre} (${busqueda.edad}`;

  } else {
    resultado.innerHTML = `No se encontro ninguna poersona mayor a los 18`;
    
  }

}


