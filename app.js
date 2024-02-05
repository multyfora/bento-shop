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


const video = document.querySelector(".video");
const videoController = document.querySelector(".video-controller");
const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.innerHTML = '<img src="images/pause.svg" alt="pause">';
} else {
    video.pause();
    playButton.innerHTML = '<img src="images/play.svg" alt="play">';
}
});


videoController.addEventListener('input', () => {
  const time = (video.duration * videoController.value) / 100;
  video.currentTime = time;
});