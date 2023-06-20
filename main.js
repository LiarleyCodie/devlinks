const container = document.querySelector("#container")
const backgroundVideo = document.querySelector("#background video")

window.onload = showAll;

function showAll() {
  setTimeout(() => {
    container.classList.remove('filtered');
  },1000)
}
