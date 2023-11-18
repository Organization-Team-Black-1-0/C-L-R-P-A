function verifyinputFormPresion() {

  const fechaHoraActual = new Date();
  const coloralerta = "#FFF200";
  const colornormal = "#00FF99";

  var numeroregistroPresionS = document.getElementById("registroPresionS").value;
  var numeroregistroPresionD = document.getElementById("registroPresionD").value;
  
if (!Number.isNaN(numeroregistroPresionD) && !Number.isNaN(numeroregistroPresionS)) {
    /* var alertadeRegistroM1 = document.getElementById("alertadeRegistroP1");*/
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> El registro que introdujo el -- <span>' + fechaHoraActual + '</span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h5>';
  }
  else {
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> El valor introducido no es numero </h5>';
   };
  
  if (numeroregistroPresionS > numeroregistroPresionD) {
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> El registro que introdujo el -- <span>' + fechaHoraActual + '</span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h5>';
    alertadeRegistroP1.style.backgroundColor = "#00FF99";
  } else {
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> La presion siastolica debe ser mayor a la diastolica </h5>';
    alertadeRegistroP1.style.backgroundColor = "#FFF200";
  };


  if (numeroregistroPresionS > 121 || numeroregistroPresionD > 81) {
    /* var alertadeRegistroM1 = document.getElementById("alertadeRegistroP1");*/
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5>-  POR FAVOR REPITE LA MEDICION EN 15 MINUTOS, SI DE NUEVO TE SALE ESTE MENSAJE, LA PRESION ESTA FUERA DE LO NORMAL - AVISA A PERSONAL CERTIFICADO EN SALUD Y MEDICINA - El registro que introdujo el -- <span>' + fechaHoraActual + '</time></span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span></h5>';
    alertadeRegistroP1.style.background = "#FFF200";
  };
  return false;
}

document.querySelector("button").addEventListener("click", verifyinputFormPresion);

