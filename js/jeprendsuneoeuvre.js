$(document).ready(function() {
	img = $('.images img').first();
	img.css({ visibility: 'hidden', display: 'block' });
	setRandomCoord(img);
	img.css('visibility', 'visible');

	console.log("La");

	$('images img').slice(1, 5).each(function() {
		$(this).css({ visibility: 'hidden', display: 'block' });
		while(imgIsOverlapping($(this)))
			setRandomCoord($(this));
		$(this).css('visibility', 'visible');
	});

	//toutes les images en display none
	//prendre 5 premières images
	//placer aleatoirement sans chevauchage
	//display block opacity 0
	//lorsque souris quitte hover image display none
	//prochaine image random display block


	//lorsque opacity = 1 ==> afficher text avec timer 10s
	//lorsque dernier texte --> attendre opacity 0 avant d'accepter nouveau texte
    

});

function setRandomCoord(img) {
	img.css('left', getRandomLeft(img));
	img.css('top', getRandomTop(img));
}

function imgIsOverlapping(img) {
	result = false;
	$('.images img:visible').each(function() {
		result = checkOverlap(img, $(this))
		if(result)
			return false;
	});
	return result;
}

function checkOverlap(elem, elem2) {
	return Math.abs(elem.position().left - elem2.position().left) < elem.width() &&
			Math.abs(elem.position().top - elem2.position().top) < elem.height();
}

function randomize(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomTop(elem) {
	wh = $(window).height();
	return randomize(0, wh - elem.height());
}

function getRandomLeft(elem) {
	ww = $(window).width();
	return randomize(0, ww - elem.width());
}