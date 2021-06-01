document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("counter").setInterval(countUp()[, 1000]);
});

function countUp() {
  const counter = document.getElementByID("counter");
  
  counter + 1
}