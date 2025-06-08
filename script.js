const slides = document.querySelectorAll('.slide');
let activeSlide = 0;
const intervalAction = () => {
  return setInterval(() => {
    removeActiveSlide(activeSlide);
    activeSlide++;
    if (activeSlide > 2) {
      activeSlide = 0
    }
    setActiveSlide(activeSlide)
  }, 10000);
}
let interval = intervalAction();
document.getElementById('carouselNextButton').addEventListener('click', (e) => {
  clearInterval(interval)
  interval = intervalAction();
  e.preventDefault();
  removeActiveSlide(activeSlide);
  if (activeSlide < slides.length - 1) {
    activeSlide = activeSlide + 1;
    setActiveSlide(activeSlide);
  }
  else {
    activeSlide = 0;
    setActiveSlide(activeSlide);
  }
})

document.getElementById('carouselPrevButton').addEventListener('click', (e) => {
  e.preventDefault();
  clearInterval(interval)
  interval = intervalAction();
  removeActiveSlide(activeSlide);
  if (activeSlide > 0) {
    activeSlide = activeSlide - 1;
    setActiveSlide(activeSlide);
  }
  else {
    activeSlide = slides.length - 1;
    setActiveSlide(activeSlide);
  }
})

function setActiveSlide(id) {
  slides[id].classList.add('active');
}
function removeActiveSlide(id) {
  slides[id].classList.remove('active');
}

// burger

document.querySelector('.header__burger').addEventListener('click', e => {
  e.preventDefault();
  toggleBurger();
})
document.querySelectorAll('.header__nav-item').forEach(button => {
  button.addEventListener('click', (e) => {
    toggleBurger();
  })
});

const toggleBurger = () => {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('active');
  document.querySelector('body').classList.toggle('block');
  document.querySelector('.pre-header').classList.toggle('active');
}

document.querySelectorAll('.request').forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.modal').classList.toggle('open');
    document.querySelector('body').classList.toggle('block');
  })
});
document.querySelector('.modal__close').addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.modal').classList.remove('open');
  document.querySelector('body').classList.remove('block');
})
const sliderImages = document.querySelectorAll('.slider-image')

sliderImages.forEach((image, i) => {
  const newImage = new Image()
  newImage.src = `./assets/images/slider${i + 1}.png`;
  newImage.onload = () => {
    image.src = newImage.src;
    image.classList.add('open');
  }
})

const workImages = document.querySelectorAll('.works-image-item')

workImages.forEach((image, i) => {
  const newImage = new Image()
  newImage.src = `./assets/media/mediaimg${i + 1}.jpg`;
  newImage.onload = () => {
    image.src = newImage.src;
    image.classList.add('open');
  }
})

//instagram posts

document.getElementById('prevWork').addEventListener('click', () => {
  const cardsContainer = document.querySelector('.instagram__cards')
  cardsContainer.scrollLeft -= 500
})
document.getElementById('nextWork').addEventListener('click', () => {
  const cardsContainer = document.querySelector('.instagram__cards')
  cardsContainer.scrollLeft += 500
})

//video 

const videoplayers = document.querySelectorAll('.video-play-button')
videoplayers.forEach(videoplayer => videoplayer.addEventListener('click', () => {

  const video = videoplayer.previousElementSibling;
  if (video.paused || video.ended) {
    video.play();
    videoplayer.style.opacity = 0
    video.muted = false
  } else {
    video.pause();
    videoplayer.style.opacity = .5
  }
  const videos = document.querySelectorAll('.works-video-item');
  videos.forEach(v => {
    if (v !== video) {
      v.pause()

    }
  })
  const videoPlayers = document.querySelectorAll('.video-play-button');
  videoPlayers.forEach(vp => {
    if (vp !== videoplayer) {
      vp.style.opacity = .5
    }
  })
})
)


document.querySelector('.how-to-find-us').addEventListener(('click'), (e) => {
  e.preventDefault()


  document.getElementById('myModal').classList.add('open')
})

document.getElementById('myModal').addEventListener('click', (e) => {
  e.stopPropagation()
  document.getElementById('myModal').classList.remove('open')
})

document.getElementById('close-find-modal').addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  document.getElementById('myModal').classList.remove('open')
})