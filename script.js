// 576AE8
// 7474F4
// 818DF7
// B5A5FB
// COC8FC

document.addEventListener("mousemove", function (event) {
    var cursorShadow = document.querySelector(".cursor-shadow");
    var cursorSize = 20; // Adjust this value to match the size of your cursor shadow
  
    cursorShadow.style.left = event.clientX - cursorSize / 2 + "px";
    cursorShadow.style.top = event.clientY - cursorSize / 2 + "px";
  });
  
  document.addEventListener("mouseenter", function () {
    var cursorShadow = document.querySelector(".cursor-shadow");
    cursorShadow.classList.add("active");
  });
  
  document.addEventListener("mouseleave", function () {
    var cursorShadow = document.querySelector(".cursor-shadow");
    cursorShadow.classList.remove("active");
  });