// Helper to get cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let pair of cookies) {
    const [key, value] = pair.split("=");
    if (key === name) return value;
  }
  return null;
}

// Apply cookie values if available
window.onload = function () {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize + "px");
    document.getElementById("fontsize").value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    document.getElementById("fontcolor").value = savedColor;
  }
};

// Save preferences in cookies
document.getElementById("settingsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  // Set cookies
  document.cookie = `fontsize=${size}; path=/`;
  document.cookie = `fontcolor=${color}; path=/`;

  // Apply immediately
  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);

  alert("Preferences saved!");
});
