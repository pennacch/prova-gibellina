function goFullScreen() {
  document.documentElement.requestFullscreen();
  document.getElementById("video").play();
  document.getElementById("scopri").style.display = "none"
}
