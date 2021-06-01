document.addEventListener("DOMContentLoaded", function() {
  scope.setInterval(countUp(); 1000);
});

function countUp() {
  const counter = document.getElementByID("counter");
  
  counter + 1
}