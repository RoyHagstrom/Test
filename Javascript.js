
let now_playing = document.querySelector(".now-playing");
let song_cover = document.querySelector(".song-cover");
let song_name = document.querySelector(".song-name");
let song_artist = document.querySelector(".song-artist");

let playpause_btn = document.querySelector(".playpause-song");
let next_btn = document.querySelector(".next-song");
let prev_btn = document.querySelector(".prev-song");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");


let song_index = 0;
let isPlaying = false;
let updateTimer;

let curr_song = document.createElement('audio');

document.addEventListener("DOMContentLoaded", function () {



window.addEventListener("load", function () {



let song_list = [
{
	name: "Goofy type beat",
	artist: "bagel man",
	image: "channels4_profile.jpg",
	src: "Goofy type beat.mp3",
	cover: "",
},
{
	name: "Candyland [NCS Release]",
	artist: "Tobu",
	image: "ab67616d0000b2731d9f5958063541bb23a978c0.jpg",
	src: "Tobu - Candyland [NCS Release].mp3",
	cover: "",
},
{
	name: "Candyland [NCS Release]",
	artist: "Tobu",
	image: "ab67616d0000b2731d9f5958063541bb23a978c0.jpg",
	src: "Tobu - Candyland [NCS Release].mp3",
	cover: "",
},
];



function loadsong(song_index) {
  resetValues();
  
  curr_song.src = song_list[song_index].mp3;
  curr_song.load();

  song_cover.style.backgroundImage = 
     "url(" + song_list[song_index].image + ")";
  song_name.textContent = song_list[song_index].name;
  song_artist.textContent = song_list[song_index].artist;
  now_playing.textContent = 
     "PLAYING " + (song_index + 1) + " OF " + song_list.length;

  
  curr_song.addEventListener("ended", nextsong);
  
}
  

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}




loadsong(song_index);



function playpausesong() {
if (!isPlaying) playsong();
else pausesong();
}

function playsong() {
curr_song.play();
isPlaying = true;

playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pausesong() {
curr_song.pause();
isPlaying = false;

playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextsong() {
if (song_index < song_list.length - 1)
	song_index += 1;
else song_index = 0;

loadsong(song_index);
playsong();
}

function prevsong() {
if (song_index > 0)
	song_index -= 1;
else song_index = song_list.length - 1;

function reapetsong(){
	
}

function shufflesong(){
	
}

function stopsong(){
	
}
	
loadsong(song_index);
playsong();
}

function seekTo() {
seekto = curr_song.duration * (seek_slider.value / 100);

curr_song.currentTime = seekto;
}

function setVolume() {
curr_song.volume = volume_slider.value / 100;
}

function seekUpdate() {
let seekPosition = 0;

if (!isNaN(curr_song.duration)) {
	seekPosition = curr_song.currentTime * (100 / curr_song.duration);
	seek_slider.value = seekPosition;

	let currentMinutes = Math.floor(curr_song.currentTime / 60);
	let currentSeconds = Math.floor(curr_song.currentTime - currentMinutes * 60);
	let durationMinutes = Math.floor(curr_song.duration / 60);
	let durationSeconds = Math.floor(curr_song.duration - durationMinutes * 60);

	if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

	curr_time.textContent = currentMinutes + ":" + currentSeconds;
	total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}


for (let i in song_list) {
    let row = document.createElement("div");
    row.className = "aRow";
    row.innerHTML = song_list[i]["name"];
    row.addEventListener("click", () => { audPlay(i); });
    song_list[i]["row"] = row;
    aList.appendChild(row);
  }

}

}
);
  console.log("DOM is loaded");
  
});