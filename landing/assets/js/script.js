// Mobile Menu Toggle
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

openMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    document.body.classList.add("overflow-hidden");
    navbar.classList.remove("backdrop-blur");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden");
    navbar.classList.add("backdrop-blur");
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const logo = document.getElementById("logo");
const colorSplash = document.getElementById("colorSplash");
const faqSplash = document.getElementById("faqSplash");
const logoFooter = document.getElementById("logo-footer");

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        logo.src = "./assets/imgs/logo-light.svg";
        themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;
        logoFooter.src = "./assets/imgs/logo-light.svg";
    } else {
        logo.src = "./assets/imgs/logo-dark.svg";
        themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        logoFooter.src = "./assets/imgs/logo-dark.svg";
    }
});


// Accordion Logic
const faqItems = document.querySelectorAll("#faq-container > div");

faqItems.forEach(item => {
    const chevron = item.querySelector("[data-chevron]");
    const answer = item.querySelector(".faq-answer");

    item.addEventListener("click", () => {
        const isOpen = answer.classList.contains("opacity-100");

        // Close all
        faqItems.forEach(i => {
            i.querySelector(".faq-answer").classList.remove("opacity-100", "max-h-[500px]", "translate-y-0", "pt-4");
            i.querySelector(".faq-answer").classList.add("opacity-0", "max-h-0", "-translate-y-2");
            i.querySelector("[data-chevron]").classList.remove("rotate-180");
        });

        // Toggle current
        if (!isOpen) {
            answer.classList.add("opacity-100", "max-h-[500px]", "translate-y-0", "pt-4");
            answer.classList.remove("opacity-0", "max-h-0", "-translate-y-2");
            chevron.classList.add("rotate-180");
        }
    });
});