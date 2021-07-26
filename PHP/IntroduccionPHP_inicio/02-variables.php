<?php include 'includes/header.php';
//Definir una variable
$nombreCliente = "Juan";
$nombreCliente = "Luis";
//Imprimir el contenido de una variable
echo $nombreCliente;
//ontenido mas informacion del tipo de la variable
var_dump($nombreCliente);
//Definir variables constantes
define('constante',"Hola Mundo");
echo constante;
//DEfinir una variable constante
const constante2 = "Adios Mundo";
echo constante2;
include 'includes/footer.php';
?>