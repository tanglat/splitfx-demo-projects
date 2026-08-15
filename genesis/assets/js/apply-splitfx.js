const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, [
    // Start - Step 1
    {
        "content": "<span style='color: #F65C1B'>Build</span> &amp; <span style='color: #F65C1B'>Deploy</span> Smarter AI Agents in Minutes.",
        "allowHTML": true,
        
        "in": {
            "includeSpaces": false,
            "animation": "rotateTopRight",
            "easing": "linear",
            "staggerDir": "alternate"
        },

        "out": {
            "delay": 3000
        }
    },
    // End - Step 1

    // Start - Step 2
    {
        "content": "Turn Simple Prompts into <span style='color: #F65C1B'>Powerful</span> Automation.",
        "allowHTML": true,

        "in": {
            "includeSpaces": false,
            "animation": "fadeTop",
            "duration": 400,
            "easing": "linear",
            "stagger": 40,
            "staggerDir": "random"
        },

        "out": {
            "delay": 3000
        }
    },
    // End - Step 2

    // Start - Step 3
    {
        "content": "<span style='color: #F65C1B'>Automate</span> Your Business. <span style='color: #F65C1B'>Scale</span> Without Limits.",
        "allowHTML": true,

        "in": {
            "animation": "rotateRight",
            "easing": "steps(2)"
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
    "_comment": "You can change the movement distance of the jump animation using the --sfx-distance CSS variable, or by setting the vars.distance option when creating a new SplitFX instance.",
    "in": {
        "animation": "jump",
        "duration": 400,
        "easing": "ease-out",
        "stagger": 40,
        "staggerDir": "random"
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "vars": {
        "distance": "12px"
    }
});

const navLinks = document.querySelectorAll(".nav-link");
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
    const headerText = header.querySelector("span");
    hoverSFX.animateOnHover(headerText, {trigger: header});
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
    "_comment": "You can change the movement distance of the fadeRight animation using the --sfx-distance CSS variable, or by setting the vars.distance option when creating a new SplitFX instance.",
    "in": {
        "animation": "fadeRight",
        "duration": 1000,
        "stagger": 40
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

const theProcessSec = document.getElementById("the-process");
const theProcessSecNestedTitles = theProcessSec.querySelectorAll("h3");
const theProcessSecNestedTitlesSFX = new SplitFX({
    "in": {
        "animation": "zoomOutLeft"
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    }
});
theProcessSecNestedTitles.forEach(title => {
    theProcessSecNestedTitlesSFX.animateOnScroll(title, {repeat: true, observerOptions: {threshold: 1}});
});
// // Start - Animate on scroll