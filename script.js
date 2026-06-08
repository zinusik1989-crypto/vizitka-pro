// Год в футере
document.getElementById("year").textContent = new Date().getFullYear();

// Фон навигации при прокрутке
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll);

// Бургер-меню
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Плавное появление блоков при прокрутке
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
