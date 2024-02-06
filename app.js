function takeTo(value) {
  window.location.href = value;
}

const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}

const cards = document.getElementsByClassName("card");
const parent = document.getElementsByClassName("div1")[0];
let isBig = false;
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    if (event.target === cards[i]) {
      if (!isBig) {
        for (let j = 0; j < cards.length; j++) {
          if (j != i) {
            cards[j].style.display = "none";
          }
        }
        cards[i].classList.remove("fullscreen");
        isBig = true;
      } else {
        cards[i].classList.add("fullscreen");
        for (let j = 0; j < cards.length; j++) {
          cards[j].style.display = "flex";
        }
        isBig = false;
      }
    }
  });
}

const cells = document.querySelectorAll(".card");

cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (event.target === cell) {
      cell.classList.toggle("fullscreen");
    }
  });
});

const video = document.querySelector("#video");
const videoController = document.querySelector("#video-controller");
const playButton = document.querySelector("#play-button");

const bigVideo = document.querySelector(".video");
const bigVideoController = document.querySelector("#big-video-controller");
const bigPlayButton = document.querySelector("#big-play-button");



playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.innerHTML = '<img src="images/pause.svg" alt="pause">';
  } else {
    video.pause();
    playButton.innerHTML = '<img src="images/play.svg" alt="play">';
  }
});

bigPlayButton.addEventListener("click", () => {
  if (bigVideo.paused) {
    bigVideo.play();
    bigPlayButton.innerHTML = '<img src="images/pause.svg" alt="pause">';
  } else {
    bigVideo.pause();
    bigPlayButton.innerHTML = '<img src="images/play.svg" alt="play">';
  }
});

videoController.addEventListener("input", () => {
  const time = (video.duration * videoController.value) / 1000;
  video.currentTime = time;
});

bigVideoController.addEventListener("input", () => {
  const time = (bigVideo.duration * bigVideoController.value) / 1000;
  bigVideo.currentTime = time;
});

var elements = document.querySelectorAll(".big");

document.querySelector(".backdrop").addEventListener("click", () => {
  for (var i = 0; i < elements.length; ++i) {
    elements[i].classList.add("hidden");
  }

  video.currentTime = bigVideo.currentTime;
  videoController.value = (video.currentTime / video.duration) * 1000;
  if (bigVideo.paused) {
    video.pause();
    bigVideo.pause();
    playButton.innerHTML = '<img src="images/play.svg" alt="play">';
  } else {
    video.play();
    bigVideo.pause();
    playButton.innerHTML = '<img src="images/pause.svg" alt="pause">';
  }
});

document.querySelector(".fullscreen-button").addEventListener("click", () => {
  for (var i = 0; i < elements.length; ++i) {
    elements[i].classList.remove("hidden");
  }
  bigVideo.currentTime = video.currentTime;
  bigVideoController.value = (bigVideo.currentTime / bigVideo.duration) * 1000;
  if (video.paused) {
    video.pause();
    bigVideo.pause();
    bigPlayButton.innerHTML = '<img src="images/play.svg" alt="play">';
  } else {
    bigVideo.play();
    video.pause();
    bigPlayButton.innerHTML = '<img src="images/pause.svg" alt="pause">';
  }
});

let isMouseMoving = false;
let itsTime = true;
setInterval(() => {
  itsTime = true;
}, 5000);
document.addEventListener("mousemove", function(event) {

    if(itsTime){
    itsTime = false;

  if (!isMouseMoving) {
    if (bigVideo.paused) {
      bigPlayButton.innerHTML = '<img src="images/play.svg" alt="play">';
    } else {
      bigPlayButton.innerHTML = '<img src="images/pause.svg" alt="pause">';
    }
  }
  console.log(isMouseMoving)
  isMouseMoving = true;
  setTimeout(() => {
    isMouseMoving = false;
  }, 100);
} 

});

// Check for mouse inactivity and make the button transparent
setInterval(() => {
  if (!isMouseMoving) {
    bigPlayButton.innerHTML = "";
  }
}, 5000);

setInterval(() => {
  if(!video.paused) {
  videoController.value = (video.currentTime / video.duration) * 1000;
  }
  if(!bigVideo.paused) {
    bigVideoController.value = (bigVideo.currentTime / bigVideo.duration) * 1000;
  }
}, 100);