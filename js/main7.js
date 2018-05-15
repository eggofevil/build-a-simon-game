
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var countScr = document.getElementById('countScr');
var strictScr = document.getElementById('strictScr');
var startBtn = document.getElementById('startBtn');
var resetBtn = document.getElementById('resetBtn');
var strictBtn = document.getElementById('strictBtn');

var audio1 = new Audio('sound/simonSound1.mp3');
var audio2 = new Audio('sound/simonSound2.mp3');
var audio3 = new Audio('sound/simonSound3.mp3');
var audio4 = new Audio('sound/simonSound4.mp3');

var melody = [];
var userMelody = [];
var btns = [btn1, btn2, btn3, btn4];
var counter = 0;

audio1.preload = 'auto';
audio2.preload = 'auto';
audio3.preload = 'auto';
audio4.preload = 'auto';

btn1.audio = audio1;
btn1.altSrc = 'sound/wav-sounds/simonSound1.wav';
btn2.audio = audio2;
btn2.altSrc = 'sound/wav-sounds/simonSound2.wav';
btn3.audio = audio3;
btn3.altSrc = 'sound/wav-sounds/simonSound3.wav';
btn4.audio = audio4;
btn4.altSrc = 'sound/wav-sounds/simonSound4.wav';

btns.forEach(function(btn) {
   btn.addEventListener('click', function() {
       btnFunc(this);
   });
});

function btnFunc(btn) {
    btn.audio.play();
    buildUserMelody(btn);
}
/*
function btnFunc(btn) {
    btn.classList.add('active');
    btn.audio.play().then(function() {
        btn.classList.remove('active');
    }).catch(function(){
        btn.audio.src = btn.altSrc;
        btn.audio.play().then(function() {
            btn.classList.remove('active');
        });
    });
    buildUserMelody(btn);
}
*/

startBtn.addEventListener('click', initialize);

function initialize() {
    melody = [];
    for(var i = 0; i < 20; i++) {
        melody.push(btns[Math.floor(Math.random() * 4)])
    }
    console.log(melody);
}
function buildUserMelody(btn) {
    userMelody.push(btn);
}




function playMelody() {
    if(counter < 19) {
        melody[counter].click();
        melody[counter].setAttribute('active', 'true');
        counter++;
        setTimeout(playMelody, 500);
    } else {
        counter = 0;
    }
}
function playUserMelody() {
    if(counter < userMelody.length) {
        userMelody[counter].click();
        userMelody[counter].setAttribute('active', 'true');
        counter++;
        setTimeout(playUserMelody, 400);
    } else {
        counter = 0;
    }
}