const audio = document.getElementById("click-sound");
const clickableElements = document.querySelectorAll("a, button");

clickableElements.forEach((element) => {
  element.addEventListener("click", () => {
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  });
});
