const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-white/15", "backdrop-blur-lg");
        } else {
            navbar.classList.remove("bg-white/15", "backdrop-blur-lg");
        }
    }

    window.addEventListener("scroll", handleScroll);
});


menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
});


let openIndex = null;
document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
        const index = header.getAttribute("data-index");
        const content = header.nextElementSibling;
        const icon = header.querySelector(".lucide-chevron-down-icon ");

        if (openIndex === index) {
            content.classList.remove("pt-2", "pb-4", "max-h-80");
            content.classList.add("max-h-0");
            icon.classList.remove("rotate-180");
            openIndex = null;
        } else {
            document.querySelectorAll(".faq-content").forEach(c => {
                c.classList.remove("pt-2", "pb-4", "max-h-80");
                c.classList.add("max-h-0");
            });
            document.querySelectorAll(".chevron").forEach(i => i.classList.remove("rotate-180"));

            content.classList.remove("max-h-0");
            content.classList.add("pt-2", "pb-4", "max-h-80");
            icon.classList.add("rotate-180");
            openIndex = index;
        }
    });
});