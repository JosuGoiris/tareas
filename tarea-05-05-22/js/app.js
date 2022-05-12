$(document).ready(function () {
  var respuesta;
  var celdas = $(".celda");
  celdas.each(function (cel, index) {
    $(this).on("click", function () {
      mensaje();
      if (respuesta === "") {
        alert("Debe de ingresar un valor");
      } else {
        $(this).text(respuesta);
      }
    });
  });

  function mensaje() {
    respuesta = window.prompt("Ingrese un numero");
  }
});
