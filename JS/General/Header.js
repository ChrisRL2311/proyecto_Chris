
import {nombrePagina} from '../Datos/ConsultaDatos.js'



//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Footer()
    
});




function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('Header'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

  <div class="container">
                <div class="row">
                    <!-- Inicio: Contenedor 1  -->
                    <div class="col-md-6 col-sm-6 ">
                        <img src="Assets/pngegg (1).png" class="w-100" alt="">
                    </div>
                    <!-- Fin: Contenedor 1 -->

                    <!-- Inicio: Contenedor 2  -->
                    <div class="col-md-6 col-sm-6">
                        <!-- b4-jumbotron-default -->
                        <div class="">
                            <h3 class="lead text-center">Página  ${nombrePagina}</h3>
                            <p class="lead mt-5">
                                El JDM surgió en la década de 1960, cuando los fabricantes japoneses como Toyota, Nissan, Honda, Mazda y Subaru comenzaron a producir autos deportivos y compactos que se adaptaban a las necesidades del mercado local...
                            </p>


                            <a class="btn btn-secondary btn-lg mt-2 d-flex justify-content-center" href="Jumbo action link" role="button">MAS INFORMACION</a>


                        </div>
                    </div>
                    <!-- Fin: Contenedor  2-->
                </div>
            </div>

`;
    
}