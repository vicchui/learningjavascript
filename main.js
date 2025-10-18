$(document).ready(function() {
    'use strict';
    console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    //TODO
    //var c = Shape.Circle(25, 25, 25);
    //c.fillColor = 'green';
    /*
    var c;
    for (var x = 25; x < 400; x+=50) {
        for (var y = 25; y < 400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }
    */
    var tool = new Tool();
    tool.onMouseDown = function(event){
        //var c = Shape.Circle(event.point.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 20);

        c.fillColor='green';
    }    
    paper.view.draw();
})
