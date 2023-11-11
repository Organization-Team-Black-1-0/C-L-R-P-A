

function verifyinputFormPresion() {
   var numeroregistroPresionS = document.getElementById("registroPresionS").value;
   var numeroregistroPresionD = document.getElementById("registroPresionD").value;   
   if (!Number.isNaN(numeroregistroPresionS)) { 
          alert("El número introducido es " + numeroregistroPresionS);}
var alertadeRegistroP1 = document.getElementById("alertadeRegistroP1");
    alertadeRegistroP1.innerHTML = '<h3> El registro que introdujo es <span>' +  numeroregistroPresionS + '</span> y no esta dentro del intervalo de numeros aceptados</h3>';
  return false;
}


document.querySelector("button").addEventListener("click", verifyinputFormPresion);

