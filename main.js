

function verifyinputFormPresion() {

  const fechaHoraActual = new Date();
  var numeroregistroPresionS = document.getElementById("registroPresionS").value;
  var numeroregistroPresionD = document.getElementById("registroPresionD").value;
  if (!Number.isNaN(numeroregistroPresionD) && !Number.isNaN(numeroregistroPresionS)) {
    /* var alertadeRegistroM1 = document.getElementById("alertadeRegistroP1");*/
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> El registro que introdujo el -- <span>' + fechaHoraActual + '</span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h5>';


  }
  else {
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> El valor introducido no es numero </h5>';


    /*alert("El valor introducido no es un número")*/;
  };
  /* alertadeRegistroM1.innerHTML = '<h5> El registro que introdujo el -- <span>' + fechaHoraActual + '</span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h5>';
 */
  if (numeroregistroPresionS > numeroregistroPresionD) {
    /* var alertadeRegistroM1 = document.getElementById("alertadeRegistroP1");*/
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> El registro que introdujo el -- <span>' + fechaHoraActual + '</span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h5>';

  } else {
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> La presion siastolica debe ser mayor a la diastolica </h5>';
  };

  if (numeroregistroPresionS>120 || numeroregistroPresionD>80) {
    /* var alertadeRegistroM1 = document.getElementById("alertadeRegistroP1");*/
    document.getElementById("alertadeRegistroP1").innerHTML = '<h5> - LA PRESION ESTA FUERA DE LO NORMAL - AVISA A PERSONAL CERTIFICADO EN SALUD Y MEDICINA - El registro que introdujo el -- <span>' + fechaHoraActual + '</span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h5>';
0
  } ;


  return false;


}


document.querySelector("button").addEventListener("click", verifyinputFormPresion);

