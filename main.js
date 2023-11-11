

function verifyinputFormPresion() {
   var numeroregistroPresionS = document.getElementById("registroPresionS").value;
   var numeroregistroPresionD = document.getElementById("registroPresionD").value;   
   if (!Number.isNaN(numeroregistroPresionS)) { 
          alert("El número introducido es " + numeroregistroPresionS + " / " + numeroregistroPresionD);}
var alertadeRegistroP1 = document.getElementById("alertadeRegistroP1");
    alertadeRegistroP1.innerHTML = '<h3> El registro que introdujo es <span>' +  numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h3>';
  return false;
}


document.querySelector("button").addEventListener("click", verifyinputFormPresion);

