$(document).ready(function() {
    $('#menulink').click(function(event) {
    	event.preventDefault();
        console.log("LA");
    	var menu = $('.menu');
        var feuille = $('.feuille');
        if (menu.css('display') === 'none')
        {
            menu.show();
        	feuille.hide();
        }
        else
        {
            menu.hide();
        }
    });

    $('#feuillelink').click(function(event) {
    	event.preventDefault();
    	var feuille = $('.feuille');
        var menu = $('.menu');

        if (feuille.css('display') === 'none')
        {
            feuille.show();
            menu.hide();
        }
        else
        {
            feuille.hide();
        }
    });

	$(document).mousedown(function(event) {
	    var menu = $('.menu');
		var menulink = $('#menulink');
	    if (!menu.is(event.target) // if the target of the click isn't the container...
	        && menu.has(event.target).length === 0 // ... nor a descendant of the container
	        && !menulink.is(event.target)
	        && menulink.has(event.target).length === 0) 
	    {
	        menu.hide();
	    }

	    var feuille = $('.feuille');
		var feuillelink = $('#feuillelink');
	    if (!feuille.is(event.target) // if the target of the click isn't the container...
	        && feuille.has(event.target).length === 0 // ... nor a descendant of the container
	        && !feuillelink.is(event.target)
	        && feuillelink.has(event.target).length === 0) 
	    {
	        feuille.hide();
	    }
	});
});