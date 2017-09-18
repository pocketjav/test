var rectPath = new Rect(10,10,150,150)
.attr({
    fillColor: 'blue',
    strokeColor: 'green',
    strokeWidth: 5,
    x: 150,
    y: 150,
});


stage.addChild(rectPath);

rectPath.animate('2s',{
    rotation: Math.PI*2
},{
    easing: 'elasticInOut'
})