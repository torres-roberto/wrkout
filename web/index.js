const _maxSeconds = 60;
let time = 0;


function startTimer() {
    if (time == _maxSeconds) {
        time = 0;
    }

    if (time > 0) {
        return;
    }

    const timer = setInterval(getTime, 1000);

    setTimeout(() => {
        clearInterval(timer);
    }, 1000 * _maxSeconds)
}

function getTime() {
    time += 1;
    
    document.getElementById("timer").innerHTML = time;
}