$(document).ready(function() {

	function randomize(min, max) {
		return Math.floor((Math.random() * (max - min + 1)) + min);
	}

	$(".images li").each(function() {
		$(this).mouseenter(function() {
			$(this).children("audio").get(0).play();
		});

		$(this).mouseleave(function() {
			$(this).children("audio").get(0).pause();
			$(this).children("audio").get(0).currentTime = 0;
		});
	});

	/*var px2mm = function(px){   
    	return Math.floor(px/$('#my_mm').height()); //JQuery returns sizes in PX
 	};

    var beforePrint = function(callback) {
    	var cpt = 0;
        $('li').each(function() {
        	bottom = px2mm($(this).css('bottom').replace('px',''));
        	left = px2mm($(this).css('left').replace('px',''));
        	var quotient = Math.floor(left/297);
        	var remainder = left % 297;
        	cpt++;
        	console.log("HERE " + cpt + " :" + ((quotient * -210) + 'mm'))
        	$(this).css('bottom', (quotient * -210) + 'mm')
        	$(this).css('left', remainder + 'mm')
        })

        callback();
    };*/

	$("ul.images li span").click(function(e){
		$(e.target).parent().hide();
	});

	$('ul.images li').each(function() {
		$(this).css('bottom', '0%')
			.css('left', randomize(0, 297) + 'mm') // CHANGE SECOND NUMBER FOR SCREEN SIZE
			.css('z-index', randomize(50, 99))
			.css('visibility', 'visible')
			.mouseup(function() {
				$(this).css('top', '');
			});
	});

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
		}).draggable();
	}
});