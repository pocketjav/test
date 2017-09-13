let numstars = 7;
let width = 500;
let height = 500;

let stars = (function(star){
let stars = [];
for(let i=0; i<numstars; i++){
let h = i * 360 / numstars;
   stars[i] = star.clone().attr({ 
   fillColor: 'hsl(' +h +',100%, 50%)',
   x: width/2,
   y: height/2
});
}
return stars;
})(new Star(width/2, height/2,1,5));

stage.length(1);

let i=0;
stage.on(0, function(){
let star = stars[i];

star.attr({
    scalex: 1,
    sclaey: 1,
    opacity: 1
}).addTo(stage).animate(2*numstars,{
        scalex: width * 3,
        scaley: height * 3,
        opacity : 0
    },{isTimeLineBound: false});

    i = (i + 1) % numstars;
    stage.removeChild(star[i]);
})
