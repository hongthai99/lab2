function newYear() {
    var countDay = new Date('Jan 1, 2021 00:00:00').getTime();
    var now = new Date().getTime();

    var count = countDay - now;

    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;

    var days = Math.floor(count/(day));
    var hours = Math.floor((count%(day))/(hour));
    var minutes = Math.floor((count%(hour))/(minute));
    var seconds = Math.floor((count%(minute))/(second));

    document.getElementById('day').innerText=days;
    document.getElementById('hour').innerText=hours;
    document.getElementById('minute').innerText=minutes;
    document.getElementById('second').innerText=seconds;
 
    
}
setInterval(function(){
    newYear();
}, 1000);

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#min');
const sc = document.querySelector('#scond');

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`; 
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})
 

