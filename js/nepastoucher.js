$(document).ready(function() {
	hided = false;

	$('.images img').each(function(index) {
		museums = $('.header span')
		$(this).hover(function() {
			if(museums.length >= index && !hided)
				museums.eq(index).show();
		}, function() {
			if(museums.length >= index && !hided)
				museums.eq(index).hide();
		});
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
	                console.log("success");
	                console.log(data);
	             }
	        });
	    } else {
        	$("#output").text("les champs ne sont pas tous remplis");
	    }
    });
});