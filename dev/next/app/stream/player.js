import Player from './player';
import { songData } from './audio';
import { useState, useRef } from 'react';

const Player = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songData[1]);
  const audioElem= useRef();
  return (
    <div>
      <audio src="https://www.youtube.com/watch?v=VAdGW7QDJiU&list=RDCLAK5uy_n9Fbdw7e6ap-98_A-8JYBmPv64v-Uaq1g&start_radio=1" ref= {audioElem} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying= {setisplaying} audioElem= {audioElem} />
    </div>
  );
}

export default Player;