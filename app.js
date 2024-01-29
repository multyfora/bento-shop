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
  });
}

const cells = document.querySelectorAll(".card");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.toggle("fullscreen");
    cell.sty;
  });
});
