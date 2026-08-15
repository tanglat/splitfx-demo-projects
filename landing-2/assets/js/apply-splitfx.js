const h1 = document.querySelector("h1.hero-title");
const h1SFX = new SplitFX({
    "in": {
        "animation": "wipeTop",
        "duration": 1000,
        "stagger": 100,
        "staggerDir": "centerOut"
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    }
});
h1SFX.animateOnLoad(h1);

// Start - Animate on hover
const hoverSFX = new SplitFX({
    "in": {
        "animation": "flash",
        "duration": 150,
        "stagger": 15
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    }
});

const navLinks = document.querySelectorAll(".nav-link, .sfx-btn");
navLinks.forEach(link => {
    hoverSFX.animateOnHover(link);
});

const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    hoverSFX.animateOnHover(cardTitle, {trigger: card});
});

const testimonialCards = document.querySelectorAll(".testimonial-card");
testimonialCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    hoverSFX.animateOnHover(cardTitle, {trigger: card});
});

const faqHeaders = document.querySelectorAll(".faq-header");
faqHeaders.forEach(header => {
    const headerTitle = header.querySelector("h3");
    hoverSFX.animateOnHover(headerTitle, {trigger: header});
});

const pricingPlans = document.querySelectorAll(".pricing-plan");
pricingPlans.forEach(plan => {
    const cardTitle = plan.querySelector("h3");
    hoverSFX.animateOnHover(cardTitle, {trigger: plan});
});
// // End - Animate on hover

// // Start - Animate on scroll
const secTitles = document.querySelectorAll("h2");
const secTitlesSFX = new SplitFX({
    "in": {
        "animation": "wipeTop",
        "duration": 1000,
        "stagger": 100,
        "staggerDir": "centerOut"
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    }
});
secTitles.forEach(title => {
    secTitlesSFX.animateOnScroll(title, {repeat: true, observerOptions: {threshold: 1}});
});

// const featuresSec = document.getElementById("features");
// const featuresSecNestedTitles = featuresSec.querySelectorAll("h3");
// const featuresSecNestedTitlesSFX = new SplitFX({
//     "tagName": "span",
//     "in": {
//         "mode": "chars",
//         "includeSpaces": false,
//         "animation": "rotateTopRight",
//         "duration": 400,
//         "easing": "ease-in-out",
//         "stagger": 50,
//         "staggerDir": "forward",
//         "delay": 0
//     },
//     "out": {
//         "mode": "words",
//         "duration": 0,
//         "stagger": 0,
//         "delay": 0
//     }
// });
// featuresSecNestedTitles.forEach(title => {
//     featuresSecNestedTitlesSFX.animateOnScroll(title, {repeat: true, observerOptions: {threshold: 1}});
// });
// // Start - Animate on scroll