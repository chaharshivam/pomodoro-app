const PLAY      = document.getElementById('btn-play');
const STOP      = document.getElementById('btn-stop');
const COUNTER   = document.getElementById('counter');
const AUDIO     = new Audio('assets/sounds/ding.wav');

let interval
    , currentDuration = 1500;

function startTimer(duration, COUNTER) {
    let timer = duration
        , minutes
        , seconds;
    
    interval = setInterval(function () {
        // Calculate minutes
        minutes = Math.floor(timer / 60);
        // Calculate seconds
        seconds = (timer % 60);

        // Pad the minutes with zero, if required
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        // Pad the seconds with zero, if required
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        // Set inner HTML of the COUNTER to current duration
        COUNTER.textContent = minutes + ":" + seconds;
        // Calculate current duration to keep record of its value when timer is paused
        currentDuration = minutes * 60 + seconds;
        
        if(currentDuration == 0) {
            AUDIO.play();
            clearInterval(interval);
            currentDuration = 10;
            return;
        }

        if (--timer < 0) {
            // make the timer equal to current duration
            timer = duration;
        }
    }, 1000);
}

PLAY.addEventListener('click', function() {
    startTimer(currentDuration, COUNTER);
});

STOP.addEventListener('click', function() {
    clearInterval(interval); 
    
});