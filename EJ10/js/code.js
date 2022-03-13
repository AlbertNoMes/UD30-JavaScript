//ALMACENAMOS EL STRING EN LA VARIABLE $TEXTO
$texto = prompt("INTRODUCE UNA CADENA DE TEXTO");

//CREAMOS LA FUNCION
function palindromo($texto) {
  $textoCharList = $texto.split("");
  $texto = "";

  for (let index = 0; index < $textoCharList.length; index++) {
    if ($textoCharList[index] != " ") {
      $texto += $textoCharList[index];
    }
  }

  $textoList = $texto.split("");

  console.log($textoList);
  console.log($textoList.reverse());

  for (let index = 0; index < $textoList.length; index++) {
    if ($textoList[index] != $textoList.reverse()[index]) {
      return "NO ES PALINDROMO";
    }
  }

  return "SI ES PALINDROMO";
}

alert(palindromo($texto));