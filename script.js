
//var time checking
var time = new Date().getHours(); 
var wakeupTime = 9; 
var noon = 12;
var lunchTime = 13; 
var night = 20;  

var partyTime = 19;
var napTime = lunchTime + 2;
var isPartyTime = false;



var updateClock = function (){
  
//var msg
var messageText;
var message = document.getElementById('timeEvent');

//img var
var lolcatImage = document.getElementById('lolcatImage');
var image = "http://archive.content.aah.net.au/files/images/cat-with-alarm-clock.jpg";


if (time == partyTime){
    messageText = "PARTEEEE TIME!!";
    image = "https://img.memesuper.com/ba26779d61cb2bd1d42d24b1c48d0a79_party-cat-meme-generator-imgflip-party-cat-meme_640-480.jpeg";

}else if (time == napTime){
    messageText = "Zzzzz NAP TIME...";
    image = "https://s-media-cache-ak0.pinimg.com/736x/20/12/4d/20124d42056f86a2281e569649de6d0d.jpg";

}else if (time == lunchTime){
    messageText = "YUMMYYYY TIME!!";
    image = "http://ct.weirdnutdaily.com/ol/wn/sw/i39/2/10/8/wnd_6818ee5a171d4e5ae34e79dada97295d.jpg";
  
}else if (time == wakeupTime){
    messageText = "RISE AND SHINE.";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
 
  
}else if (time == night && time < wakeupTime){
    messageText = "BEAUTY SLEEP TIME.";
    image = "https://s-media-cache-ak0.pinimg.com/564x/8d/b7/b4/8db7b495829602529e047682cf088742.jpg";
 
}else {
    messageText = "????????";
}

message.innerText = messageText;
lolcat.src = image;



//Clock nested function
var showCurrentTime = function(){
   
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};//close nested function


// calling clock function
showCurrentTime(); 
};
	
updateClock(); 


//increment clock
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);




// PartyTime button
var partyTimeButton = document.getElementById("partyTimeButton");
var partyEvent = function() {
  
    if (isPartyTime == false){ 
        isPartyTime = true; 
        time = partyTime;
       partyTimeButton.innerText = "PARTY TIME!";
       partyTimeButton.style.backgroundColor = "#6b6369";
       
  } else { 

        isPartyTime = false; 
        // set time back to the current time
        time = new Date().getHours(); 
        partyTimeButton.innerText = "PARTY OVER";
        partyTimeButton.style.backgroundColor = "#6b2239";
    }
 
};
partyTimeButton.addEventListener('click', partyEvent);

//User selection time
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
