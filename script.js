const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const muteButton = document.getElementById("mute");
const progressBar = document.getElementById("progress");

// Reproducir o Pausar
playButton.addEventListener("click", () => audio.play());
pauseButton.addEventListener("click", () => audio.pause());

// Mute / Unmute
muteButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteButton.querySelector("img").src = audio.muted ? "./images/btn-mute.svg" : "./images/btn-volume.svg";
});

// Actualizar barra de progreso
audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
});

// Cambiar posición del audio
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});
