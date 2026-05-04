// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

// API call
function fetchData() {
  fetch("https://api.github.com/users/github")
    .then(res => res.json())
    .then(data => {
      document.getElementById("api-data").innerText =
        `👤 ${data.login} | Followers: ${data.followers}`;
    })
    .catch(() => {
      document.getElementById("api-data").innerText = "Error loading data";
    });
}