const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const seekBar = document.getElementById("seek-bar");
const currentTimeEl = document.getElementById("current-time");
const totalDurationEl = document.getElementById("total-duration");
const speedControl = document.getElementById("speed-control");

// دکمه Play/Pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// تغییر آیکون هنگام پخش/توقف
audio.addEventListener("play", () => {
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
});

audio.addEventListener("pause", () => {
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
});

// آپدیت نوار پیشرفت و زمان
audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    seekBar.value = (currentTime / duration) * 100;
    currentTimeEl.textContent = formatTime(currentTime);


    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
    updateSeekBarStyle(progress);

});

// تنظیم زمان کل هنگام لود شدن
audio.addEventListener("loadedmetadata", () => {
    totalDurationEl.textContent = formatTime(audio.duration);
});

// تغییر موقعیت پخش با نوار پیشرفت
seekBar.addEventListener("input", () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration

    const seekTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
    updateSeekBarStyle(seekBar.value);
});

// کنترل سرعت
speedControl.addEventListener("change", function () {
    audio.playbackRate = parseFloat(this.value);
});

// تابع فرمت زمان (مثلاً 02:35)
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
console.log(minutes);
    if (minutes<10) {
        
        return `0${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
    else{

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
}

function updateSeekBarStyle(progress) {
    seekBar.style.background = `linear-gradient(to right, black 0%, black ${progress}%, gray ${progress}%, gray 100%)`;
}



const topFaceSlider = new Swiper('.topFaceSlider', {
    slidesPerView:"auto",
    spaceBetween: 50,
    speed:1000,
    navigation: {
        nextEl: '.nextTopFDef',
        prevEl: '.prevTopFDef',
      },
 
  });