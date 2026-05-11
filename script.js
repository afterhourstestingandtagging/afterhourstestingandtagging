document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("cs-header-108");
  const menuToggle = document.querySelector("#cs-header-108 .cs-toggle");
  const navLinks = document.querySelectorAll("#cs-header-108 .cs-link");
  const fadeEl = document.querySelector("#why-choose-289 .cs-flex");

  if (header) {
    const updateHeader = () => {
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  if (header && menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("cs-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("cs-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  if (fadeEl && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        fadeEl.classList.toggle("show", entry.isIntersecting);
      });
    }, { threshold: 0.2 });

    observer.observe(fadeEl);
  } else if (fadeEl) {
    fadeEl.classList.add("show");
  }
});
