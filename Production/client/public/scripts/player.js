

const songTitle= document.getElementById('song-title');
const artistName= document.getElementById('artist-name');
const songThumbnail= document.getElementById('thumbnail-left')
const queue= document.getElementById('buffer-queue')
const songMedia = document.getElementById('song');
const progressBar = document.getElementById('seeker-bar');
const volumeBar = document.getElementById('volume-seeker');


let songList = []
let currentIndex = 0;

async function getSongList(){

  await fetch('http://localhost:6969/buffer-stream-to-fetch-song')
    .then(res => {
      return res.json()
    })
    .then(data=>{
      songList= data;
      playSong();
      // song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`
      songList.forEach(song => {
        let card= createCardElement(song);
        queue.appendChild(card);
        
      })
    })
    .catch(error => {
      console.error(error);
    });
}


getSongList();


window.addEventListener('load',()=>{
  progressBar.value=0;
})

song.addEventListener('ended', () => {
  playNext();
})


// Updates the value of the progress bar

song.addEventListener('timeupdate', () => {
  const currentTime = songMedia.currentTime;
  const duration = songMedia.duration;
  const progress = parseFloat(currentTime / duration) * 100;
  progressBar.value = progress || 0;
});

// Update music playback position when progress bar is changed
progressBar.addEventListener('input', () => {
  const progress = progressBar.value;
  const duration = songMedia.duration;
  const currentTime = (progress / 100) * duration;

  songMedia.currentTime = currentTime;
});

// Handles play and pause
function playPause(event) {

  if (event.target.id === 'play') {
    songMedia.play();

    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'inline-block';
  }
  else {
    songMedia.pause();
    document.getElementById('play').style.display = 'inline-block';
    document.getElementById('pause').style.display = 'none';
  }

}

// Handles volume functionalities
volumeBar.addEventListener('input', () => {
  const volume = (volumeBar.value) / 100;

  songMedia.volume = volume;
})

function playNext() {

  if (currentIndex === (songList.length - 1)) {
    currentIndex = 0;
  }
  else {
    currentIndex++;
  }
  playSong();
  // song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
  // song.play();

}

function playPrevious() {

  if (song.currentTime < 2) {

    if (currentIndex == 0) {
      currentIndex = songList.length - 1;
    }
    else {
      currentIndex--;
    }
    // song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
    // song.play();

    playSong();
  }
  else {
    song.currentTime = 0;
  }
}


function createCardElement(song) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('stream-right-song');

  const thumbnail = document.createElement('img');
  thumbnail.src = `https://d1uzpajnrcv6ws.cloudfront.net/${song.ThumbnailHash}`;
  // thumbnail.alt = '.\client\public\assets\alt-cover.png';
  thumbnail.id = 'thumbnail-right';

  // const detailsDiv = document.createElement('div');
  // detailsDiv.classList.add('queue-song-details');

  const songName = document.createElement('div');
  songName.classList.add('song-name-stream-right');
  songName.textContent = song.Title;

  const artistName = document.createElement('div');
  artistName.classList.add('artist-name-stream-right');
  artistName.textContent = song.Artist;

  // const songViews = document.createElement('span');
  // songViews.classList.add('song-views');

  const likes = document.createElement('img');
 likes.src = 'assets/like.png';


  const duration= document.createElement('div');
  duration.classList.add('duration');
  // duration.textContent = convertDuration(songMedia.duration);
  duration.textContent = '3:56';
  

  // songViews.appendChild(playImg);
  // songViews.appendChild(playsCount);

  // detailsDiv.appendChild(songName);
  // detailsDiv.appendChild(artistName);
  // detailsDiv.appendChild(songViews);
  cardDiv.appendChild(thumbnail);
  cardDiv.appendChild(songName)
  cardDiv.appendChild(artistName);
  cardDiv.appendChild(likes);
  cardDiv.appendChild(duration);

  return cardDiv;
}


function playSong(){
  song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
  songThumbnail.src= `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].ThumbnailHash}`;
  songTitle.innerText= songList[currentIndex].Title;
  artistName.innerText= songList[currentIndex].Artist;
  songMedia.play(); 
}



function convertDuration(given_seconds) {
  console.log(given_seconds)
  const minutes = parseInt(given_seconds/60);
  const seconds = parseInt(given_seconds - 60*minutes);
  timeString = `${minutes}:${seconds}`

  return timeString;
}