const h1 = document.querySelector("h1.hero-title");
const h1SFX = new SplitFX({
    "in": {
        "mode": "chars",
        "includeSpaces": false,
        "animation": "wipeTop",
        "duration": 1000,
        "easing": "ease",
        "stagger": 100,
        "staggerDir": "centerOut",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span"
});
h1SFX.animateOnLoad(h1);

// Start - Animate on hover
const hoverOptions = // Copy this config object and pass it to your SplitFX instance
{
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "flash",
        "duration": 200,
        "easing": "ease",
        "stagger": 10,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span"
};

const navLinks = document.querySelectorAll(".nav-link, .sfx-btn");
const navSFX = new SplitFX(hoverOptions);
navLinks.forEach(link => {
    navSFX.animateOnHover(link);
});

const featureCards = document.querySelectorAll(".feature-card");
const featureCardsSFX = new SplitFX(hoverOptions);
featureCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    featureCardsSFX.animateOnHover(cardTitle, {trigger: card});
});

const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialCardsSFX = new SplitFX(hoverOptions);
testimonialCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    testimonialCardsSFX.animateOnHover(cardTitle, {trigger: card});
});

const faqHeaders = document.querySelectorAll(".faq-header");
const faqHeadersSFX = new SplitFX(hoverOptions);
faqHeaders.forEach(header => {
    const headerTitle = header.querySelector("h3");
    faqHeadersSFX.animateOnHover(headerTitle, {trigger: header});
});

const pricingPlans = document.querySelectorAll(".pricing-plan");
const pricingPlansSFX = new SplitFX(hoverOptions);
pricingPlans.forEach(plan => {
    const cardTitle = plan.querySelector("h3");
    pricingPlansSFX.animateOnHover(cardTitle, {trigger: plan});
});
// // End - Animate on hover

// // Start - Animate on scroll
const secTitles = document.querySelectorAll("h2");
const secTitlesSFX = new SplitFX({
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "wipeTop",
        "duration": 1000,
        "easing": "ease",
        "stagger": 100,
        "staggerDir": "centerOut",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span"
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