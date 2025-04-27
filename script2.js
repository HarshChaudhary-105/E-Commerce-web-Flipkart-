document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Dummy check (you can replace this with actual validation or API call)
    if (username === "Flipkart" && password === "1234") {
      // Redirect to home page
      window.location.href = "index.html";
    } else {
      alert("Invalid login credentials. Try user / 1234");
    }
  });
  