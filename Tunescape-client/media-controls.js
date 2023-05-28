let src = ["songs/Rangabati.mp3", "songs/DVRST.mp3", "songs/Suzume feat Toaka.mp3"];
const song = document.getElementById('song');

let currentindex = 0;
let isRepeat = false;

song.src = src[currentindex];

// Triggering autoplay

song.addEventListener('ended', () => {
    playNext();
})




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
    if (song.currentTime < 2) {

        if (currentindex === 0) {
            currentindex = src.length - 1;
        }
        else {
            currentindex--;
        }

        song.src = src[currentindex];
        song.play();
    }
    else {
        song.currentTime = 0;
    }
}

function repeat() {
    isRepeat = !(isRepeat);
    if (isRepeat) {
        document.getElementById('r').innerHTML = 'Repeat: on';
        song.addEventListener('ended', () => {
            playPrevious();
        })
    }
    else {
        document.getElementById('r').innerHTML = 'Repeat: off';
        song.addEventListener('ended', () => {
            playNext();
        })

    }

}



