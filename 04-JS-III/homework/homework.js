// No cambia los nombres de las funciones.

function  devolverPrimerElemento ( arreglo )  {
  // Devuelve el primer elemento de un array
  // Tu codigo:
   matriz de retorno [ 0 ] ;
}

function  devolverÚltimoElemento ( arreglo )  {
  // Devuelve el último elemento de un array
  // Tu codigo:
  devolver  matriz [ matriz . longitud  -  1 ] ;
}

function  obtenerLargoDelArray ( array )  {
  // Devuelve el largo de un array
  // Tu codigo:
   matriz de retorno . longitud ;
}

function  incrementarPorUno ( array )  {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu codigo:
  var  nuevoArray  =  [ ] ;
  for ( var  i  =  0 ;  i  <  arreglo . longitud ;  i ++ )  {
    nuevoArray [ i ]  =  array [ i ]  +1  ; _
  }

  volver  nuevoArray ;

}

function  agregarItemAlFinalDelArray ( matriz ,  elemento )  {
  // agrega el "elemento" al final del array
  // y devuelve el array
  // Tu codigo:
  matriz [ matriz . longitud ]  =  elemento ;
   matriz de retorno ;
}

function  agregarItemAlComienzoDelArray ( array ,  elemento )  {
  // agregue el "elemento" al comienzo del arreglo
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu codigo:
  matriz _ anular desplazamiento ( elemento ) ;
   matriz de retorno ;
}

function  dePalabrasAFrase ( palabras )  {
  // "palabras" es un arreglo de cuerdas/cadenas
  // Devuelve una cadena donde todas las palabras están concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hola', '¡mundo!'] -> '¡Hola mundo!'
  // Tu codigo:
  devolver  palabras . unirse ( ' ' ) ;
}

function  arregloContiene ( arreglo ,  elemento )  {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "verdadero" si está, o "falso" si no está
  // Tu codigo:
  for ( var  i  =  0 ;  i  <  arreglo . longitud ;  i ++ )  {
    if ( matriz [ i ]  ===  elemento )  {
      devolver  verdadero ;
    }
  }
  devolver  falso ;
}

function  agregarNumeros ( numeros )  {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu codigo:
  var  suma  =  0 ;
  for ( var  i  =  0 ;  i  <  numeros . length ;  i ++ )  {
    suma  =  suma  +  números [ i ] ;
  }
  devolver  suma ;

}

function  promedioResultadosTest ( resultadosTest )  {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu codigo:
  return  agregarNumeros ( resultadosTest )  /  resultadosTest . longitud ;
}

function  numeroMasGrande ( numeros )  {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el numero mas grande
  // Tu codigo:
  var  maximo  =  numeros [ 0 ] ;
  for ( var  i  =  1 ;  i  <  numeros . length ;  i ++ )  {
    if ( numeros [ i ]  >  maximo )  { 
      maximo  =  numeros [ i ] ;
    }
  }
  volver  maximo ;
}

function  multiplicar Argumentos ( )  {
  // Usa la palabra clave `argumentos` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu codigo:
  if ( argumentos . longitud  <  1 )  devuelve  0 ;
  var  totales  =  1 ;
  for ( var  i  =  0 ;  i  <  argumentos . longitud ;  i ++ )  {
    total  =  total  *  argumentos [ i ] ;
  }
  devolución  total ;
}

function  cuentoElementos ( arreglo ) {
  //Realiza una función que devuelve la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu codigo aqui
  let  contador  =  0 ;
  for  ( sea  i  =  0 ;  i  <  arreglo . longitud  ;  i ++ )  {
    if ( arreglo [ i ]  >  19 ) {
      contador ++
    }
  }
  volver  contador
}

function  diaDeLaSemana ( numeroDeDia )  {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dio el número del día de la semana, vuelve: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu codigo aqui   
  if ( numeroDeDia  ===  1  ||  numeroDeDia  ===  7  ) {
    volver  "Es fin de semana"
  }
  volver  "Es dia Laboral"
} 

function  empiezaConNueve ( n )  {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe devolver true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu codigo aqui
  sea  ​​num  =  n . a la cadena ( )
  if ( num . charAt ( 0 )  ===  "9" ) {
    volver  verdadero
  }
  devolver  falso
}

function  todosIguales ( arreglo )  {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar verdadero, caso contrario devolver falso.
  //Escribe tu codigo aqui  
  for  ( var  i  = 0  ;  i  <  arreglo . length  -  1 ;  i ++ )  {
    if ( arreglo [ i ]  !==  arreglo [ i + 1 ] ) {
      devolver  falso
    }
  }
  volver  verdadero
} 

function  mesesDelAño ( array )  {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y devolverlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu codigo:
  var  nuevoArray  =  [ ] ;
  for ( sea  i =  0 ;  i < arreglo . longitud ;  i ++ )  {
    if ( array [ i ]  ===  "Enero"  ||  array [ i ]  ===  "Marzo"  ||  array [ i ]  ===  "Noviembre" )  ​​{
      nuevoArray . empujar ( matriz [ i ] ) ;
    }
  }
  if ( nuevoArray . longitud  <  3 )  {
    return  "No se encontraron los meses pedidos" ;
  }
  más  {
      volver  nuevoArray ;
  }
}

function  mayorACien ( array )  {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu codigo:
  var  nuevoArray  =  [ ] ;
  for ( sea  i =  0 ;  i  <  arreglo . longitud ;  i ++ )  {
    si ( matriz [ i ]  >  100 )  {
      nuevoArray . empujar ( matriz [ i ] ) ;
    }
  }
  volver  nuevoArray ;
}

función  romperDeclaración ( numero )  {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un limite de 10 veces.
  //Guardar cada nuevo valor en una matriz.
  //Devolver el array
  //Si en algun momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecucion y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el enunciado 'break'
  // Tu codigo:
   matriz  var =  [ ] ;
  var  suma  =  número ;
  para ( var  i =  0 ;  i < 10 ;  i ++ )  {
    suma  =  suma  +  2 ;
    si ( suma  ===  i )  romper ;
    más  {
      matriz _ empujar ( suma ) ;
    }
  }
  si ( yo  <  10 )  {
    return  'Se interrumpió la ejecución' ;
  }
  más  {
       matriz de retorno ;
  }
}

function  continuarDeclaración ( numero )  {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un limite de 10 veces.
  //Guardar cada nuevo valor en una matriz.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continúa con la siguiente iteración
  //Pista: usá el enunciado 'continuar'
  // Tu codigo:
   matriz  var =  [ ] ;
  var  suma  =  número ;
  para ( var  i =  0 ;  i < 10 ;  i ++ )  {
    si ( i  ===  5 )  continuar ;
    más  {
      suma  =  suma  +  2 ;
      matriz _ empujar ( suma ) ;
    }
  }
   matriz de retorno ;
}


// No modificar nada debajo de esta linea
// --------------------------------

módulo _ exportaciones  =  {
  devolverPrimerElemento ,
  devolver Ultimo Elemento ,
  obtenerLargoDelArray ,
  incrementarPorUno ,
  agregarItemAlFinalDelArray ,
  agregarItemAlComienzoDelArray ,
  dePalabrasA Frase ,
  arrayContiene ,
  agregarNumeros ,
  PromedioResultadosTest ,
  numeroMasGrande ,
  multiplicar argumentos ,
  cuentoElementos ,
  diaDeLaSemana ,
  EmpiezaConNueve ,
  todosIguales ,
  mesesDelAño ,
  alcaldeACien ,
  romperDeclaración ,
  continuarDeclaración
} ;