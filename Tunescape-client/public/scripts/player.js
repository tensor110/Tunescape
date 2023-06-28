const song = document.getElementById('song');
const progressBar = document.getElementById('seeker-bar');
const volumeBar = document.getElementById('volume-bar');
const songName = document.querySelector('.song-name')
const artistName = document.querySelector('.artist-name')
const songList= [
  {
  "_id": "649bf764032be09a19f78bbc",
  "Title": "TEST_SONG",
  "SongHash": "0a81d67817ac1ff1171c03692fcfcaf5",
  "Artist": "toaka",
  "ThumbnailHash": "f10452011fdbdefdc5d898ac5dd4fad1",
  "createdAt": "2023-06-28T09:03:32.149Z",
  "updatedAt": "2023-06-28T09:03:32.149Z",
  "__v": 0
  },
  {
  "_id": "649bf6b7032be09a19f78bb4",
  "Title": "suzu",
  "SongHash": "6101330d8414850e5c182968f1d04193",
  "Artist": "toaka",
  "ThumbnailHash": "d0648eb8c20bc1f3bddb2f520f4473a2",
  "createdAt": "2023-06-28T09:00:39.563Z",
  "updatedAt": "2023-06-28T09:00:39.563Z",
  "__v": 0
  },
  {
  "_id": "649c1f9e217e58a7524a8d96",
  "Title": "song8",
  "SongHash": "e5b700268aa6ca2f89175d838114b8ab",
  "Artist": "aaronpaul",
  "ThumbnailHash": "4a2fbd852776d48d1c89076927931bda",
  "createdAt": "2023-06-28T11:55:10.284Z",
  "updatedAt": "2023-06-28T11:55:10.285Z",
  "__v": 0
  },
  {
  "_id": "649c1f4e217e58a7524a8d90",
  "Title": "suuzumee",
  "SongHash": "bf8ad5e7b7cc91533a06439c8f9cf700",
  "Artist": "aaronpaul",
  "ThumbnailHash": "6e42f7f659415408325a617090c5d504",
  "createdAt": "2023-06-28T11:53:50.263Z",
  "updatedAt": "2023-06-28T11:53:50.267Z",
  "__v": 0
  },
  {
  "_id": "6482c93ac1948b1308f5a35a",
  "Title": "Saware",
  "SongHash": "0xhsuugyyywaj",
  "Artist": "Pritam",
  "ThumbnailHash": "Pending...",
  "createdAt": "2023-06-09T06:39:54.234Z",
  "updatedAt": "2023-06-09T06:39:54.234Z",
  "__v": 0
  },
  {
  "_id": "6482c92c681d2912016c684d",
  "Title": "Saware",
  "SongHash": "0xhsuugyyywaj",
  "Artist": "Pritam",
  "ThumbnailHash": "Pending...",
  "createdAt": "2023-06-09T06:39:40.899Z",
  "updatedAt": "2023-06-09T06:39:40.900Z",
  "__v": 0
  },
  {
  "_id": "6482c8f953baba5041a33091",
  "Title": "Saware",
  "SongHash": "0xhsuugyyywaj",
  "Artist": "Pritam",
  "ThumbnailHash": "Pending...",
  "createdAt": "2023-06-09T06:38:49.702Z",
  "updatedAt": "2023-06-09T06:38:49.706Z",
  "__v": 0
  },
  {
  "_id": "648ac6106a8ae858b8616efd",
  "Title": "thisshitisclose",
  "SongHash": "c185e45411c7cc798921e07c753754da",
  "Artist": "aaronpaulbreakinbad",
  "ThumbnailHash": "2dbda9fb182a4f097b8be676230ce9ed",
  "createdAt": "2023-06-15T08:04:32.904Z",
  "updatedAt": "2023-06-15T08:04:32.905Z",
  "__v": 0
  }
  ]
// const songList= [
//   {
//     title : "Dil Ibaddat",
//     artist: "KK",
//     hash: "306c9dc94c3664bb476f1e9f6b2f0acb"
//   },
//   {
//     title : "Suzume",
//     artist: "Someone ft. Tamao",
//     hash: "8c70e94f336da87215feeeff28d1014c"
//   },
//   {
//     title : "As it was",
//     artist: "Harry Styles",
//     hash: "8e8f79d3f65803bb50e49531677e4b98"
//   }
// ];

let currentIndex=1;



song.src=`https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;

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
  
  song.src=`https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
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



