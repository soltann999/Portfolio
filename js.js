function theme(selectElement) {
  console.log("User changed theme to ", selectElement.value, "theme");
  if (selectElement.value == "white") {
    document.getElementById('body').style.backgroundColor = "white";
    document.getElementById('body').style.color = "black";
    document.getElementById('header').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (selectElement.value == "black") {
    document.getElementById('body').style.backgroundColor = "black";
    document.getElementById('body').style.color = "white";
    document.getElementById('header').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  }
};
