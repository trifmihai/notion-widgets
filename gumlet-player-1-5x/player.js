const video = document.getElementById('video');
const speed = 1.5;

function setSpeed() {
  video.defaultPlaybackRate = speed;
  video.playbackRate = speed;
}

setSpeed();
video.addEventListener('loadedmetadata', setSpeed, { once: true });
video.addEventListener('play', () => {
  if (video.currentTime === 0) setSpeed();
});
