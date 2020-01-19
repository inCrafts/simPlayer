let video = document.querySelector('.video'),
juice = document.querySelector('.progress-line'),
btn = document.getElementById('play-pause');

function togglePlayPause() {
    if (video.paused) {
        btn.className = 'paused';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

btn.onclick = function () {
  togglePlayPause();
};

video.addEventListener('timeupdate', function () {
    let juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + '%';
    if (video.ended) {
        btn.className = 'play';
    }
});
