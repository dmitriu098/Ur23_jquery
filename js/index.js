$(document).ready(function() {

    $('#red').bind('click', function(){
        $('img').attr({src: 'images/red.jpg', alt: 'red'});
    });

    $('#blue').bind('click', function(){
        $('img').attr({src: 'images/blue.jpg', alt: 'blue'});
    });

    $('#green').bind('click', function(){
        $('img').attr({src: 'images/green.jpg', alt: 'green'});
    });

    $('#yellow').bind('click', function(){
        $('img').attr({src: 'images/yellow.jpg', alt: 'yellow'});
    });

    $('#black').bind('click', function(){
        $('img').attr({src: 'images/black.jpg', alt: 'black'});
    });

    $('#white').bind('click', function(){
        $('img').attr({src: 'images/white.jpg', alt: 'white'});
    });

});


