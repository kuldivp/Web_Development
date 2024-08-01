let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctricon = document.getElementById("controlicon");

song.addEventListener('loadedmetadata', () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
});

ctricon.addEventListener('click', () => {
    if (song.paused) {
        song.play();
        ctricon.classList.remove("fa-play");
        ctricon.classList.add("fa-pause");
    } else {
        song.pause();
        ctricon.classList.remove("fa-pause");
        ctricon.classList.add("fa-play");
    }
});

// Set up interval to update progress bar
setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 100);

progress.addEventListener('change', () => {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        ctricon.classList.add("fa-pause");
        ctricon.classList.remove("fa-play");
    }
});
