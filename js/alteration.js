/*global glitch, devicePixelRatio*/
var imagePath = 'oeuvre1.png';
var imgContainerEl = $(".images");

var params = {
	amount:     13,
	iterations: 7,
	quality:    99,
	seed:       4
};

loadImage( imagePath, function ( img ) {
	glitch( params )
		.fromImage( img )
		.toImage()
		.then( function( glitchedImage ) {
			console.log("SUCCESS");
			console.log(glitchedImage);
			document.body.appendChild( glitchedImage );
		});
});

function loadImage ( src, callback ) {
	var imageEl = new Image();
	imageEl.onload = function () {
		callback( imageEl );
	};
	imageEl.src = src;
}
