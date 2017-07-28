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
