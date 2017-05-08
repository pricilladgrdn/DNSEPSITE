function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

// http://stackoverflow.com/questions/3276467/adjusting-div-width-and-height-after-rotated
jQuery.fn.rotate = function(degrees) {
	degrees += getRotationDegrees($(this));

    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-o-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});

    return $(this);
};

function randomize(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

$(document).ready(function() {
	// PRINT
	$(".print").click(function(){
		window.print();
	});

	// ROTATION
	var lastImage;
	$(document).keydown(function() {
	   	if(event.keyCode == 37) {  //prev key
			lastImage.rotate(-90);
	    } else if(event.keyCode == 39) {  //next key
	    	lastImage.rotate(90);
		}
	});

	$('ul.images li').each(function() {
		var w = Math.floor($(this).width() / $(window).width() * 100);
		var h = Math.floor($(this).height() / $(window).height() * 100);
		$(this).css('top', randomize(10, 90-h) + '%')
		   .css('left', randomize(10, 90-w) + '%')
		   .css('z-index', randomize(50, 99))
		   .css('visibility', 'visible');
	});

	//DRAGGABLE
	if ('ontouchstart' in window) {
		// target elements with the "draggable" class
		interact('.draggable')
		.draggable();
	} else {
		$('ul.images li').mousedown(function() {
			$(this).css('z-index', 99).siblings().each(function() {
				style = window.getComputedStyle($(this)[0]);
				zindex = style.getPropertyValue('z-index');
				if(zindex > 0)
					$(this).css('z-index', zindex - 1);
			});
			lastImage = $(this).find("img");
		}).draggable();
	}
});