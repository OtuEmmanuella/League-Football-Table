const elements = document.querySelectorAll(".animate-on-scroll");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateElements() {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("animate");
    }
  });
}

animateElements();

window.addEventListener("scroll", animateElements);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const threshold = 0.3;

  return (
    rect.top >= -rect.height * threshold &&
    rect.left >= -rect.width * threshold &&
    rect.bottom <= windowHeight + rect.height * threshold &&
    rect.right <= windowWidth + rect.width * threshold
  );
}

function animateElements() {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
}

const audio = document.getElementById("background-music");
const playButton = document.getElementById("play-music-button");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause Music";
  } else {
    audio.pause();
    playButton.textContent = "Play Music";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const liveNotification = document.querySelector(".live-notification");

  function toggleLiveNotification() {
    liveNotification.style.opacity =
      liveNotification.style.opacity === "1" ? "0" : "1";
  }

  setInterval(toggleLiveNotification, 1000);
});
