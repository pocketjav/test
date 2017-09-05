const nombre = "Javier";
const dias = [ //Arreglo []
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]
function promedioCorrer(){
const min =5
const max=15

return Math.round(Math.random()*(max-min) + min);

}
let totalkm = 0;
const length =dias.length; //refactorizar codigo
for(let i=0; i<length; i++){ 
 const kms =promedioCorrer();
 totalkm = totalkm + kms //totalkm += kms
 console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms}`);
}
const promediokms = totalkm/length;
console.log(`en promedio ${nombre} corrio ${promediokms} kms`);