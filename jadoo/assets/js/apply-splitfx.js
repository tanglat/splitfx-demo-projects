const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, [
    // Start - Step 1
    {
        "content": "Discover new places, and enjoy every moment.",
        
        "in": {
            "includeSpaces": false,
            "animation": "zoomIn",
            "duration": 400,
            "easing": "steps(2)",
            "stagger": 40,
            "staggerDir": "random"
        },
        "out": {
            "delay": 3000
        }
    },
    // End - Step 1

    // Start - Step 2
    {
        "content": "Plan easily, explore freely, remember forever.",

        "in": {
            "includeSpaces": false,
            "animation": "rotateTopRight",
            "easing": "ease-in-out"
        },
        "out": {
            "staggerDir": "backward",
            "delay": 3000
        }
    },
    // End - Step 2

    // Start - Step 3
    {
        "content": "Choose your destination. We handle the rest.",
        
        "in": {
            "animation": "fadeBottom",
            "staggerDir": "alternate"
        },
        "out": {
            "delay": 3000
        }
    }
    // End - Step 3

],
{repeat: "infinite"});

// Start - Animate on hover
const hoverSFX = new SplitFX({
    "in": {
        "animation": "wobble",
        "duration": 800,
        "easing": "linear",
        "stagger": 40
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    }
})

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    hoverSFX.animateOnHover(link);
});

const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    hoverSFX.animateOnHover(cardTitle, {trigger: card});
});

const destinationCards = document.querySelectorAll("#destination .card");
destinationCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    hoverSFX.animateOnHover(cardTitle, {trigger: card});
});
// End - Animate on hover

// Start - Animate on scroll
const centeredTitlesSFX = new SplitFX({
    "in": {
        "animation": "zoomOut",
        "easing": "ease-in",
        "staggerDir": "centerOut"
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    }
});

const titlesSFX = new SplitFX({
    "_comment": "You can change the movement distance of the fadeRight animation using the --sfx-distance CSS variable, or by setting the vars.distance option when creating a new SplitFX instance.",
    "in": {
        "animation": "fadeRight"
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    }
});

const serviceSec = document.getElementById("service");
const serH2 = serviceSec.querySelector("h2");
centeredTitlesSFX.animateOnScroll(serH2, {repeat: true, observerOptions: {threshold: .5}});

const destinationSec = document.getElementById("destination");
const destH2 = destinationSec.querySelector("h2");
centeredTitlesSFX.animateOnScroll(destH2, {repeat: true, observerOptions: {threshold: .5}});

const bookingSec = document.getElementById("booking");
const bookH2 = bookingSec.querySelector("h2");
titlesSFX.animateOnScroll(bookH2, {repeat: true, observerOptions: {threshold: .5}});

const testimonialSec = document.getElementById("testimonial");
const testimonialH2 = testimonialSec.querySelector("h2");
titlesSFX.animateOnScroll(testimonialH2, {repeat: true, observerOptions: {threshold: .5}});

const footerSec = document.getElementById("footer");
const footerH2Childs = footerSec.querySelectorAll("h2");
footerH2Childs.forEach(title => {
    titlesSFX.animateOnScroll(title, {repeat: true, observerOptions: {threshold: .5}});
});
// Start - Animate on scroll