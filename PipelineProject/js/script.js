
// Default theme
document.body.classList.add("dark");

// Toggle Theme
function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark", "light");
  } else {
    document.body.classList.replace("light", "dark");
  }
}

// Fetch API Data
function fetchData() {
  fetch("https://api.github.com/users/github")
    .then(response => response.json())
    .then(data => {
      document.getElementById("api-data").innerText =
        `👤 ${data.login} | Followers: ${data.followers}`;
    })
    .catch(error => {
      document.getElementById("api-data").innerText = "Error fetching data";
    });
}