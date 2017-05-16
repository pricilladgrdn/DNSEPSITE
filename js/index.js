window.onload = function () {
	var parallaxBox = document.getElementsByTagName( 'body' )[0];
	var left = document.getElementById ( 'titre' ).offsetLeft,
		top = document.getElementById ( 'titre' ).offsetTop;

	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;

		var x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;

		mouseParallax ( 'titre', left, top, x, y, 60 );
	}

	function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
		var obj = document.getElementById ( id );
		var parentObj = obj.parentNode,
		containerWidth = parseInt( parentObj.offsetWidth ),
		containerHeight = parseInt( parentObj.offsetHeight );
		obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
		obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
	}
}