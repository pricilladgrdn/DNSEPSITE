$(document).ready(function() {
    $('#menulink').click(function(event) {
    	event.preventDefault();
    	var menu = $('.menu');
        if (menu.css('display') === 'none')
        {
            menu.show();
        	$('.description').hide();
        }
        else
        {
            menu.hide();
        }
    });

    $('#descriptionlink').click(function(event) {
    	event.preventDefault();
    	var description = $('.description');
        if (description.css('display') === 'none')
        {
            description.show();
            $('.menu').hide();
        }
        else
        {
            description.hide();
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

	    var description = $('.description');
		var descriptionlink = $('#descriptionlink');
	    if (!description.is(event.target) // if the target of the click isn't the container...
	        && description.has(event.target).length === 0 // ... nor a descendant of the container
	        && !descriptionlink.is(event.target)
	        && descriptionlink.has(event.target).length === 0) 
	    {
	        description.hide();
	    }
	});
});