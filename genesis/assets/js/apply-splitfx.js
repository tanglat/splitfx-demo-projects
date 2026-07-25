const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, [
    // Start - Step 1
    {
        "content": "<span style='color: #F65C1B'>Build</span> &amp; <span style='color: #F65C1B'>Deploy</span> Smarter AI Agents in Minutes.",
        "allowHTML": true,

        "tagName": "span",
        
        "in": {
            "mode": "chars",
            "includeSpaces": false,
            "animation": "rotateTopRight",
            "duration": 500,
            "easing": "linear",
            "stagger": 50,
            "staggerDir": "alternate",
            "delay": 0
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

        "mode": "chars",
        "tagName": "span",
        "includeSpaces": true,

        "in": {
            "animation": "fadeTop",
            "duration": 300,
            "easing": "linear",
            "stagger": 50,
            "staggerDir": "random",
            "delay": 0
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

        "mode": "chars",
        "tagName": "span",
        "includeSpaces": true,

        "in": {
            "animation": "rotateRight",
            "duration": 500,
            "easing": "steps(2)",
            "stagger": 50,
            "staggerDir": "forward",
            "delay": 0
        },

        "out": {
            "delay": 3000
        }
    }
    // End - Step 3

],
{repeat: "infinite"});

// Start - Animate on hover
const hoverOptions = {
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "jump",
        "duration": 400,
        "easing": "ease-out",
        "stagger": 40,
        "staggerDir": "random",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span",
    "vars": {
        "distance": "12px"
    }
};

const navLinks = document.querySelectorAll(".nav-link");
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
    const headerText = header.querySelector("span");
    faqHeadersSFX.animateOnHover(headerText, {trigger: header});
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
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": false,
        "animation": "rotateTopRight",
        "duration": 500,
        "easing": "linear",
        "stagger": 50,
        "staggerDir": "alternate",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
secTitles.forEach(title => {
    secTitlesSFX.animateOnScroll(title, {repeat: true, observerOptions: {threshold: 1}});
});

const theProcessSec = document.getElementById("the-process");
const theProcessSecNestedTitles = theProcessSec.querySelectorAll("h3");
const theProcessSecNestedTitlesSFX = new SplitFX({
    "tagName": "span",
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "zoomOutLeft",
        "duration": 500,
        "easing": "ease",
        "stagger": 50,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
theProcessSecNestedTitles.forEach(title => {
    theProcessSecNestedTitlesSFX.animateOnScroll(title, {repeat: true, observerOptions: {threshold: 1}});
});
// // Start - Animate on scroll