const hour = document.querySelector('.hr');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');



var hourAgle = 30;
var minAngle = 125;
var secAngle = 0;
var hmm = setInterval(changeTime,1000);


minute.style.transform=`rotate(${minAngle}deg)`;
hour.style.transform=`rotate(${hourAgle}deg)`;
second.style.transform=`rotate(${secAngle}deg)`;

function changeTime(){
    secAngle+=6;
    second.style.transform=`rotate(${secAngle}deg)`;

   
    if(secAngle==360){
        secAngle=0;
        minAngle+=6;
        hourAgle+=0.5;
        minute.style.transform=`rotate(${minAngle}deg)`;
        hour.style.transform=`rotate(${hourAgle}deg)`;

    }
    
}
