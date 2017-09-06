//Area de Cuadrado-rectangulo
var altura = 7;
var base = 5;
var area = altura * base;
console.log("El area de el rectangulo es igual a: "+ area);
// area es 35

//Area de Circulo
var radio = 4;
var pi = 3.1416;
var areaC = pi * Math.pow(radio,2);
console.log("El area del circulo es:"+ areaC );
// area es 50.2656

//Area de Triangulo
var altura = 5;
var base = 7;
var areaT = base * altura/2;
console.log("El area del triangulo es"+ areaT);
// area es = 17.5

//Volumen de una esfera
var pi = 3.1416;
var x = 4/3;
var radio = 4;
var volumen = pi * x * radio*radio*radio;
console.log("El Volumen de la esfera es:"+ volumen );
// volumen es 268.0832

//generar console log dentro de una funcion
//como hacer funcion
//variable global
//como hablarle a la funcion

var  nombre = "Javier";
function mostrar(){
    console.log("Hola:" +nombre)
}
mostrar();

//clase
function saludar10(){
    let i=0;
    for( i; i<10; i++);{
console.log(`hola ${nombre}`);
    }
console.log(`El valor de i es ${i}`);//` ${} concatenar variables
}
 
//
