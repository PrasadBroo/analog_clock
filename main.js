const hour = document.querySelector('.hr');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');



var hourAgle,minAngle ;
var secAngle;
var hmm = setInterval(changeTime,1000);




function changeTime(){
    secAngle+=6;
    second.style.transform=`rotate(${secAngle}deg)`;

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();


    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    hourAgle=hours*30;
    minAngle=minutes*6;
    secAngle=date.getSeconds()*6;

    
    minute.style.transform=`rotate(${minAngle}deg)`;
    hour.style.transform=`rotate(${hourAgle}deg)`;
}

