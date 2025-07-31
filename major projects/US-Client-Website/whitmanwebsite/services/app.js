      window.addEventListener('DOMContentLoaded', () => {
    // Show after 3 seconds
    setTimeout(() => {
      document.getElementById('popup').style.display = 'flex';
    }, 4000);

    // Close on ❌ click
    document.getElementById('popupClose').addEventListener('click', () => {
      document.getElementById('popup').style.display = 'none';
    });
  });

  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("active");
  });