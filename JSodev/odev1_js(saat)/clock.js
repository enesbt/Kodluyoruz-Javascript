
let my_name= prompt("Whats your name?");

document.getElementById("myName").innerText=my_name;


let date = new Date();

let day=date.getDay();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();

setInterval(function(){
  
    if(seconds<10){
        date= `${hours}:${minutes}:0${seconds++} ${day}`
        document.querySelector("#myClock").innerText=date;
    }
    else{
        date= `${hours}:${minutes}:${seconds++} ${day}`
        document.querySelector("#myClock").innerText=date;
    }
    
      
   
    if(day==1){
        day="Pazartesi";
    }
    if(day==2){
        day="Salı";
    }
    if(day==3){
        day="Çarşamba";
    }
    if(day==4){
        day="Perşembe";
    }
    if(day==5){
        day="Cuma";
    }
    if(day==6){
        day="Cumartesi";

    }
    if(day==7){
        day="Pazar";
    }

    if(seconds==60){
        seconds=0;
        minutes++;
    }
    if(minutes==60){
        minutes=0;
        hours++;
    }
    if(hours>23){
        hours=0;
        minutes=0;
    }
    

},1000);








