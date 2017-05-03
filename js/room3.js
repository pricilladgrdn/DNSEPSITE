$(document).ready(function() {
	$(".images li").each(function() {
		$(this).mouseenter(function() {
			$(this).children("audio").get(0).play();
		});

		$(this).mouseleave(function() {
			$(this).children("audio").get(0).pause();
			$(this).children("audio").get(0).currentTime = 0;
		});
	});
});

$(document).ready(function() {

	var px2mm = function(px){   
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
    };

	$(".print").click(function(){
		beforePrint(window.print);
	});
});

/*$(document).ready(function() {

	var px2mm = function(px){   
    	return Math.floor(px/$('#my_mm').height()); //JQuery returns sizes in PX
 	};

    var beforePrint = function() {
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
    };

    var afterPrint = function() {
        console.log('Functionality to run after printing');
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

});*/

$(document).ready(function() {
	function randomize(min, max) {
		return Math.floor((Math.random() * (max - min + 1)) + min);
	}

	$('ul.images li').each(function() {
		$(this).css('bottom', '0%')
			.css('left', randomize(0, 297*5) + 'mm') // CHANGE SECOND NUMBER FOR SCREEN SIZE
			.css('z-index', randomize(50, 100))
			.css('visibility', 'visible')
			.mouseup(function() {
				$(this).css('top', '');
			});
	});

	if ('ontouchstart' in window) {
		// target elements with the "draggable" class
		interact('.draggable')
		.draggable({
			// enable inertial throwing
			inertia: false,
			// keep the element within the area of it's parent
			restrict: {
				restriction: "parent",
				endOnly: true,
				elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
			},
			// enable autoScroll
			autoScroll: true,

			// call this function on every dragmove event
			onmove: dragMoveListener,
			// call this function on every dragend event
			onend: function (event) {}
		});

		function dragMoveListener (event) {
			var target = event.target,
			    // keep the dragged position in the data-x/data-y attributes
			    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
			    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

			// translate the element
			target.style.webkitTransform =
			target.style.transform =
				'translate(' + x + 'px, ' + y + 'px)';

			// update the posiion attributes
			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);
		}

		// this is used later in the resizing and gesture demos
		window.dragMoveListener = dragMoveListener;
	} else {

		$('ul.images li').mousedown(function() {
			$(this).css('z-index', 100).siblings().each(function() {
				style = window.getComputedStyle($(this)[0]);
				zindex = style.getPropertyValue('z-index');
				if(zindex > 0)
					$(this).css('z-index', zindex - 1);
			});
		}).draggable();
	}
});