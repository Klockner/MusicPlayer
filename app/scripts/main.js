$(document).ready(function() {
  $('.player-body').css('background-color', getRandomColor());
});

var btnPlay = document.querySelector('.btn-play');
btnPlay.addEventListener('click', function() {
  btnPlay.classList.toggle('is-paused');
});

var btnSound = document.querySelector('.btn-sound');
btnSound.addEventListener('click', function() {
  btnSound.classList.toggle('is-muted');
});

var btnShuffle = document.querySelector('.btn-shuffle');
btnShuffle.addEventListener('click', function() {
  btnShuffle.classList.toggle('is-shuffled');
});

var btnLoop = document.querySelector('.btn-loop');
btnLoop.addEventListener('click', function() {
  btnLoop.classList.toggle('is-looped');
});

function getRandomColor() {
  var colors = ['#7d4627', '#173e43', '#3fb0ac', '#9068be', '#e62739',
    '#6ed3cf', '#22264b', '#dbc3d0', '#e05038', '#300032', '#cdd422'];

    var color_idx = Math.floor(Math.random() * colors.length);
    return colors[color_idx];
};
