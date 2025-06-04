const tracks = [
  {
    title: "Vexento - Digital Hug",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    image: "https://img.icons8.com/color/96/000000/musical-notes.png",
  },
  {
    title: "Audio Hertz - Locked Out",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    image: "https://img.icons8.com/color/96/000000/cd--v1.png",
  },
  {
    title: "Density & Time - Final Step",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    image: "https://img.icons8.com/color/96/000000/music.png",
  },
  {
    title: "Aakash Gandhi - Mirage",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    image: "https://img.icons8.com/color/96/000000/dj.png",
  },
  {
    title: "The Mini Vandals - Elevate",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    image: "https://img.icons8.com/color/96/000000/audio-wave--v1.png",
  },
];

const trackSelect = document.getElementById("trackSelect");
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const currentTrackText = document.getElementById("currentTrack");
const trackImage = document.getElementById("trackImage");
const volumeSlider = document.getElementById("volume");
const progressBar = document.getElementById("progressBar");
const backwardBtn = document.getElementById("backward");
const forwardBtn = document.getElementById("forward");

let currentTrackIndex = 0;
let isPlaying = false;

function loadTrack(index) {
  currentTrackIndex = index;
  const track = tracks[index];
  audio.src = track.src;
  currentTrackText.textContent = track.title;
  trackImage.src = track.image;
  audio.volume = volumeSlider.value;
  playTrack();
}

function playTrack() {
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = "⏸️";
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.textContent = "▶️";
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
}

playPauseBtn.addEventListener("click", () => {
  if (!audio.src) return;
  isPlaying ? pauseTrack() : playTrack();
});

forwardBtn.addEventListener("click", nextTrack);
backwardBtn.addEventListener("click", prevTrack);

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

trackSelect.addEventListener("change", (e) => {
  loadTrack(parseInt(e.target.value));
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
});

// Charger la première piste par défaut
loadTrack(currentTrackIndex);
