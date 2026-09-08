const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuToggle.addEventListener("click", () => {
    const menuIsOpen = header.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", menuIsOpen);
    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation" : "Open navigation"
    );
});

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});