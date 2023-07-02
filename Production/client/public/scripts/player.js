


const queue= document.getElementById('buffer-queue')
const song = document.getElementById('song');
const progressBar = document.getElementById('seeker-bar');
const volumeBar = document.getElementById('volume-bar');
const songName = document.querySelector('.song-name')
const artistName = document.querySelector('.artist-name')
let songList = []
let currentIndex = 0;

async function getSongList(){

  await fetch('http://localhost:6969/buffer-stream-to-fetch-song')
    .then(res => {
      return res.json()
    })
    .then(data=>{
      songList= data;
      song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`
      songList.forEach(song => {
        let card= createCardElement(song);
        console.log("card")
        queue.appendChild(card);

      })
    })
    .catch(error => {
      console.error(error);
    });
}


getSongList();



window.addEventListener('load', function () {
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

  song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
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
    song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
    song.play();
  }
  else {
    song.currentTime = 0;
  }
}






function createCardElement(song) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card-general', 'glass-morph');

  const thumbnail = document.createElement('img');
  thumbnail.src = `https://d1uzpajnrcv6ws.cloudfront.net/${song.ThumbnailHash}`;
  thumbnail.alt = '.\client\public\assets\alt-cover.png';
  thumbnail.id = 'thumbnail-card';

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('queue-song-details');

  const songName = document.createElement('span');
  songName.classList.add('song-name-card');
  songName.textContent = song.Title;

  const artistName = document.createElement('span');
  artistName.classList.add('artist-name-card');
  artistName.textContent = song.Artist;

  const songViews = document.createElement('span');
  songViews.classList.add('song-views');

  const playImg = document.createElement('img');
  playImg.src = '../assets';
  playImg.alt = '';
  playImg.classList.add('play');

  const playsCount = document.createElement('span');
  playsCount.textContent = song.plays;

  songViews.appendChild(playImg);
  songViews.appendChild(playsCount);

  detailsDiv.appendChild(songName);
  detailsDiv.appendChild(artistName);
  detailsDiv.appendChild(songViews);

  cardDiv.appendChild(thumbnail);
  cardDiv.appendChild(detailsDiv);

  return cardDiv;
}
