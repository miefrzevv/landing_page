document.addEventListener("DOMContentLoaded", function () {
  var poster = document.getElementById("poster");
  var iframe = document.getElementById("video");

  poster.addEventListener("click", function () {
    poster.style.display = "none";

    iframe.style.display = "block";
    iframe.src = iframe.getAttribute("data-src");
  });
});
