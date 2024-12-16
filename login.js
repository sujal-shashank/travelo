document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate login (replace with actual authentication logic)
    console.log("User Logged In:", { email, password });

    alert("Login successful! Welcome to Travelo.");
    loginForm.reset();
  });
});