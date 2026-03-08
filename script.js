let songIndex = 0;

let audioElement = new Audio("songs");

let masterPlay = document.getElementById("masterPlay");

let myProgressBar = document.getElementById("myProgressBar");

let songItems = document.getElementsByClassName("songItem");

let songName = document.getElementById("songName");

let songs = [
    { songName: "Song One", filePath: "songs/song1.mp3" },
    { songName: "Song Two", filePath: "songs/2.mp3" },
    { songName: "Song Three", filePath: "songs/3.mp3" }
];


// Play / Pause button

masterPlay.addEventListener("click", () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play();

        masterPlay.classList.remove("fa-circle-play");

        masterPlay.classList.add("fa-circle-pause");

    }
    else {

        audioElement.pause();

        masterPlay.classList.remove("fa-circle-pause");

        masterPlay.classList.add("fa-circle-play");

    }

});


// Progress bar update

audioElement.addEventListener("timeupdate", () => {

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 1000);

    myProgressBar.value = progress;

});


// Progress bar change

myProgressBar.addEventListener("change", () => {

    audioElement.currentTime = myProgressBar.value * audioElement.duration / 1000;

});


// Song card click

Array.from(songItems).forEach((element) => {

    element.addEventListener("click", (e) => {

        songIndex = parseInt(element.getAttribute("data-index"));

        audioElement.src = songs[songIndex].filePath;

        songName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;

        audioElement.play();

        masterPlay.classList.remove("fa-circle-play");

        masterPlay.classList.add("fa-circle-pause");

    });

});


// Next button

document.getElementById("next").addEventListener("click", () => {

    if (songIndex >= songs.length - 1) {

        songIndex = 0;

    }
    else {

        songIndex += 1;

    }

    audioElement.src = songs[songIndex].filePath;

    songName.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;

    audioElement.play();

});


// Previous button

document.getElementById("previous").addEventListener("click", () => {

    if (songIndex <= 0) {

        songIndex = 0;

    }
    else {

        songIndex -= 1;

    }

    audioElement.src = songs[songIndex].filePath;

    songName.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;

    audioElement.play();

});