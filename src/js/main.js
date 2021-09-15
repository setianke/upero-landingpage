import '../sass/styles.sass';

function appendSource(device, format, type) {
  const source = document.createElement('source');
  source.src = '/assets/videos/video-' + device + '.' + format;
  source.type = type;
  document.getElementById('home-video').appendChild(source);
}

function appendPoster(device) {
  document.getElementById('home-video').setAttribute('poster', '/assets/images/poster-' + device + '.jpg');
}

if (window.innerWidth <= 500) {
  appendPoster('mobile');
  appendSource('mobile', 'mp4', 'video/mp4');
  appendSource('mobile', 'webm', 'video/webm');
} else if (500 < window.innerWidth && window.innerWidth <= 768) {
  appendPoster('tablet');
  appendSource('tablet', 'mp4', 'video/mp4');
  appendSource('tablet', 'webm', 'video/webm');
} else {
  appendPoster('desktop');
  appendSource('desktop', 'mp4', 'video/mp4');
  appendSource('desktop', 'webm', 'video/webm');
}
