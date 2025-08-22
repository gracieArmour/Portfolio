function hider() {
  var x = document.getElementByClass("item");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
