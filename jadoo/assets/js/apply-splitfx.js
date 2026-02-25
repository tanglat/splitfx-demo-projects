const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, "infinite", [
    // Start - Step 1
    {
        class: "",
        innerHTML: "Discover new places, and enjoy every moment.",

        mode: "chars",
        wrapper: "span",
        includeSpace: true,

        animationIn: {
            animation: "zoomIn",
            duration: 400,
            easing: "steps(2)",
            stagger: 40,
            staggerDir: "random",
            delay: 0
        },

        animationOut: {
            delay: 3000
        }
    },
    // End - Step 1

    // Start - Step 2
    {
        class: "",
        innerHTML: "Plan easily, explore freely, remember forever.",

        mode: "chars",
        wrapper: "span",
        includeSpace: true,

        animationIn: {
            animation: "rotateTopRight",
            duration: 600,
            easing: "ease",
            stagger: 60,
            staggerDir: "forward",
            delay: 0
        },

        animationOut: {
            staggerDir: "backward",
            delay: 3000
        }
    },
    // End - Step 2

    // Start - Step 3
    {
        class: "",
        innerHTML: "Choose your destination. We handle the rest.",

        mode: "chars",
        wrapper: "span",
        includeSpace: true,

        animationIn: {
            animation: "fadeBottom",
            duration: 500,
            easing: "ease",
            stagger: 50,
            staggerDir: "alternate",
            delay: 0
        },

        animationOut: {
            delay: 3000
        }
    }
    // End - Step 3

]);

// Start - Animate on hover
const navLinks = document.querySelectorAll(".nav-link");
const navSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "wobble",
        "duration": 800,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "forward",
        "delay": 0
    },
    "animationOut": {
        "animation": "wobble",
        "duration": 0,
        "easing": "linear",
        "stagger": 0,
        "staggerDir": "forward",
        "delay": 0
    }
});
navSFX.prepare(navLinks);
navLinks.forEach(link => {
    navSFX.animateOnHover(link);
});

const serviceCards = document.querySelectorAll(".service-card");
const serviceCardsSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "wobble",
        "duration": 800,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "forward",
        "delay": 0
    },
    "animationOut": {
        "animation": "wobble",
        "duration": 0,
        "easing": "linear",
        "stagger": 0,
        "staggerDir": "forward",
        "delay": 0
    }
});
serviceCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    serviceCardsSFX.prepare(cardTitle);
    serviceCardsSFX.animateOnHover(cardTitle, card);
});

const destinationCards = document.querySelectorAll("#destination .card");
const destinationCardsSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "wobble",
        "duration": 800,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "forward",
        "delay": 0
    },
    "animationOut": {
        "animation": "wobble",
        "duration": 0,
        "easing": "linear",
        "stagger": 0,
        "staggerDir": "forward",
        "delay": 0
    }
});
destinationCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    destinationCardsSFX.prepare(cardTitle);
    destinationCardsSFX.animateOnHover(cardTitle, card);
});
// End - Animate on hover

// Start - Animate on scroll
const serviceSec = document.getElementById("service");
const serH2 = serviceSec.querySelector("h2");
const serSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "zoomOut",
        "duration": 800,
        "easing": "ease",
        "stagger": 80,
        "staggerDir": "centerOut",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
serSFX.prepare(serH2);
serSFX.animateOnScroll(serH2, true, {threshold: 1});

const destinationSec = document.getElementById("destination");
const destH2 = destinationSec.querySelector("h2");
const destSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "zoomOut",
        "duration": 800,
        "easing": "ease",
        "stagger": 80,
        "staggerDir": "centerOut",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
destSFX.prepare(destH2);
destSFX.animateOnScroll(destH2, true, {threshold: 1});

const bookingSec = document.getElementById("booking");
const bookH2 = bookingSec.querySelector("h2");
const bookSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "fadeRightBig",
        "duration": 500,
        "easing": "ease",
        "stagger": 50,
        "staggerDir": "forward",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
bookSFX.prepare(bookH2);
bookSFX.animateOnScroll(bookH2, true, {threshold: 1});

const testimonialSec = document.getElementById("testimonial");
const testimonialH2 = testimonialSec.querySelector("h2");
const testimonialSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "fadeRightBig",
        "duration": 500,
        "easing": "ease",
        "stagger": 50,
        "staggerDir": "forward",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
testimonialSFX.prepare(testimonialH2);
testimonialSFX.animateOnScroll(testimonialH2, true, {threshold: 1});

const footerSec = document.getElementById("footer");
const footerH2Childs = footerSec.querySelectorAll("h2");
const footerSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "fadeRightBig",
        "duration": 800,
        "easing": "ease",
        "stagger": 80,
        "staggerDir": "forward",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
footerSFX.prepare(footerH2Childs);
footerSFX.animateOnScroll(footerH2Childs, true, {threshold: 1});
// Start - Animate on scroll