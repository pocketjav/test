let vidaGoku = 100;
let vidaSuperman =100;

const Min_Power =5;
const Max_Power =12;

let round =0;

const gokuSigueVivo = () => vidaGoku > 0

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;

const ambosMuertos = () => vidaGoku===0 && vidaSuperman ===0;

const calcularGolpe = () => Math.round(Math.random() * (Max_Power - Min_Power) + Min_Power);

while (ambosSiguenVivos()){
  round++
  console.log(`Round ${round}`);
}

const golpeGoku = calcularGolpe();
const golpeSuperman = calcularGolpe();
if(golpeGoku > golpeSuperman){
    console.log(`goku ataca a superman con un golpe de ${golpeGoku}`)
    vidaSuperman -= golpeGoku
    console.log(`Superman queda en ${vidaSuperman} de vida`)
}
else
    {
        console.log(`superman ataca a goku con un golpe de ${golpeSuperman}`)
        vidaGoku -= golpeSuperman
        console.log(`Goku queda en ${vidaGoku} de vida`);
    }

    if(gokuSigueVivo){
        console.log("Goku Gano la pelea")
    }
else{
    console.log("Superman Gano la pelea");
}

