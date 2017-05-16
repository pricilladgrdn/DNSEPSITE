$(document).ready(function() {
	//localStorage.clear();
	var waitForRefresh = false;
	var maxImage = 30;
	var lastStep = localStorage.getItem("step");

	if(lastStep == null)
	{
		lastStep = "1-1";
		localStorage.setItem("step", lastStep);
	}

	var image = parseInt(lastStep.split("-")[0]);
	var glitch = parseInt(lastStep.split("-")[1]);

	if(glitch >= $("#image" +  image + " img").length)
	{
		localStorage.setItem("step", image+1 + "-" + 1)
		waitForRefresh = true;
	}

	for(i = 1 ; i < image ; i++)
	{
		$("#image" +  i + " img:last-child").show();
		console.log("show last child of image" + i)
	}

	$("#image" + image + " img:nth-child(" + glitch + ")").show();
	console.log("show glitch " + glitch + " of image" + image);

	for(i = image + 1 ; i <= maxImage ; i++)
	{
		$("#image" +  i + " img:first-child").show().css("visibility", "hidden");
		console.log("visibility hidden for first child of image" + i);
	}

	$(window).keypress(function (e) {
		e.preventDefault();
		incrementGlitch();
	});

	$(window).click(function (e) {
		e.preventDefault();
		incrementGlitch();
	});

	function incrementGlitch()
	{
		if(glitch < $("#image" +  image + " img").length && !waitForRefresh)
		{
			glitch++;
			localStorage.setItem("step", image + "-" + glitch)
			$("#image" + image + " img:nth-child(" + (glitch-1) + ")").hide();
			$("#image" + image + " img:nth-child(" + glitch + ")").show();
		}
		else 
		{
			localStorage.setItem("step", image+1 + "-" + 1)
			waitForRefresh = true;
		}
	}
});




