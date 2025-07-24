function setupButtons() {
  const buttons = document.querySelectorAll(".btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      alert("Button ", " clicked")
    });
  }
}

// The "i" variable being passed doesn't return anything for that function. The func is basically to send an alert to the browser when on "clicked" varible is active or "button"