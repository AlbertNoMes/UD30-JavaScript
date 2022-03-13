//ALMACENAMOS EL STRING EN LA VARIABLE $TEXTO
$texto = prompt("INTRODUCE UNA CADENA DE TEXTO");

//CREAMOS LA FUNCION
function compruebaCaracteres($texto) {
  if ($texto == $texto.toUpperCase()) {
    return "LA CADENA DE TEXTO SOLO TIENE MAYUSCULAS";
  } else if ($texto == $texto.toLowerCase()) {
    return "la cadena de texto solo tiene minúsculas";
  } else {
    return "La cadena de texto tiene mayúsculas y minúsculas";
  }
}
alert(compruebaCaracteres($texto));