const start= document.getElementById("start");
const stop= document.getElementById("stop");
const reset= document.getElementById("reset");

const timer = document.getElementById("timer");

let minutes = 25;
let seconds = 0;
let timerId;

console.log(timer,"timer");
start.addEventListener('click' , ()=>{
    timerId=setInterval(()=>{
        
        if(seconds === 0){
            seconds = 59;
            if(minutes !== 0 ){
                minutes=minutes-1;
            }
            
        }
        else{
            seconds=seconds-1;
        }




        
        console.log(seconds);
        console.log(minutes);
        timer.textContent = `${minutes}:${seconds}`;
        if(seconds<10 ){
            timer.textContent = `${minutes}:0${seconds}`;
        }

        if(seconds===0 && minutes===0){
            alert("break time!");
            minutes=5;
            seconds=0
            setInterval();
        }

    },1000)
});

stop.addEventListener('click' , ()=>{
    clearInterval(timerId);
})
reset.addEventListener('click' , ()=>{
    minutes=25;
    seconds=0;
    timer.innerHTML=`${minutes}:0${seconds}`;
})