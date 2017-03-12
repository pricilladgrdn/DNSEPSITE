$(function () {
    var frameNumber = 0, // start video at frame 0
    // number of pixels to scroll for 1 second of video
    playbackConst = 200, 
    // get page height
    setHeight = document.getElementById("set-height"),
    //number of video loops
    loops = 10,
    // select video element         
    vid = $('#v0')[0];

    // pause video
    vid.pause();

    // dynamically set the page height according to video length and number of loops
    vid.addEventListener('loadedmetadata', function() {
        setHeight.style.height = Math.floor(vid.duration) * playbackConst * loops + "px";
    }); 

    // called in loop
    function scrollPlay(){  
        //set video time
        var frameNumber  = (window.pageYOffset/playbackConst) % vid.duration;
        vid.currentTime  = frameNumber;
        window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
});

