const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, [
    // Start - Step 1
    {
        content: "Discover new places, and enjoy every moment.",
        allowHTML: true,

        tagName: "span",
        
        in: {
            mode: "chars",
            includeSpaces: true,
            animation: "zoomIn",
            duration: 400,
            easing: "steps(2)",
            stagger: 40,
            staggerDir: "random",
            delay: 0
        },

        out: {
            delay: 3000
        }
    },
    // End - Step 1

    // Start - Step 2
    {
        content: "Plan easily, explore freely, remember forever.",
        allowHTML: true,

        tagName: "span",
        
        in: {
            mode: "chars",
            includeSpaces: true,
            animation: "rotateTopRight",
            duration: 600,
            easing: "ease",
            stagger: 60,
            staggerDir: "forward",
            delay: 0
        },

        out: {
            staggerDir: "backward",
            delay: 3000
        }
    },
    // End - Step 2

    // Start - Step 3
    {
        content: "Choose your destination. We handle the rest.",
        allowHTML: true,

        tagName: "span",
        
        in: {
            mode: "chars",
            includeSpaces: true,
            animation: "fadeBottom",
            duration: 500,
            easing: "ease",
            stagger: 50,
            staggerDir: "alternate",
            delay: 0
        },

        out: {
            delay: 3000
        }
    }
    // End - Step 3

],
{repeat: "infinite"});

// Start - Animate on hover
const navLinks = document.querySelectorAll(".nav-link");
const navSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "wobble",
        "duration": 800,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "animation": "wobble",
        "duration": 0,
        "easing": "linear",
        "stagger": 0,
        "staggerDir": "forward",
        "delay": 0
    }
});
navLinks.forEach(link => {
    navSFX.animateOnHover(link);
});

const serviceCards = document.querySelectorAll(".service-card");
const serviceCardsSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "wobble",
        "duration": 800,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
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
    serviceCardsSFX.animateOnHover(cardTitle, {trigger: card});
});

const destinationCards = document.querySelectorAll("#destination .card");
const destinationCardsSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "wobble",
        "duration": 800,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
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
    destinationCardsSFX.animateOnHover(cardTitle, {trigger: card});
});
// End - Animate on hover

// Start - Animate on scroll
const serviceSec = document.getElementById("service");
const serH2 = serviceSec.querySelector("h2");
const serSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "zoomOut",
        "duration": 800,
        "easing": "ease",
        "stagger": 80,
        "staggerDir": "centerOut",
        "delay": 0
    },
    "out": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
serSFX.animateOnScroll(serH2, {repeat: true, observerOptions: {threshold: .5}});

const destinationSec = document.getElementById("destination");
const destH2 = destinationSec.querySelector("h2");
const destSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "zoomOut",
        "duration": 800,
        "easing": "ease",
        "stagger": 80,
        "staggerDir": "centerOut",
        "delay": 0
    },
    "out": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
destSFX.animateOnScroll(destH2, {repeat: true, observerOptions: {threshold: .5}});

const bookingSec = document.getElementById("booking");
const bookH2 = bookingSec.querySelector("h2");
const bookSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "fadeRight",
        "duration": 500,
        "easing": "ease",
        "stagger": 50,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
bookSFX.animateOnScroll(bookH2, {repeat: true, observerOptions: {threshold: .5}});

const testimonialSec = document.getElementById("testimonial");
const testimonialH2 = testimonialSec.querySelector("h2");
const testimonialSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "fadeRight",
        "duration": 500,
        "easing": "ease",
        "stagger": 50,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
testimonialSFX.animateOnScroll(testimonialH2, {repeat: true, observerOptions: {threshold: .5}});

const footerSec = document.getElementById("footer");
const footerH2Childs = footerSec.querySelectorAll("h2");
const footerSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "fadeRight",
        "duration": 800,
        "easing": "ease",
        "stagger": 80,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
footerH2Childs.forEach(title => {
    footerSFX.animateOnScroll(title, {repeat: true, observerOptions: {threshold: .5}});
});
// Start - Animate on scroll