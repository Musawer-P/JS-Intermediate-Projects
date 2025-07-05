const video = document.getElementById('myVideo');
  const playPause = document.getElementById('playPause');
  const rewind = document.getElementById('rewind');
  const forward = document.getElementById('forward');
  const seekBar = document.getElementById('seekBar');

  playPause.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playPause.textContent = 'Pause';
    } else {
      video.pause();
      playPause.textContent = 'Play';
    }
  });

  rewind.addEventListener('click', () => {
    video.currentTime -= 10; // back 10 seconds
  });

  forward.addEventListener('click', () => {
    video.currentTime += 10; // forward 10 seconds
  });

  // Update seek bar as video plays
  video.addEventListener('timeupdate', () => {
    seekBar.value = (video.currentTime / video.duration) * 100;
  });

  // Seek when bar is changed
  seekBar.addEventListener('input', () => {
    video.currentTime = (seekBar.value / 100) * video.duration;
  });