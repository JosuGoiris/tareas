$(document).ready(function () {
  $("#boton").on("click", function () {
    if ($("#vacancias").val() <= 5 && $("#nombrePuesto").val() != "") {
      $("#tabla").append(
        $("<tr>")
          .append($('<td class="td"><input type="checkbox" class="check">'))
          .append($("<td>").text($("#nombrePuesto").val()))
          .append($("<td>").text($("#vacancias").val() || 0))
          .append($("<td>").text($("#salario").val() || 0))
      );
      $("h4").text("");
    } else if ($("#vacancias").val() > 5) {
      alert("Las vacancias no pueden ser mayores que 5");
    } else if ($("#nombrePuesto").val() === "") {
      alert("El nombre del puesto no puede estar vacio");
    }
  });

  let chec = document.querySelectorAll('.chec')

  $(".quitar").on("click", function () {
      $('input[type="checkbox"]').each(function (index, item) {
        if (item.checked == true) {
          item.parentNode.parentNode.remove();
          $("h4").text("");
        } else if (item.checked == false) {
          $(".error").text("Debe de seleccionar un elemento");
        }
      });
  });
});
