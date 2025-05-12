const app = document.getElementById("page");

console.log("router is running!");
const routes = {
  home: "./pages/homepage.html",
  about: "./pages/about.html",
  services: "./pages/services.html",
  contact: "./pages/contact.html"
};

function loadPage(route) {
  if (routes[route] && route !== "home") {
    fetch(routes[route])
      .then(res => res.text())
      .then(html => app.innerHTML = html)
      .catch(() => app.innerHTML = "<p>Page not found.</p>");
  } else {
    fetch(routes["home"])
    .then(res => res.text())
    .then(html => app.innerHTML = html)
    .catch(() => app.innerHTML = "<p>Page not found.</p>");
  }
}

window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#", "") || "home";
  loadPage(route);
});

// Initial load
loadPage(location.hash.replace("#", "") || "home");

