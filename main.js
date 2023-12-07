let circle = document.querySelector("#circle");
let circleicon = document.querySelector("#circle i");
let timerIcon = document.querySelector("header i")
let seconds = 0;
let secText = document.querySelector("#sec-text");
let minText = document.querySelector("#min-text");
let hourText = document.querySelector("#hour-text"); 
let minutes = 0;
let hours = 0;
let intervalid;
let rotateintervalid;
let rotate = 0;
let resetcon = document.querySelector("#reset");
let stopicon = document.querySelector(".fa-stop")
circle.onclick = function (){
    //flipping icon from play to pause  and vice versa
    if(circleicon.classList.contains("fa-play")){
         //sliding in reset
         resetcon.style.transform = "translateX(0%)";   
         circle.style.borderRadius = "50% 0 0 50%";
         circleicon.classList.replace("fa-play", "fa-pause" )
         //starting timer
         intervalid = setInterval(function (){
            //returning seconds to 0 if ot gets to 59
            if(seconds > 59) {
                seconds = 0;
                minutes++;   
                if(minutes > 59){
                    minutes = 0;
                    hours++;
                }
            }
            //incrementing rotating value
            // if(rotate > 360){
            //     rotate = 0;
            // }
           
              // pushing time to html
              secText.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`
               minText.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`
               hourText.innerHTML = `${hours < 10 ? `0${hours}` : hours}`
            seconds++;
         
         }, 1000)
         //Adding rotation to the timer
        //  timerIcon.classList.add("rotate")

       rotateintervalid = setInterval(()=>{
            //rotating timer 
            rotate+=20;
            timerIcon.style.transform = `translate(-50%, 0) rotate(${rotate}deg)` 
        }, 100)
        
    }else{
        circleicon.classList.replace("fa-pause","fa-play")
        clearInterval(intervalid)
        clearInterval(rotateintervalid)
         //Removing rotation
        //  timerIcon.classList.remove("rotate")
    }
      
}

//stopping icon
circleicon.classList.replace("fa-pause", "fa-play")
clearInterval(intervalid)
clearInterval(rotateintervalid)