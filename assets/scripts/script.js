// // JS
const play = document.getElementById('btn-play');
const stop = document.getElementById('btn-stop');
const counter = document.getElementById('counter');
// // Event handler -> on input keydown -> store global -> input.value
// // display value in clock
// // event handled: on click -> start button

function startTimer(duration, counter) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = Math.floor(timer % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        counter.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

play.addEventListener('click', function() {
    var fiveMinutes = 60 * 5;
    startTimer(1500, counter);
});

stop.addEventListener('click', function() {
    
});