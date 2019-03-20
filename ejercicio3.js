window.onload = function () {
  // Numero de enlaces de la pagina
  var enlaces = document.getElementsByTagName("a");
  console.log('numero de enlaces = ' + enlaces.length);

  // Direccion del penultimo enlace
  console.log('direccion del penultimo enlace = ' + enlaces[enlaces.length - 2].href);

  // Numero de enlaces que apuntan a http://prueba
  var contador = 0;
  for (var i = 0; i < enlaces.length; i++) {
    if (enlaces[i].href == "http://prueba/") {
      contador++;
    }
  }
  console.log('enlaces que apuntan a http://prueba = ' + contador)

  // Numero de enlaces del tercer párrafo
  var p3 = document.getElementsByTagName("p");
  enlaces = p3[2].getElementsByTagName("a");
  console.log('Enlaces del tercer parrafo = ' + enlaces.length);
}