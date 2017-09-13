let numstars = 7;
let width = 500;
let height = 500;

let stars = (function(star){
let stars = [];
for(let i=0; i<numstars; i++){
let h = i * 360 / numstars;
   stars[i] = star.clone().attr({ 
   fillColor: 'hsl(' +h +',100%, 50%)'
   x: width/2;
   y:height/2;
});
}
return stars;
})(new star(width/2, height/2,1,5));

stage.length(14);
