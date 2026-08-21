const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("visible"));
}
