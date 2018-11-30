# Cifrado César
Este proyecto llamado ARCANO está basado en uno de los primeros métodos de cifrado de la criptografía el cual es el CIFRADO CESAR, llamada así en honor de a Julio cesar quien utilizo este método para comunicarse utilizando un desplazamiento de tres espacios en el abecedario creando así una forma de cifrado por sustitución.

## Estructura del proyecto

Está dirigida para cualquier persona que quiera cifrar y descifrar mensajes simples o textos normales y compartirla entre sus amigos, familiares, etc.
También está dirigida para personas que quieran cifrar una palabra en numeros para utilizarlas como claves de tarjetas de crédito.

### Contenido y características
el presente proyecto tendra dos usuarios que son:
mensajes simples entre amigos, familiares, etc.
cifrar una palabra en numeros para claves de tarjetas de credito.

arcano (mensajes encriptados):
ingresara un codigo el cual indicara su desplazamiento. 
el usuario podra ingresar un texto el cual desee cifrar.
tendra dos botones los cuales le permitiran la funcion de cifrar y descifrar.
el resultado se mostrara 
 dando como resulado un cifrado de letras el cual tambien se podra descifrar en el mismo proyecto .
- Registro de usuarios
- Login y logout
- Añadir registros, borrarlos y editarlos.


## Instalación

Debes renombrar el archivo `.env.example` a `.env`
con los datos correspondientes a la base de datos. 

## Cargar la base de datos

Para construir la base de datos, 
utiliza el script [`createdb.sql`](https://github.com/AdryDev92/peluqueria_canina/blob/master/createdb.sql)

## Instalación de dependencias
Desde la terminal, usa el siguiente comando:

```
composer update
```

Éste recibe las dependencias desde el `composer.json`

## Configuración de ruta de inicio

```
MAMP -> Preferences -> Web Server -> Document root(clic izquierdo) -> ruta/de/tu/proyecto/carpeta-public
```

### Tecnologías usadas

La aplicación está estructurada utilizando
`php`,`javascript`,`css`,`bootstrap` y `twig`.
