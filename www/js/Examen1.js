let maxNum =20;
let minNum =1;

let objeto1={
    x: Math.round((Math.random() * (maxNum - minNum) + minNum)),
y : Math.round((Math.random() * (maxNum - minNum) + minNum))
}
let objeto2={
x2: Math.round(Math.random() * (maxNum - minNum) + minNum),
y2: Math.round(Math.random() * (maxNum - minNum) + minNum)
}


console.log("El punto X1 es: "+objeto1.x);
console.log("El punto Y1 es: "+objeto1.y);
console.log("El punto X2 es: "+objeto2.x2);
console.log("El punto Y2 es: "+objeto2.y2);

let distanciaP = Math.sqrt(Math.pow(objeto2.x2-objeto1.x,2)+Math.pow(objeto2.y2-objeto1.y,2))

console.log("La distancia entre objetos: "+distanciaP);

