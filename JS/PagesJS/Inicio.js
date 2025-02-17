console.log(`Funcionando Archivo: Inicio`);



document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Testimonios()
    Mostrar_Articulos()
    
});




function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

   <div class="container">
        <p class="h2 mb-2">
          
        </p>
        <p class="h4 lead">- Autor </p>
    </div>
                


`;
    
}

function Mostrar_Articulos() {
    let Contenedor_IdFooter = document.getElementById('Articulos'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="Assets/pngegg.png" class="w-100" alt="">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>Encontraras toda la informacion que necesitas para poder estar enterado del mundo del JDM </h2>
                            <p>
                            </p>
                            <a class="btn btn-danger btn-lg" href="#">Read More</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                </div>

`;
    
}