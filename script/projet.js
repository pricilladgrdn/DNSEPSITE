$("#loading").focus();

var tmp = 1;
function next(i) {
	tmp++;
	if(tmp == i+1)
		tmp = 1;
	$('#img' + tmp).css('z-index', 1).siblings().css('z-index', -1);
}

// une fois la page chargée, retire le gif de loading et affiche les images
window.onload = function() {
	setTimeout(function() {
		$('#loading').hide();
		$('#images').css('visibility', 'visible');
	}, 1);
}
