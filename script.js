const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const playlistButton = document.getElementById("playlist");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
const playlistSongs = document.getElementById("playlist-songs");
const currentProgress = document.getElementById("current-progress");

//index for songs
let index;

//initially loop=true
let loop = true;


const songsList = [
  {
    name: "Hairat - Anjana Anjani",
    link: "audio/hairat.mp3",
    artist: "Lucky Ali",
    image: "images/hairat.jpeg",
  },
  {
    name: "Mitti di Khushboo",
    link: "audio/Mitti di Khushboo.mp3",
    artist: "Ayushman Khurana",
    image: "images/Mitti di Khushboo.jpeg",
  },
  {
    name: "Dekhte Dekhte",
    link: "audio/Dekhte Dekhte.mp3",
    artist: "Atif Aslam",
    image: "images/Dekhte Dekhte.jpeg",
  },
  {
    name: "Hum Tumko Nigahon Mein",
    link: "audio/Hum Tumko Nigahon Mein.mp3",
    artist: "Udit Narayan",
    image: "images/Hum Tumko Nigahon Mein.jpeg",
  },
  {
    name: "Teri Deewani",
    link: "audio/Teri Deewani.mp3",
    artist: "Kailash Kher",
    image: "images/Teri Deewani.jpeg",
  },
  {
    name: "Ye Tune Kya Kiya",
    link: "audio/Ye Tune Kya Kiya.mp3",
    artist: "Kaved Bashir",
    image: "images/Ye Tune Kya Kiya.jpeg",
  },
  {
    name: "Abhi Mujh Mein Kahin",
    link: "audio/Abhi Mujh Mein Kahin.mp3",
    artist: "Sonu Nigam",
    image: "images/Abhi Mujh Mein Kahin.jpeg",
  },
  {
    name: "Chahun Main Ya Naa",
    link: "audio/Chahun Main Ya Naa.mp3",
    artist: "Arijit Singh",
    image: "images/Chahun Main Ya Naa.jpeg",
  },
  {
    name: "Hawa Banke",
    link: "audio/Hawa Banke.mp3",
    artist: "Darshan Raval",
    image: "images/Hawa Banke.jpeg",
  },
  {
    name: "Tere Bina",
    link: "audio/Tere Bina.mp3",
    artist: "AR Rahman",
    image: "images/Tere Bina.jpeg",
  },
  {
    name: "Agar Tum Saath Ho",
    link: "audio/Agar Tum Saath Ho.mp3",
    artist: "Arigit Singh",
    image: "images/Agar Tum Saath Ho.jpeg",
  },
  {
    name: "Pal",
    link: "audio/Pal.mp3",
    artist: "Palak",
    image: "images/Pal.jpeg",
  },
  {
    name: "Satrangi Re",
    link: "audio/Satrangi Re.mp3",
    artist: "Sonu Nigam",
    image: "images/Satrangi Re.jpeg",
  },
  {
    name: "Sun Saathiya",
    link: "audio/Sun Saathiya.mp3",
    artist: "Divya Kumar",
    image: "images/Sun Saathiya.jpeg",
  },
  {
    name: "Baatein Ye Kabhi Na Tu Bhulna",
    link: "audio/Baatein Ye Kabhi Na Tu Bhulna.mp3",
    artist: "Arijit Singh",
    image: "images/Baatein Ye Kabhi Na Tu Bhulna.jpeg",
  },
  {
    name: "Maahi Ve",
    link: "audio/Maahi Ve.mp3",
    artist: "AR Rahman",
    image: "images/Maahi Ve.jpeg",
  },
  {
    name: "Mast Magan",
    link: "audio/Mast Magan.mp3",
    artist: "Arijit Singh",
    image: "images/Mast Magan.jpeg",
  },
  {
    name: "Pal Pal Dil Ke Paas",
    link: "audio/Pal Pal Dil Ke Paas.mp3",
    artist: "Arijit Singh",
    image: "images/Pal Pal Dil Ke Paas.jpeg",
  },
  {
    name: "Saibo",
    link: "audio/Saibo.mp3",
    artist: "Shreya Ghoshal",
    image: "images/Saibo.jpeg",
  },
  {
    name: "Tu Jaane Na",
    link: "audio/Tu Jaane Na.mp3",
    artist: "Atif Aslam",
    image: "images/Tu Jaane Na.jpeg",
  },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
    // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
    // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
  // {
  //   name: "Song Name",
  //   link: "audio/Song Name.mp3",
  //   artist: "Singer Name",
  //   image: "images/Song Name.jpeg",
  // },
];

//events object
let events = {
  mouse: {
    click: "click",
  },
  touch: {
    click: "touchstart",
  },
};

let deviceType = "";

//Detect touch device

const isTouchDevice = () => {
  try {
    //We try to create TouchEvent(it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

//Format time (convert ms to seconds, minutes and add 0 id less than 10)
const timeFormatter = (timeInput) => {
  let minute = Math.floor(timeInput / 60);
  minute = minute < 10 ? "0" + minute : minute;
  let second = Math.floor(timeInput % 60);
  second = second < 10 ? "0" + second : second;
  return `${minute}:${second}`;
};

//set song
const setSong = (arrayIndex) => {
  //this extracts all the variables from the object
  let { name, link, artist, image } = songsList[arrayIndex];
  audio.src = link;
  songName.innerHTML = name;
  songArtist.innerHTML = artist;
  songImage.src = image;
  //display duration when metadata loads
  audio.onloadedmetadata = () => {
    maxDuration.innerText = timeFormatter(audio.duration);
  };
};

//play song
const playAudio = () => {
  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
};

//repeat button
repeatButton.addEventListener("click", () => {
  if (repeatButton.classList.contains("active")) {
    repeatButton.classList.remove("active");
    audio.loop = false;
    console.log("repeat off");
  } else {
    repeatButton.classList.add("active");
    audio.loop = true;
    console.log("repeat on");
  }
});

//Next song
const nextSong = () => {
  //if loop is true then continue in normal order
  if (loop) {
    if (index == songsList.length - 1) {
      //If last song is being played
      index = 0;
    } else {
      index += 1;
    }
    setSong(index);

    playAudio();
  } else {
    //else find a random index and play that song
    let randIndex = Math.floor(Math.random() * songsList.length);
    console.log(randIndex);
    setSong(randIndex);
    playAudio();
  }
};

//pause song
const pauseAudio = () => {
  audio.pause();
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
};

//previous song ( you can't go back to a randomly played song)
const previousSong = () => {
  if (index > 0) {
    pauseAudio();
    index -= 1;
  } else {
    //if first song is being played
    index = songsList.length - 1;
  }
  setSong(index);
  playAudio();
};

//next song when current song ends
audio.onended = () => {
  nextSong();
};

//Shuffle songs
shuffleButton.addEventListener("click", () => {
  if (shuffleButton.classList.contains("active")) {
    shuffleButton.classList.remove("active");
    loop = true;
    console.log("shuffle off");
  } else {
    shuffleButton.classList.add("active");
    loop = false;
    console.log("shuffle on");
  }
});

//play button
playButton.addEventListener("click", playAudio);

//next button
nextButton.addEventListener("click", nextSong);

//pause button
pauseButton.addEventListener("click", pauseAudio);

//prev button
prevButton.addEventListener("click", previousSong);

//if user clicks on progress bar
isTouchDevice();
progressBar.addEventListener(events[deviceType].click, (event) => {
  //start of progressBar
  let coordStart = progressBar.getBoundingClientRect().left;
  //mouse click position
  let coordEnd = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
  let progress = (coordEnd - coordStart) / progressBar.offsetWidth;

  //set width to progress
  currentProgress.style.width = progress * 100 + "%";

  //set time
  audio.currentTime = progress * audio.duration;

  //play
  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
});

//update progress every second
setInterval(() => {
  currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
  currentProgress.style.width =
    (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";
});

//update time
audio.addEventListener("timeupdate", () => {
  currentTimeRef.innerText = timeFormatter(audio.currentTime);
});

//Creates playlist
const initializePlaylist = () => {
  for (let i in songsList) {
    playlistSongs.innerHTML += `<li class='playlistSong' onclick='setSong(${i})'>
            <div class="playlist-image-container">
                <img src="${songsList[i].image}"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${songsList[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${songsList[i].artist}
                </span>
            </div>
        </li>`;
  }
};

//display playlist
playlistButton.addEventListener("click", () => {
  playlistContainer.classList.remove("hide");
});

//hide playlist
closeButton.addEventListener("click", () => {
  playlistContainer.classList.add("hide");
});

window.onload = () => {
  //initially first song
  index = 0;
  setSong(index);
  //create playlist
  initializePlaylist();
};