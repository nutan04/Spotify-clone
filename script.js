console.log("welcome to spotify");
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    SongName: "Warriyo - Mortals(NCS Release)",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    SongName: "Cielo Mumma Muma",
    filePath: "song/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    SongName: "DEAF KEV -(NCS Releae)",
    filePath: "song/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    SongName: "Different Heaven and EHIDE",
    filePath: "song/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    SongName: "Janji-Heroes-Tonight",
    filePath: "song/5.mp3",
    coverPath: "covers/5.jpg",
  },
  { SongName: "Rabba", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
  { SongName: "Sakhiyana", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
  { SongName: "Bhuladena", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
  {
    SongName: "Tumhari Kasam",
    filePath: "song/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    SongName: "Salam-e-Ishq",
    filePath: "song/10.mp3",
    coverPath: "covers/10.jpg",
  },
];
//for each loop for array
songItem.forEach((element, i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].SongName;
});

//handle play or plause
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//listen to Events
audioElement.addEventListener("timeupdate", () => {
  //console.log('timeupdate');
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

//change the event for progress bar
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
    // let num=e.target.id
    // console.log(num);
    makeAllPlays();
      songIndex = parseInt(e.target.id);
      console.log(songIndex)
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `song/${songIndex + 1}.mp3`;
      masterSongName.innerText=songs[songIndex].SongName;
      audioElement.currentTime = 0
      audioElement.play();
      //console.log(audioElement.play())
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    }
      
    
    );
  }
);


Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("mouseover", (e) => {
    // let num=e.target.id
    // console.log(num);
    //makeAllPlays();
      songIndex = parseInt(e.target.id);
      console.log(songIndex)
      e.target.classList.remove("fa-pause-circle");
      e.target.classList.add("fa-play-circle");
      audioElement.src = `song/${songIndex + 1}.mp3`;
      masterSongName.innerText=songs[songIndex].SongName;
      audioElement.currentTime = 0
      audioElement.pause();
      //console.log(audioElement.play())
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
    }
      
    
    );
  }
);


document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `song/${songIndex + 1}.mp3`;
  masterSongName.innerText=songs[songIndex].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `song/${songIndex + 1}.mp3`;
  masterSongName.innerText=songs[songIndex].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
