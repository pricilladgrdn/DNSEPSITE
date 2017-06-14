$(document).ready(function() {
	hided = false;

	$(document).on('mouseover mouseout', '.image', function(){
    	if (event.type == 'mouseover') {
	    	museums = $('.header span');
	        if(museums.length >= $(this).index() && !hided)
				museums.eq($(this).index()).show();
		} else {
	    	museums = $('.header span');
	       	if(museums.length >= $(this).index())
				museums.eq($(this).index()).hide();
		}
	});

	$(".upload").click(function(){
		$('form').show();
		$('.dropdown').hide();
		hided = true;
	});

	$("form span").click(function(){
		$('form').hide();
        $("#output").text("");
		$('.dropdown').show();
		hided = false;
	});

	$('form').submit(function(e){
        e.preventDefault();
        $("#output").text("");
        var text = $("#text").val();
        var filename = $("#file").val();

        if(text && filename){
	        var $form = $(this);
	        var file_data = $('#file').prop('files')[0];   
		    var form_data = new FormData();
		    form_data.append('text', $("#text").val());
		    form_data.append('file', file_data);

	        $.ajax({
	             data: form_data,
	             dataType: 'text',
	             cache: false,
	             contentType: false,
	             processData: false,
	             type: $form.attr("method"),
	             url: $form.attr("action"),
	             success: function(data){
	        		$("#output").text(data);
	                $(".images").load("../rooms/img-list.html");
	                $(".header").load("../rooms/museum-list.html");
	                //$(".header").load(location.href + " .header > *");
	                //$(".images").load(location.href + " .images > *");
	             }
	        });
	    } else {
        	$("#output").text("les champs ne sont pas tous remplis");
	    }
    });
});
