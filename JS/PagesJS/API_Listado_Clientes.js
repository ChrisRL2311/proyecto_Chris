console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"


let DatosFiltrados = []
let contenedor = document.getElementById('tbody');



document.addEventListener('DOMContentLoaded',() => {
    consultarDatos()
});

//consulta de api 
function consultarDatos() {

    fetch(Api_Usuarios)
        
        .then(response => response.json())
        .then(result => {
            // custom error
            console.log(result)
            DatosFiltrados = result
        })
        .catch(error => {
            // common error
            alert ("Error al consultar la API: " + error.message)
            return null;
        });


}

function Mostrar_CampoTabla() {
    
    let html = ""

    Datos_Locales.forEach((element) => {

        console.log(element);

        html += ` 
        <tr>
            <td> ${element.id} </td>
            <td> ${element.name} </td>
            <td> ${element.email} </td>
         </tr>
        
        `
});
}