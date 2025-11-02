function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in both username and password!");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }

  alert("Login successful! Welcome to Royal Stitch");
  return true;
}
