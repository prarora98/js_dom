var body = document.querySelector("body");
document.addEventListener("click", function() {
  body.style.backgroundColor =
    "#" +
    Math.random()
      .toString(16)
      .substr(-6);
});
