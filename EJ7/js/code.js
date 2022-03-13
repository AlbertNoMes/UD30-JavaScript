//CALCULAMOS EL FACTORIAL DE UN NUMERO ENTERO
$numero = prompt("INTRODUCE UN NUMERO ENTERO");
$factorial = 1;

for (let index = $numero; index >= 1; index--) {
  $factorial *= index;  
}

alert(`EL FACTORIAL DE ${$numero} (${$numero}!) ES = ${$factorial}`)