function createCardElement(song) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-general', 'glass-morph');
  
    const thumbnail = document.createElement('img');
    thumbnail.src = song.thumbnail || '../assets/icons/alt-cover,png';
    thumbnail.alt = '';
    thumbnail.id = 'thumbnail-card';
  
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('queue-song-details');
  
    const songName = document.createElement('span');
    songName.classList.add('song-name-card');
    songName.textContent = song.title;
  
    const artistName = document.createElement('span');
    artistName.classList.add('artist-name-card');
    artistName.textContent = song.artistName;
  
    const songViews = document.createElement('span');
    songViews.classList.add('song-views');
  
    const playImg = document.createElement('img');
    playImg.src = song.thumbnailHash;
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
  


module.exports= createCardElement; 