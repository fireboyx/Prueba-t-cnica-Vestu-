# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

_Para dar solución a este problema primeramente se crearon 2 objetos que contienen cada uno los caracteres de cierre y apertura de los parentesis, corchetes y llaves. Al tener esto procedemos a implementar un ciclo "for" mediante el cual vamos a iterar el "string" que tenémos como parámetro de la función, esto a la vez equipado con un condicional que por medio de".hasOwnPropety(i)", nos va a permitit primeramente si el "string" contiene uno de los caracteres de apertura anteriormente definidos, que si esto es así procederá a agregar este parámetro dentro de un "array" el cual se eliminará cuando este algoritmo encuentre uno de los caracteres de cierre del mismo tipo permitiendonos de esta manera balancear el contenido de este "array". Al final de este ciclo se hace una revisión a la longitud de este "array" y si esta es diferente de a cero (!=0), nuestra función retornará "false" como respuesta y en el caso cotrario retornará "true"._