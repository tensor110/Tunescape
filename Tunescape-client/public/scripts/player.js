const song= document.getElementById('song');
const progressBar= document.getElementById('seeker-bar');
const volumeBar= document.getElementById('volume-bar');

song.addEventListener('loadeddata',()=>{
    
    
    
})

song.addEventListener('timeupdate', () => {
    const currentTime = song.currentTime;
    const duration = song.duration;
    const progress = parseFloat(currentTime / duration) * 100;

    progressBar.value = progress;
    console.log(currentTime,progressBar.value);
  });

  // Update music playback position when progress bar is changed
  progressBar.addEventListener('input', () => {
    const progress = progressBar.value;
    const duration = song.duration;
    const currentTime = (progress / 100) * duration;

    song.currentTime = currentTime;
  });

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

volumeBar.addEventListener('input',()=>{
    const volume= (volumeBar.value)/100
    
    song.volume= volume;
})