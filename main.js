

function verifyinputFormPresion() {

  const fechaHoraActual = new Date();
  var numeroregistroPresionS = document.getElementById("registroPresionS").value;
  var numeroregistroPresionD = document.getElementById("registroPresionD").value;
  if (!Number.isNaN(numeroregistroPresionD) && !Number.isNaN(numeroregistroPresionS)) {

    var alertadeRegistroM1 = document.getElementById("alertadeRegistroP1");


    /*    alert("El número que introdujo es " + numeroregistroPresionS + " / " + numeroregistroPresionD); */





  } else { alert("El valor introducido no es un número"); }


  alertadeRegistroM1.innerHTML = '<h5> El registro que introdujo el -- <span>' + fechaHoraActual  + '</span> -- fue <span>' + numeroregistroPresionS + '</span> / <span>' + numeroregistroPresionD + '</span> </h5>';
  return false;



}


document.querySelector("button").addEventListener("click", verifyinputFormPresion);

