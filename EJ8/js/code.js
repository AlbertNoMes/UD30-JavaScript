//CREAMOS LA FUNCION
$numero = prompt("INTRODUCE UN NUMERO ENTERO:");

function numeroDevuelto($numero) {
  if ($numero % 2 == 0) {
    return `EL NUMERO ${$numero} ES PAR`;
  } else {
    return `EL NUMERO ${$numero} ES IMPAR`;
  }
}

alert(numeroDevuelto($numero));