const song = document.getElementById('song');
const progressBar = document.getElementById('seeker-bar');
const volumeBar = document.getElementById('volume-bar');
const songName = document.querySelector('.song-name')
const artistName = document.querySelector('.artist-name')
const songList= [
  {
    title : "Dil Ibaddat",
    artist: "KK",
    hash: "306c9dc94c3664bb476f1e9f6b2f0acb"
  },
  {
    title : "Suzume",
    artist: "Someone ft. Tamao",
    hash: "8c70e94f336da87215feeeff28d1014c"
  },
  {
    title : "As it was",
    artist: "Harry Styles",
    hash: "8e8f79d3f65803bb50e49531677e4b98"
  }
];

let currentIndex=0;



song.src=`https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].hash}`;

window.addEventListener('load', function() {
  progressBar.value = 0;
});

song.addEventListener('ended', () => {
  playNext();
})


// Updates the value of the progress bar
song.addEventListener('timeupdate', () => {
  const currentTime = song.currentTime;
  const duration = song.duration;
  const progress = parseFloat(currentTime / duration) * 100;

  progressBar.value = progress;

});

// Update music playback position when progress bar is changed
progressBar.addEventListener('input', () => {
  const progress = progressBar.value;
  const duration = song.duration;
  const currentTime = (progress / 100) * duration;

  song.currentTime = currentTime;
});

// Handles play and pause
function playPause(event) {

  if (event.target.id === 'play') {
    song.play();

    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'inline-block';
  }
  else {
    song.pause();
    document.getElementById('play').style.display = 'inline-block';
    document.getElementById('pause').style.display = 'none';
  }

}

// Handles volume functionalities
volumeBar.addEventListener('input', () => {
  const volume = (volumeBar.value) / 100;

  song.volume = volume;
})

function playNext() {
  
  if (currentIndex === (songList.length - 1)) {
    currentIndex = 0;
  }
  else {
    currentIndex++;
  }
  
  song.src=`https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].hash}`;
  song.play();

}

function playPrevious() {
  
  if (song.currentTime < 2) {

      if (currentIndex == 0) {
          currentIndex = songList.length - 1;
      }
      else {
          currentIndex--;
      }
      song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].hash}`;
      song.play();
  }
  else {
      song.currentTime = 0;
  }
}



