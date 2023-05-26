let src = ["songs/Rangabati.mp3", "songs/DVRST.mp3", "songs/Suzume feat Toaka.mp3"];
const song = document.getElementById('song');

let currentindex = 0;
let isRepeat = false;
let isAutoplay= true;
song.src = src[currentindex];





function playNext() {

    if (currentindex === (src.length - 1)) {
        currentindex = 0;
    }
    else {
        currentindex++;
    }

    song.src = src[currentindex];
    song.play();
}

function playPrevious() {

    if (currentindex === 0) {
        currentindex = src.length - 1;
    }
    else {
        currentindex--;
    }

    song.src = src[currentindex];
    song.play();
}

function repeat() {
    isRepeat= !(isRepeat);
    if (isRepeat) {
        document.getElementById('r').innerHTML='Repeat on';
        song.addEventListener('ended', ()=>{
            song.play();
        })
    }
    else{
        document.getElementById('r').innerHTML='';
        song.addEventListener('ended', ()=>{
            autoplay();
        })
    }
}

function autoplay(){
    isAutoplay=!(isAutoplay);
    if(isAutoplay){
        document.getElementById('ap').innerHTML='Autoplay on';
        song.addEventListener('ended', ()=>{
            playNext();
        })
    }
    else{
        document.getElementById('ap').innerHTML='';
        song.addEventListener('ended', ()=>{
            
        })
    }
}

