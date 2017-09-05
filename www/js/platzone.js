//si la palabra termina en "ar", se le quitan los dos ultimos caracteres

function platzom(str){
    let translation = str;
    if (str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2);//corta la cadera, elimina los 2 ultimos caracteres
    }

    /*Si la palabra inicia con "z"se le anade los caracteres "pe" al final de la palabra*/ 
    if (str.toLowerCase().startsWith('z')){
        translation +='pe'
    }
//si la palabra tiene 10 caracteres se le añade un simbolo a la mitad
    if (str.toLowerCase().length>=10){
        let partir = str.slice((str.length/2));
        translation = str.slice(str.length / 2) + " $ " + partir;
          
      }
// Si la palabra es un palindromo se devuelve la misma palabra alternando entre mayusculas
//y minusuclas
    const reverse = (str) => /*como si fuera funcion*/ str.split('').reverse().join('');
function minMay(str){
    const l = str.length;
    let translation = "";
    let capitalize = true;
    for(let i=0; i<l; i++){
        const char = str.chartat(i);
        translation += capitalize ? char.toUpperCase() : chat.toLowerCase(); 
    }
}

    if(str = reverse(str)){
        return minMay(str);
    }

    return translation
}
console.log(platzom("programar"));
console.log(platzom("Zorro"));
console.log(platzom("abcdefghij"))





}