async function fetchData() {
  try {
    const response = await fetch('/data'); // replace with your API endpoint
    const data = await response.json();
    
    const song= document.getElementById('song');
    const progressBar= document.getElementById('seeker-bar');
    const volumeBar= document.getElementById('volume-bar');
    const songName= document.querySelector('.song-name')
    const artistName= document.querySelector('.artist-name')
    let songList;
    let currentIndex=0;
    
    // Now you can assign the fetched value to a variable or use it as needed
    songList=data;






    
    
    
    
    
    function updateInfo(songList){
      
      
      songName.innerHTML=`${songList[1].title}`;
    }
    
    updateInfo();
    
    
    
    
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
    volumeBar.addEventListener('input',()=>{
        const volume= (volumeBar.value)/100
        
        song.volume= volume;
    })
    
    function playNext() {
    
      if (currentIndex === (queueLength - 1)) {
          currentIndex = 0;
      }
      else {
          currentIndex++;
      }
      console.log(currentIndex);
      song.play();
    }
  
  } catch (error) {
    // Handle any errors that occur during the fetch request
    console.error('Error:', error);
  }
}

// Call the async function to start the asynchronous fetching process
fetchData();




