const _maxSeconds = 5;
let time = 0;
let timer;
let isPaused = false;

function startTimer() {
    if (time === _maxSeconds) {
        time = 0;
        isPaused = false;
    }

    if (time > 0 && !isPaused) {
        clearInterval(timer);
        isPaused = true;
        return;
    }

    timer = setInterval(getTime, 1000);

    setTimeout(() => {
        clearInterval(timer);
    }, 1000 * _maxSeconds)

    isPaused = false;
}

function getTime() {
    time += 1;
    var timeStr = '';

    if (time < 10) {
        timeStr = '0' + time;
    } else {
        timeStr = time;
    }
    const currentTime = document.getElementById("timer").innerHTML; 

    if (_maxSeconds <= currentTime && time >= _maxSeconds) {
        return;
    }

    document.getElementById("timer").innerHTML = timeStr;
}