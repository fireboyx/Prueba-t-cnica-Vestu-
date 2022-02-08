# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

_Para la implementación de la solución a este problema, primeramente se realiza un análisis alrededor de los requerimientos del problema, requerimientos que exigen el tratamiento un volumen de datos contenido en un archivo ".csv" (comma separated value). Debido a que se exige el retorno de un archivo "output.csv" el cual contenga headers tales como productId, el cual será el identificador del producto y para el cual se estarán calculado variables que son: "clicks" que se refiere a el número de clicks únicos que tiene el producto, "impressions" que se refiere a la cantidad de impresiones únicas del producto, y "ctr" que hace referencia a el Clickthrough Rate, el cual se calcula dividiendo el número total de clicks que tiene el producto sobre las veces que se muestra en pantalla. Al tener lo anterior claro, procedemos a implementar el algoritmo en el que primeramente se importan los modulos de node, por medio de los cuales se hará manejo de los archivos, los cuales son: fs, csv-parser y fast-csv. Al haber importado los módulos, procedemos a realizar la lectura de nuestro archivo de entrada, en el cual se encuentra toda la información que necesitamos procesar, esto haciendo uso del módulo "fs", que mediante el ".createReadstream('')" pasándole como parámetro el nombre del archivo "BrowsingEvents.csv" el cual será "parseado" y separado por comas haciendo uso de .pipe(parser()), en el cual introducimos los parámetros de separación de nuestro archivo resultante. Una vez hecho lo anterior nuestro archivo está listo para ser guardado dentro de un array para posteriormente poder procesar sus valores. Al haber leido la información dentro de este archivo, procedemos a filtrar la información ya que se requiere obtener los valores únicos del producto cuyo "id" es ingreasado. Para esto harémos uso del método ".filter" mediante el cual generarémos un nuevo array "dataFilter[]", en el que solo estén contenidos los datos del producto con el "id" seleccionado. AL haber hecho esto solo nos queda obtener el número de veces que están repetidos los eventos "click" e "impressions", haciendo uso nuevamente del método ".filter" con el cual obtendremos arrays mediante los cuales obtendremos el número de "clicks" e "impressions" usando sobre ellos el método ".length", valores los cuales serán operados de esta manera "clicks/impressions" para el CTR.  Despues de haber hecho esto, solo nos queda, ordenar nuestra información generando un nuevo array mediante el cual serán pasados los datos obtenidos para generar el archivo "output.csv". Al tener listo nuestro array "output[]", procedemos a pasarlo como parámetro a nuestro método que mediante el "createWriteStream" será escrito en el archivo "output.csv" la información anteriormente procesada._