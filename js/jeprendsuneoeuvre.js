currentLine = 0;

$(document).ready(function() {
	img = $('.images img').first();
	img.css({ visibility: 'hidden', display: 'block' });
	setRandomCoord(img);
	img.css('visibility', 'visible');

	$('.images img').slice(1, 5).each(function() {
		$(this).css({ visibility: 'hidden', display: 'block' });
		setRandomCoord($(this));
		while(imgIsOverlapping($(this)))
			setRandomCoord($(this));
		$(this).css('visibility', 'visible');
	});

	$('.images img').each(function() {
		$(this).mouseout(function() {
			//if($(this).css('opacity') >= 0)
  				nextLine();
		});
	});
});

function nextLine() {
	currentLine++;
	max = $(".texte div").length;
	if(currentLine >= max)
		currentLine = 0;
	$(".texte div").eq(currentLine).css("opacity", "1");
	doSetTimeOut(currentLine);
}

function doSetTimeOut(i) {
	setTimeout(function() { $(".texte div").eq(i).css("opacity", "0"); }, 5000);
}

function setRandomCoord(img) {
	img.css('left', getRandomLeft(img));
	img.css('top', getRandomTop(img));
}

function imgIsOverlapping(img) {
	cnt = 0;
	$('.images img:visible').each(function() {
		if(checkOverlap(img, $(this)))
			cnt++;

		if(cnt > 1)
			return false;
	});

	return (cnt > 1);
}

function checkOverlap(elem, elem2) {
	result = Math.abs(elem.position().left - elem2.position().left) < elem.width() &&
			Math.abs(elem.position().top - elem2.position().top) < elem.height();
	return result;
}

function randomize(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomTop(elem) {
	dh = $(document).height();
	return randomize(0, dh - elem.height());
}

function getRandomLeft(elem) {
	dw = $(document).width();
	return randomize(0, dw - elem.width());
}