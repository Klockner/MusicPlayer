var isPlaying = false;
var musicIdx = 0;
var musicList = [
  {
    id: 1,
    title: 'Ancient Heavy Tech Donjon',
    artist: 'Komiku',
    path: 'musics/Komiku_-_01_-_Ancient_Heavy_Tech_Donjon.mp3'
  },
  {
    id: 2,
    title: 'Crown',
    artist: 'Kellee Maize',
    path: 'musics/Kellee_Maize_-_Crown.mp3'
  },
  {
    id: 3,
    title: 'Mistaken',
    artist: 'Color Out',
    path: 'musics/Color_Out_-_Mistaken.mp3'
  },
  {
    id: 4,
    title: 'To the Roofs',
    artist: 'Colaars',
    path: 'musics/Colaars_-_To_The_Roofs.mp3'
  },
];

$(document).ready(function() {
  $('.player-body').css('background-color', getRandomColor());
  createAudioPlayer(musicList[musicIdx].path);
});

var btnPlay = document.querySelector('.btn-play');
btnPlay.addEventListener('click', function() {
  togglePlay();
});

var btnSound = document.querySelector('.btn-sound');
btnSound.addEventListener('click', function() {
  btnSound.classList.toggle('is-muted');
  toggleMute();
});

var btnShuffle = document.querySelector('.btn-shuffle');
btnShuffle.addEventListener('click', function() {
  btnShuffle.classList.toggle('is-shuffled');
});

var btnLoop = document.querySelector('.btn-loop');
btnLoop.addEventListener('click', function() {
  btnLoop.classList.toggle('is-looped');
});

var btnHeart = document.querySelector('.btn-heart');
btnHeart.addEventListener('click', function() {
  btnHeart.classList.toggle('is-hearted');
});

var btnForward = document.querySelector('.btn-forward');
btnForward.addEventListener('click', function() {
  changeMusic('next');
});

var btnBackward = document.querySelector('.btn-backward');
btnBackward.addEventListener('click', function() {
  changeMusic('previous');
});

function getRandomColor() {
  var colors = ['#7d4627', '#5BB12F', '#3fb0ac', '#e62739', '#6ed3cf',
    '#B1EB00', '#5e0231', '#6534ff', '#982395', '#FF85CB'];

    var color_idx = Math.floor(Math.random() * colors.length);
    return colors[color_idx];
};

function createAudioPlayer(url) {
  var audio = document.createElement('audio');
  audio.style.display = 'none';
  audio.src = url;
  audio.setAttribute('id', 'audio-player');
  document.body.appendChild(audio);
};

function togglePlay() {
  if (isPlaying) {
    audioPause();
  } else {
    audioPlay();
  }
};

function audioPlay() {
  var audio = document.getElementById('audio-player');
  setMusicInfos();
  audio.play();
  isPlaying = true;
  btnPlay.classList.add('is-paused');

  audio.onended = function() {
    changeMusic('next');
  };
}

function audioPause() {
  var audio = document.getElementById('audio-player');
  audio.pause();
  isPlaying = false;
  btnPlay.classList.remove('is-paused');
}

function setMusicInfos() {
  var musicTitle = document.querySelector('.player-title');
  var musicArtist = document.querySelector('.player-artist');
  musicTitle.innerText = musicList[musicIdx].title;
  musicArtist.innerText = musicList[musicIdx].artist;
}

function changeMusic(option) {
  if (document.querySelector('.is-shuffled')) {
    musicIdx = Math.floor(Math.random() * musicList.length)
  } else if (option === 'next') {
    musicIdx++;
  } else {
    musicIdx--;
  }

  restartListIfEnded();

  var audio = document.getElementById('audio-player');
  audio.src = musicList[musicIdx].path
  audio.load();
  audioPlay();
}

function restartListIfEnded() {
  if (musicIdx >= musicList.length) {
    musicIdx = 0;
  } else if (musicIdx < 0) {
    musicIdx = (musicList.length - 1);
  }
}

function toggleMute() {
  if (document.querySelector('.is-muted')) {
    document.getElementById('audio-player').muted = true;
  } else {
    document.getElementById('audio-player').muted = false;
  }
};
