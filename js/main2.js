var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

var audio1 = new Audio('sound/simonSound1.mp3');
var audio2 = new Audio('sound/simonSound2.mp3');
var audio3 = new Audio('sound/simonSound3.mp3');
var audio4 = new Audio('sound/simonSound4.mp3');

/*var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var audio4 = document.getElementById('audio4');
*/

btn1.addEventListener('click', function() {
    audio1.play();
});
btn2.addEventListener('click', function() {
    audio2.play();
});
btn3.addEventListener('click', function() {
    audio3.play();
});
btn4.addEventListener('click', function() {
    audio4.play();
});