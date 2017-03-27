
$(document).ready(function() {
	function randomize(min, max) {
		return Math.floor((Math.random() * (max - min + 1)) + min);
	}

	console.log($(window).width());
	console.log($(window).height());


	$('ul.images li').each(function() {
		var w = Math.floor($(this).width() / $(window).width() * 100);
		var h = Math.floor($(this).height() / $(window).height() * 100);
		$(this).css('top', randomize(10, 90-h) + '%')
		   .css('left', randomize(10, 90-w) + '%')
		   .css('z-index', randomize(50, 100))
		   .css('visibility', 'visible');
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