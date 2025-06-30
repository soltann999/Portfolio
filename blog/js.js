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
  console.log(selectElement.value);
  if (selectElement.value == "white") {
    document.getElementById('body').style.backgroundColor = "white";
    document.getElementById('body').style.color = "black";
    document.getElementById('body').style.boxShadow = "0 3px 10px 0 black";
    document.getElementById('forms').style.borderColor = "black";
    document.getElementById('theme').style.backgroundColor = "white";
    document.getElementById('theme').style.color = "black";
    document.getElementById('addPostBtn').style.backgroundColor = "white";
    document.getElementById('addPostBtn').style.color = "black";
    document.getElementById('home_btn').style.backgroundColor = "white";
    document.getElementById('home_btn').style.color = "black";
    document.getElementById('header').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else {

  }
}
