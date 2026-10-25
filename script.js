const wallpaper = document.getElementById("wallpaper");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const theme = thumb.dataset.theme;
    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    wallpaper.dataset.theme = theme === "aurora" ? "" : theme;
  });
});

const form = document.getElementById("buyForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();

  if (!name || !contact) {
    status.textContent = "Please add your name and contact details.";
    status.classList.add("error");
    return;
  }

  status.classList.remove("error");
  status.textContent = `Thanks, ${name}! Your request is ready — I'll reply at ${contact}.`;
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
