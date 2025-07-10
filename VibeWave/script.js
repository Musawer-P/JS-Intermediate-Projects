const video = document.getElementById('myVideo');
const title = document.getElementById('video-h1');
const shortDesc = document.getElementById('video-description');
const fullDesc = document.getElementById('full-description');

function changeVideo(src, videoTitle, descriptionText, fullDescription = '') {
  video.src = src;
  title.textContent = videoTitle;
  shortDesc.textContent = descriptionText;
  if (fullDescription) {
    fullDesc.innerHTML = fullDescription;
  } else {
    fullDesc.textContent = '';
  }
  video.play();
}