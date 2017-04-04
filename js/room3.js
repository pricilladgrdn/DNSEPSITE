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