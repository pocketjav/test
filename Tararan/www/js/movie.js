var rectPath = new Rect(10,10,150,150)
.addTo(stage)
.attr('fillColor', 'blue')  
.animate('400ms', {
    x: 400,
    
    
  });
  var rectPath= new Rect(400,170,150,150)
  .addTo(stage)
  .attr('fillColor', 'red')  
  .animate('400ms', {
      x: 10,
  });
  
  var rectPath = new Rect(10,300,150,150)
  .addTo(stage)
  .attr('fillColor', 'green')  
  .animate(new KeyframeAnimation(
      '400ms',{
          from:{x:10,y:300},
          to:{x:400,y:10},
      }
  )
       
    );