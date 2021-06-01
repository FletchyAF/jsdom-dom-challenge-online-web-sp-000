document.addEventListener("DOMContentLoaded", function() {
  const counterInteveral = .setInterval(countUp() 1000);
});

function countUp() {
  const counter = document.getElementByID("counter");
  
  counter + 1
}