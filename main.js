function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

const starCount = 200;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 4 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.animationDuration = (5 + Math.random() * 15) + "s";
  star.style.animationDelay = Math.random() * 12 + "s";

  document.body.appendChild(star);
}

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