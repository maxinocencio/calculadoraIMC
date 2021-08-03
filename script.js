let valor = document.getElementById('resultado')

function getPeso() {

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var altura2 = altura * altura
    var imc = peso/altura2

    valor.innerText = imc.toFixed(2)
}

////

$(document).ready (function() {
  
    $("#btnAltura").click( function() {
      
      $("#peso").fadeOut(0);
      $("#altura").fadeOut(0);
      $("#btnAltura").fadeOut(0);
      $("#result").fadeIn(0);
      
      });
   
    
    });