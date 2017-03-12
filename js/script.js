$(function () {
    var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 200, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    //vid = document.getElementById('v0'); 
    vid = $('#v0')[0]; // jquery option

   vid.pause();

    // dynamically set the page height according to video length
    vid.addEventListener('loadedmetadata', function() {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });

    function scrollPlay(){  
      var frameNumber  = window.pageYOffset/playbackConst;
      vid.currentTime  = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
});

