switch (){
case 1: /* Pelicula Clasificacion C */

let maxEdad =40;
let minEdad =1;

let edadPersona = Math.round(Math.random() * (maxEdad - minEdad) + minEdad)  



if (edadPersona >= 18){
    console.log("Usted puede pasar a la pelicula clasificacion C,")
    console.log("Su edad es :" + edadPersona)
}

    else{
        console.log("Ustes es un mocoso, so no")
        console.log("Su edad es:" + edadPersona)
        let acompañante = Math.random();
if (acompañante=1){
    console.log("Usted lleva un acompañante, pasele")
}
    }
    break;

    case 2: /*Pelicula Clasificacion A */
    let maxEdad =50;
    let minEdad =1;
    
    let edadPersona = Math.round(Math.random() * (maxEdad - minEdad) + minEdad)
    console.log("Su edad es :" + edadPersona)
    console.log("Cualquier puede pasar a una pelicula clasificacion A,")
    
    break;
}
