const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});
  // Button 2:
  document.getElementById("button2").onclick = function () {
    alert("Button 2 (DOM Level 0 Event Handler)");
  };

  // Button 3:
  document.getElementById("button3").addEventListener("click", function () {
    alert("Button 3 (DOM Level 2 Event Listener)");
  });

  // Buttons 4 and 5:
  document
    .getElementById("buttonChildContainer")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        alert(`${event.target.textContent}(Event Delegation)`);
      }
    });

  // Parent container event listener
  document
    .getElementById("buttonContainer")
    .addEventListener("click", function () {
      alert("Container clicked!");
    });