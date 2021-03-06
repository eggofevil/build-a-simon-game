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

btn1.addEventListener('click', function() {
    audio1.play().catch(function(){
        audio1.src = 'sound/wav-sounds/simonSound1.wav';
        audio1.play();
    });
    buildUserMelody(this);
});
btn2.addEventListener('click', function() {
    audio2.play().catch(function(){
        audio2.src = 'sound/wav-sounds/simonSound2.wav';
        audio2.play();
    }); 
});
btn3.addEventListener('click', function() {
    audio3.play().catch(function(){
        audio3.src = 'sound/wav-sounds/simonSound3.wav';
        audio3.play();
    }); 
});
btn4.addEventListener('click', function() {
    audio4.play().catch(function(){
        audio4.src = 'sound/wav-sounds/simonSound4.wav';
        audio4.play();
    }); 
});

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
        counter++;
        setTimeout(playMelody, 500);
    } else {
        counter = 0;
    }
}