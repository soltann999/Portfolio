const addPostBtn = document.getElementById('addPostBtn');
const modal = document.getElementById('modal');
const cancelBtn = document.getElementById('cancelBtn');

function show() {
  document.getElementById('modal').style.display = 'flex'; // show modal (flex for centering)
};

function hide() {
  document.getElementById('modal').style.display = "none"; // hide modal
};

// Also hide modal if user clicks outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    document.getElementById('modal').style.display = 'none';
  }
};
function post() {
  if (document.getElementById('password').value != "hello") {
    document.getElementById('wrongpassword').style.display = "flex";
  }else {
    document.getElementById('wrongpassword').style.display = "none";
  };
};

//fetch('posts.json').then(response.json()).then(posts => {
//  const pos
//})/
function theme(selectElement) {
  console.log("User changed theme to ", selectElement.value, "theme");
  if (selectElement.value == "white") {
    document.getElementById('body').style.backgroundColor = "white";
    document.getElementById('body').style.color = "black";
    document.getElementById('header').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    document.getElementById('tag_bg').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (selectElement.value == "black") {
    document.getElementById('body').style.backgroundColor = "black";
    document.getElementById('body').style.color = "white";
    document.getElementById('header').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    document.getElementById('tag_bg').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  }
};
