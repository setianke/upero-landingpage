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

// Carousel
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className === 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }

    this.updateGallery();
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}
const brandCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
brandCarousel.useControls();
