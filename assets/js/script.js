$(document).ready(function () {

  $("#red-bttn").click(function () {
    $("#red-alert").show();
  })

  $("#close-bttn").click(function () {
    $("#collapseZerg").collapse("hide");
    $("#red-alert").hide();
  })

  $("#nav1").click(function () {
    $("h1").text("Acerca de mí")
    $("#text1").html(`Soy un padre de familia orgulloso de su hija y dedicado a ella... Además de cargar a mi hija en los
                    hombros, me dedico también a cocinar, refregar la ropa, colgar la ropa,
                    aseo del hogar, orden y justicia dentro de los quehaceres de la casa... Así es señores, en mi casa
                    mando
                    yo
                    <span data-bs-toggle="collapse" data-bs-target="#dijo" class="btn text-white fs-3 roboto-mono-bttn border-bottom"
                        id="spant1">, CLARAMENTE.
                    <img src="assets/img/memedijo.png" alt="memedijo" class="collapse position-absolute" id="dijo"></span>`);
    $("#text2").html("");
  })

  $("#nav2").click(function () {
    $("h1").text("Destrezas")
    $("#text1").html(`De momento me encuentro cursando un bootcamp con E-camp, con el Sence de intermediario. Apenas vamos en la 2da semana, por lo que no hay mucho que poner aquí en cuanto al área se refiere.</br></br>
                      Algunas de las herramientas o ambientes que hemos visto son (como pincelada):</br></br></br>
                      <div class="text-center icon-color">
                      <i class="ms-5 fs-1 fa-brands fa-js"></i>
                      <i class="ms-5 fs-1 fa-brands fa-html5"></i>
                      <i class="ms-5 fs-1 fa-brands fa-bootstrap"></i>
                      <i class="ms-5 fs-1 fa-brands fa-github"></i>
                      <i class="ms-5 fs-1 fa-brands fa-font-awesome"></i></div>`);
    $("#text2").html(`En cuanto a capacidad personal o experiencias a lo largo de mi vida, puedo destacar en la seguridad de recursos humanos como guardia, garita, conserje, logística, etc.</br></br>También el manejo de apuestas deportivas dentro de un tiempo prolongado significante en los últimos años, es decir, manejo de stake, yield, profits, rentabilidad de mercados para lo que conlleva también, decisión rápida bajo alta presión, como también otros muchos escenarios que puede presentar el área.`);
  })

  $("#nav3").click(function () {
    $("h1").text("Realizaciones")
    $("#text1").html(`<div class="d-flex">
                      <div class="card col-5 mx-auto" data-bs-theme="dark">
                      <h5 class="card-header lato-title">inProcess</h5>
                      <div class="card-body lato-text">
                      <h5 class="lato-text">inProcess</h5>
                      <p class="lato-text">inProcess</p>
                      <a href="assets/img/under construction.webp" target="_blank" class="btn border roboto-mono-bttn color-bttn">Go somewhere</a>
                      </div>
                      </div>

                    <div class="card col-5 mx-auto" data-bs-theme="dark">
                      <h5 class="card-header lato-title">inProcess</h5>
                      <div class="card-body lato-text">
                      <h5 class="lato-text">inProcess</h5>
                      <p class="lato-text">inProcess</p>
                      <a href="assets/img/under construction.webp" target="_blank" class="btn border roboto-mono-bttn color-bttn">Go somewhere</a>
                      </div>
                      </div>
                      </div>`);
    $("#text2").html("");
  })

});