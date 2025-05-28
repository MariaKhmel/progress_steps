const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
})

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  // progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + "%";
  progress.style.width = activeCircles.length / circles.length * 100;
  console.log(activeCircles.length / circles.length * 100 + "%")
  // 2 / 4 = 0.5;
  // 3 / 4 = 0.75;
  // 4 / 4 = 1;
}

