// Check if the user is already logged in

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");
  if (username == "Bella") {
    document.getElementById("screen_content").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("logOut").style.display = "block";
    document.getElementById("rules").style.display = "none";
    document.getElementById("image1").style.display = "block";
    document.getElementById("welcome").innerHTML = `Welcome back, ${username}!`;
  }
});

// Handle login form submission

document
  .getElementById("screen_content")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("userName").value;
    const password = document.getElementById("passWord").value;

    // Normally, you would validate the username and password here
    // For simplicity, we'll just set a username in localStorage

    localStorage.setItem("username", username);
    document.getElementById("screen_content").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("logOut").style.display = "block";
    document.getElementById("rules").style.display = "none";
    document.getElementById("image1").style.display = "block";

    document.getElementById("welcome").innerHTML = `Welcome, ${username}!`;
  });
//Logout btn
function logout() {
  localStorage.clear();

  location.reload();
}
