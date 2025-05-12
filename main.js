// Toggle navigation menu (for mobile view)
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Star animation background
const starCount = 200;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random horizontal position
  star.style.left = Math.random() * 100 + "vw";

  // Random size
  const size = Math.random() * 4 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";

  // Random animation speed and delay
  star.style.animationDuration = (5 + Math.random() * 15) + "s";
  star.style.animationDelay = Math.random() * 12 + "s";

  // Add star to the body
  document.body.appendChild(star);
}

// Certificate modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("certificateModal"));
  const modalImage = document.getElementById("modalCertificateImage");

  document.querySelectorAll(".certi-card img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modal.show();
    });
  });
});