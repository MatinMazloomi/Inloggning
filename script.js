// Check if the user is already logged in

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("name1");
  if (username) {
    document.getElementById("screen_content").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("logOut").style.display = "block";
    document.getElementById("rules").style.display = "none";
    document.getElementById("image1").style.display = "block";
    document.getElementById("welcome").innerHTML = `Welcome back, ${username}!`;
  }
});

// Handle login form submission

function login() {
  localStorage.setItem("name1", "Bella");
  localStorage.setItem("pass1", "qwe123");
  let name1 = localStorage.getItem("name1");
  let pass1 = localStorage.getItem("pass1");

  // Validate the username and password here
  if (
    document.getElementById("userName").value == name1 &&
    document.getElementById("passWord").value == pass1
  ) {
    const username = document.getElementById("userName").value;
    const password = document.getElementById("passWord").value;

    document.getElementById("screen_content").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("logOut").style.display = "block";
    document.getElementById("rules").style.display = "none";
    document.getElementById("image1").style.display = "block";

    document.getElementById("welcome").innerHTML = `Welcome, ${username}!`;
    event.preventDefault();
  } else {
    localStorage.clear();

    document.getElementById("userName").value = "Something is wrong!";
    document.getElementById("passWord").value = "Something is wrong!";
    event.preventDefault();
  }
}

//Logout btn
function logout() {
  localStorage.clear();

  location.reload();
}
