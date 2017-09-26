var rectPath = new Rect(10,10,150,150)

.addTo(stage)
.attr('fillColor', 'blue')  
.animate('400ms', {
    x: 400,
    rotation: Math.PI*2
    
  });
  var rectPath= new Rect(400,170,150,150)
  .addTo(stage)
  .attr('fillColor', 'red')  
  .animate('400ms', {
      x: 10,
      rotation: Math.PI*2
  });
  
  var rectpath = new Rect(10,300,150,150)
  .addTo(stage)
  .attr('fillColor', 'green')  
  
  .animate(new KeyframeAnimation(
      '400ms',{
          from:{x:10,y:300},
          to:{x:400,y:10},
          
      }
  )
       
    );
    
    /*stage.addChild(rectPath);
    +
    +rectPath.animate('2s',{
    +    rotation: Math.PI*2
    +},{
    +    easing: 'elasticInOut'
    +}) */