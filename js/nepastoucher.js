$(document).ready(function() {
	$('.images img').each(function(index) {
		museums = $('.header span')
		$(this).hover(function() {
			if(museums.length >= index)
				museums.eq(index).show();
		}, function() {
			if(museums.length >= index)
				museums.eq(index).hide();
		});
	});
});