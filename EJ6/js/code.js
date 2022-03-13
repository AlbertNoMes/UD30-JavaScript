//ALMACENAMOS DATOS EN EL ARRAY
$letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "N",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  
  //PEDIMOS CON POPUP LA NUMERACION DEL DNI E INICIALIZAMOS LA VARIABLE LETRA
  $numeros = prompt("Introduzca su numero del DNI:");
  $letra = prompt("Introduzca su letra del DNI en mayúscula:");
  
  //COMPROBAMOS SI ESTA DENTRO DEL RANGO LA NUMERACION
  if ($numeros < 0 || $numeros > 99999999) {
    alert("EL NÚMERO INDICADO NO ES VÁLIDO");
  }
  
  //CALCULAMOS LA LETRA DEL DNI Y COMPROBAMOS QUE ES VÁLIDA LA QUE INDICA EL USUARIO
  $letracalculada = $letras[$numeros % 23];
  
  if ($letra == $letracalculada) {
    alert("LA LETRA INDICADA ES CORRECTA");
    alert(`EL DNI ${$numeros}${$letracalculada} ES CORRECTO`);
  } else {
    $letra != $letracalculada;
    alert("LA LETRA INDICADA NO ES CORRECTA");
    alert(`EL DNI ${$numeros}${$letra} ES INCORRECTO`);
  }