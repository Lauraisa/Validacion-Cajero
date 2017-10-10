# **Validacion de tarjeta**
En el proyecto de _Validacion de tarjeta_, se solicita que al ingresar un número esta sea validada y si el usuario ingresa un número incorrecto no se valide.
## Pseudocodigo Validacion de Tarjeta

### Primero
Se crea una función _isValiCard_.

`function isValiCard()`  
 Dentro de la función  se crea una variable  que contendra un mensaje, y nos pedirá ingresar nuestro número de tarjeta.
 `var card = prompt("Ingresa el número de tarjeta")`
### Segundo   
Luego se creará una nueva variable en donde se depositara el nuevo elemento.   
`var newCode = card`, separaremos los números en un string, para ello utilizaremos un split y concat.
   `var longitud = newCode.split("").conct()`.var newCard = newCode; var suma = 0;
Para ello realisaremos un ciclo for:   
si _para_ `(i=1; i<newCard.length; i+=2)` entoces se debe cumplir lo siguiente.   
 `{suma+= parseInt(card.charAt[i])}` y si esto se cumple se da la siguiente condición.    
 _si_ `(suma%10) == 0){alert("Número de tarjeta valida")}`.    
 Caso contrario se cumple la otra condición. `else{alert("Número no valido")}`. Finalmente se invocara con un retorno la nueva variable  `newCard`.

  > # Código de Validación de trajeta de crédito

```js
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
 ```

   > Link del Diagrama de fjujo
   
   > ![Diagrama de Flujo](https://code2flow.com/lo3GMr.png)
