$(document).ready(function() {
	if( ! $('#myCanvas').tagcanvas({
		textColour : '#ffffff',
		outlineThickness : 0,
		shape: 'sphere',
		maxSpeed : 0.06,
		depth : 0.5, 
		zoomStep : 0,
		wheelZoom : false,
		zoom : 1.0,
		clickToFront : 400,
		noSelect : true,
		//noMouse  : true,
		centreImage : '../media/noyau.jpg'
	}, 'tags')) {
		// TagCanvas failed to load
		$('#myCanvasContainer').hide();
	}
	// your other jQuery stuff here...

	(function() {
		var canvas = document.getElementById('myCanvas'),
		    context = canvas.getContext('2d');

		// resize the canvas to fill browser window dynamically
		window.addEventListener('resize', resizeCanvas, false);

		function resizeCanvas() {
		    canvas.width = window.innerWidth;
		    canvas.height = window.innerHeight;
		}
		resizeCanvas();
	})();
});

