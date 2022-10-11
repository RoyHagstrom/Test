
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

let reapetSong = 0;



let curr_song = document.createElement('audio');



let song_list = [
  {
    name: "Candyland [NCS Release]",
	artist: "Tobu",
	image: "ab67616d0000b2731d9f5958063541bb23a978c0.jpg",
	path: "Tobu - Candyland [NCS Release].mp3",
  },
  {
    name: "Goofy type beat",
	artist: "Harold",
	image: "skull_1f480.png",
	path: "Goofy type beat.mp3",
},
{
	name: "300",
	artist: "Chief Keef · Soulja Boi",
	image: "images.jpg",
	path: "300-1 (1).mp3",
  },
];

function random_bg_color() {


  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;


  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";


  document.body.style.background = bgColor;
}

function loadsong(song_index) {
	if (song_index == song_list.length) {
	 song_index = 0;
 }
  clearInterval(updateTimer);
  resetValues();
  curr_song.src = song_list[song_index].path;
  curr_song.load();

  song_cover.style.backgroundImage = "url(" + song_list[song_index].image + ")";
  song_name.textContent = song_list[song_index].name;
  song_artist.textContent = song_list[song_index].artist;
  now_playing.textContent = "PLAYING " + (song_index + 1) + " OF " + song_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
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
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextsong() {

 
 
 if (song_index == song_list.length) {
	 song_index = 0;
 }
 
 if ((song_index < song_list.length - 1) || (reapetSong==0)) {
 song_index += 1;
 loadsong(song_index);
  playsong();
  	console.log("1");

} else if (reapetSong == 1) {
	loadsong(0);
  playsong();
  	console.log("2");

} else {
  song_index = 0;
   loadsong(song_index);
  playsong();
  	console.log("3");

}
 
console.log(song_index);
 
}

function prevsong() {
  if (song_index > 0)
    song_index -= 1;
  else song_index = song_list.length;
  loadsong(song_index);
  playsong();
}

function seekTo() {
  let seekto = curr_song.duration * (seek_slider.value / 100);
  curr_song.currentTime = seekto;
}

function setVolume() {
  curr_song.volume = volume_slider.value / 100;
}


function reapetsong() {
	reapetSong = 1;
	console.log(reapetSong);
}

function shufflesong() {
  curr_song.pause();
  isPlaying = false;


  
    let value1 = Math.floor((Math.random() * 3) + 1);
    let value2 = Math.floor((Math.random() * 3) + value1 / value1);
	value2--;
	Math.ceil(value2);
    console.log(value2);



var arr = [0, 1, 2, 3];
console.log(song_index);
loadsong(value2);
  playsong();
}

function stopsong() {
  loadsong(song_index);
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
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
    let row = document.createElement("playlist");
    let row2 = document.createElement("artist");
    row.className = "name";
    row2.className = "artist";
    row.innerHTML = song_list[i]["name"];
    row2.innerHTML = '<span> - </span>'+song_list[i]["artist"];
    row.addEventListener("click", () => { loadsong(i); playsong(); });
    row2.addEventListener("click", () => { loadsong(i); playsong();  });
    song_list[i]["row"] = row;
    song_list[i]["row"] = row2;
    aList.appendChild(row);
    aList.appendChild(row2);
	console.log(i);
  }





document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

document.addEventListener('keydown', function(e){

   console.log(e.key)
   
	switch (e.key) {

  case ' ':
    playpausesong();
    break;
	
	
}
})