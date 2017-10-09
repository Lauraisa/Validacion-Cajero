//se crea la funcion isValicard.
//dentro de ella ira la estructura.
function isValicard () {
  // Creando un prompt
  var card = prompt("Ingresa el número de tarjeta");
  //luego se creará una nueva variable en donde se depositara el nuevo elemento.
  var newCode = card;
  // se separará los numeros en un estring, utilizaremos un split y conct.
  var longitud = newCode.split("").conct();
  var newCard = newCode;
  var suma = 0;

  for (i=1; i<newCard.length; i+=2){
  suma+= parseInt(card.charAt[i]);
    }
    if (suma%10) == 0){
      alert("Número de tarjeta valida");
    }
    else{
      alert("Número no valido")
    }

return newCard;

}
isValicard();
