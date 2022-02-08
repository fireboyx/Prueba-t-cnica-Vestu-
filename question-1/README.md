# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

> Primeramente, antes de realizar el código se observa el comportamiento del problema en diferentes casos.
_Ejemplo:_
_Para N = 1; Formas = 1, Solo hay 1 forma de subir la escalera_
_Para N = 2; Formas = 2, Solo hay 2 formas de subir la escalera_
_Para N = 3; Formas = 3, Solo hay 3 formas de subir la escalera_
_Para N = 4; Formas = 5, Solo hay 5 formas de subir la escalera_
_Para N = 5; Formas = 8, Solo hay 7 formas de subir la escalera_
_Para N = 6; Formas = 13, ..._
_Para N = 7; Formas = 21_
_Para N = 8; Formas = 34_
_Para N = 9; Formas = 55_

> Siendo estos los datos obtenidos, se establece la secuencia en la que el número de formas es igual a la suma de los dos valores anteriores, por ejemplo: _Para N = 6, Formas = 8 + 5_.



