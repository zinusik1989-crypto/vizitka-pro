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

// Переключение мобильной версии
const mobileToggle = document.getElementById("mobileToggle");
const mobileLabel = mobileToggle.querySelector(".mobile-toggle__label");
const mobileIcon = mobileToggle.querySelector(".mobile-toggle__icon");

const applyMobileMode = (on) => {
  document.body.classList.toggle("force-mobile", on);
  document.documentElement.classList.toggle("force-mobile-html", on);
  mobileLabel.textContent = on ? "Полная версия" : "Мобильная версия";
  mobileIcon.textContent = on ? "💻" : "📱";
};

applyMobileMode(localStorage.getItem("viewMode") === "mobile");

mobileToggle.addEventListener("click", () => {
  const on = !document.body.classList.contains("force-mobile");
  applyMobileMode(on);
  localStorage.setItem("viewMode", on ? "mobile" : "full");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Кнопка «Наверх»
const toTop = document.getElementById("toTop");
const onScrollTop = () => toTop.classList.toggle("visible", window.scrollY > 400);
onScrollTop();
window.addEventListener("scroll", onScrollTop);
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
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
