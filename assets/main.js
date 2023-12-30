// document.addEventListener("DOMContentLoaded", function () {
//     const customCursor = document.querySelector(".custom-cursor");

//     document.addEventListener("mousemove", function (e) {
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       customCursor.style.left = mouseX + "px";
//       customCursor.style.top = mouseY + "px";
//     });

//     // Hide the cursor when not moving
//     let cursorTimeout;
//     document.addEventListener("mouseenter", function () {
//       customCursor.classList.remove("hidden");
//       clearTimeout(cursorTimeout);
//     });

//     document.addEventListener("mouseleave", function () {
//       cursorTimeout = setTimeout(function () {
//         customCursor.classList.add("hidden");
//       }, 500); // Hide the cursor after 500 milliseconds of inactivity
//     });
//   });