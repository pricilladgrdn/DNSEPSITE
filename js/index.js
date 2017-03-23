$(document).ready(function() {
    $('#titre a').click(function(event){
    	var menu = $('.cadre-menu');
        if (menu.css('visibility') === 'hidden')
            menu.css('visibility', 'visible');
        else
            menu.css('visibility', 'hidden');
    });
});