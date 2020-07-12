var milliSecond = 0, seconds = 0 , minutes = 0;
var timer;
var stopwatch = document.querySelector('.numbers');

function start(){
    if(!timer){
     timer = setInterval(run,10);   
    }
}
function run(){
    stopwatch.textContent= getTimer();
    milliSecond++;
    if(milliSecond==100){
        milliSecond=0;
        seconds++;
    }
    if(seconds==60){
        seconds=0;
        minutes++;
    }
}
function pause(){
    stopTimer();
} 
function stop(){
    stopTimer();   
    milliSecond=0;
    minutes=0;
    seconds=0;
    stopwatch.textContent=getTimer();
}
function stopTimer(){
    clearInterval(timer);
    timer = false;
}
function getTimer(){
    return (minutes<10 ? "0" + minutes : minutes) +  ":" + (seconds<10 ? "0" + seconds : seconds) + ":" +(milliSecond < 10 ? "0" + milliSecond:milliSecond);
}
function restart(){
    stop();
    start();
}