var starttime;
var currenttime = 0;
var countdown = 60;
var check = true;
var hidden = true;
var timer;

var schedule;

function settimer(){
    document.getElementById("countdowntext").style.display = 'block';
    document.body.style.background = "#ff0000";
    starttime = Date.now();
    timer = setInterval(updatetime, 13);
}

function updatetime(){
    if(countdown < 10) document.getElementById("countdown").style.setProperty("left", )
    if(countdown > 0){
        currenttime = Date.now();
        countdown = parseFloat(Math.round(60000-(currenttime-starttime))/1000).toFixed(2);
        document.getElementById("countdown").innerHTML = countdown;
        console.log(countdown);
    }
    else {
        timer = null;
        countdown = 0;
        document.getElementById("countdown").innerHTML = "0.00";
        document.getElementById("countdowntext").innerHTML = "you are late";
    }
}

function hidetimer(){
    if(hidden) {
        document.getElementById("countdown-content").style.display = 'none';
        document.getElementById("countdowntext").style.display = 'none';
    }
    else {
        document.getElementById("countdown-content").style.display = 'block';
        document.getElementById("countdowntext").style.display = 'block';
    }
    hidden = !hidden;
}

function parseschedule(res){
    schedule = res.split(/\r?\n/);
    console.log(schedule);
}

$.get({
    url: "http://kvfrans.com:8044/schedule.txt",
    type: 'GET',
    success: function(res) {
        parseschedule(res);
    }
});

settimer();
