$(document).ready(function() {
	//YOU CAN TOUCH THAT ≚ㅅ≚
	simultaneousImg = 4; // <-- number max of simultaneous hidden images at screen
	fullVisibleDuration = 2000; // <-- duration during which text has max opacity

	//AAAAAND DON'T EVEN TRY TO LOOK UNDER
	currentLine = 0;
	textTransitionDuration = parseFloat($(".texte div").css("transition-duration").replace(/[^-\d\.]/g, '')) * 1000;
	imgTransitionDuration = parseFloat($(".images img").css("transition-duration").replace(/[^-\d\.]/g, '')) * 1000;
	maxLine = $(".images img").length;

	images = [];
	$('.images img').each(function(){ images.push(this.id); });

	placeOnPage(images.shift());

	for(var i = 1; i < simultaneousImg; i++) {
		placeOnPage(images.shift());
	}

	$('.images img').each(function() {
		$(this).mouseout(function() {
			if($(this).css('opacity') == 1) {
  				nextText();
  				nextImg($(this));
  			}
		});
	});
});

function placeOnPage(id) {
	elem = $(".images #" + id);
	elem.css({ visibility: 'hidden', display: 'block' });
	setRandomCoord(elem);
	while(imgIsOverlapping(elem))
		setRandomCoord(elem);
	elem.css('visibility', 'visible');
}

function setRandomCoord(img) {
	img.css('left', getRandomLeft(img));
	img.css('top', getRandomTop(img));
}

function getRandomTop(elem) {
	dh = $(document).height();
	return randomize(0, dh - elem.height());
}

function getRandomLeft(elem) {
	dw = $(document).width();
	return randomize(0, dw - elem.width());
}

function randomize(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
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

function nextText() {
	if($(".texte div:last").css('opacity') == 0)
	{
		currentLine++;
		if(currentLine > maxLine) {
			currentLine = 1;
		}
		$(".texte .txt-" + currentLine).each(function() {
			$(this).css("opacity", "1");
			doSetTimeOut(".texte .txt-" + currentLine, "opacity", "0", textTransitionDuration + fullVisibleDuration);
		});
	}
}

function doSetTimeOut(selector, property, value, duration) {
	setTimeout(function() { $(selector).css(property, value); }, duration);
}

function nextImg(elem) {
	elem.css('opacity', '0');
	doSetTimeOut("#" + elem.attr('id'), "display", "none", imgTransitionDuration);
	images.push(elem.attr('id'));
	placeOnPage(images.shift());
}

