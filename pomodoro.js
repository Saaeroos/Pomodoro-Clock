
var x = 5;
bTime = document.getElementById('x');
bTime.innerHTML = x;

var Bplus = document.getElementById('Bplus');
Bplus.onclick = function(){
  x++;
  if( x > 60){x =60};
  bTime.innerHTML = x;
};

 var Bminus = document.getElementById('Bminus');
Bminus.onclick = function(){
  x--;
  if( x < 1){x = 1};
  bTime.innerHTML = x;
};

var y= 25;
sTime = document.getElementById('y');
sTime.innerHTML = y;


Splus = document.getElementById('Splus');
Splus.onclick = function(){
  y++;
  if( y > 60){y =60};
  sTime.innerHTML = y;
  timer.innerHTML = y+":00";
};

Sminus = document.getElementById('Sminus');
Sminus.onclick = function(){
  y--;
  if( y < 1){y = 1};
  sTime.innerHTML = y;
  timer.innerHTML = y+":00";
};

play = document.getElementById('play');
play.onclick = function(){

  var sessionLength = y;
  var breakLength = x;
  var timeLeft = sessionLength*60;
  var breakTimeLeft = breakLength *60;

  getFromatedTime = function(timeLeft){
    m = Math.floor(timeLeft/60);
    s = timeLeft-m*60;
    if(m<10){m="0"+m};
    if(s<10){s="0"+s};
    return m + ':'  + s;
  };

  reset = document.getElementById('reset');
  reset.onclick = function(){
    timeLeft = sessionLength*60;
    breakTimeLeft = breakLength *60;
  }
// timer = document.getElementById('timer');
  startPomodoro = function(){
    intervalCounter = setInterval(function(){

      if(timeLeft>0){
        document.getElementById('title').innerHTML = "Session";
        timeLeft--;
        timer.innerHTML = getFromatedTime(timeLeft);
      }
      else if (timeLeft == 0) {

          document.getElementById('title').innerHTML = "Break";
          breakTimeLeft--;
          timer.innerHTML = getFromatedTime(breakTimeLeft);
            if(breakTimeLeft == 0){
              timeLeft = sessionLength*60;
              breakTimeLeft = breakLength *60;
            }
      }
      var bellSound = new Audio('https://www.soundjay.com/misc/sounds/small-bell-ringing-02.mp3');
      if(timer.innerHTML =="00:00"){bellSound.play()};

  }, 1000)};
  startPomodoro();

};
