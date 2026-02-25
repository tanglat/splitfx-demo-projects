const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, "infinite", [
    // Start - Step 1
    {
        "class": "",
        "innerHTML": "<span style='color: #F65C1B'>Build</span> &amp; <span style='color: #F65C1B'>Deploy</span> Smarter AI Agents in Minutes.",

        "mode": "chars",
        "wrapper": "span",
        "includeSpace": false,

        "animationIn": {
            "animation": "rotateTopRight",
            "duration": 500,
            "easing": "linear",
            "stagger": 50,
            "staggerDir": "alternate",
            "delay": 0
        },

        "animationOut": {
            "delay": 3000
        }
    },
    // End - Step 1

    // Start - Step 2
    {
        "class": "",
        "innerHTML": "Turn Simple Prompts into <span style='color: #F65C1B'>Powerful</span> Automation.",

        "mode": "chars",
        "wrapper": "span",
        "includeSpace": true,

        "animationIn": {
            "animation": "fadeTop",
            "duration": 300,
            "easing": "linear",
            "stagger": 50,
            "staggerDir": "random",
            "delay": 0
        },

        "animationOut": {
            "delay": 3000
        }
    },
    // End - Step 2

    // Start - Step 3
    {
        "class": "",
        "innerHTML": "<span style='color: #F65C1B'>Automate</span> Your Business. <span style='color: #F65C1B'>Scale</span> Without Limits.",

        "mode": "chars",
        "wrapper": "span",
        "includeSpace": true,

        "animationIn": {
            "animation": "rotateRight",
            "duration": 500,
            "easing": "steps(2)",
            "stagger": 50,
            "staggerDir": "forward",
            "delay": 0
        },

        "animationOut": {
            "delay": 3000
        }
    }
    // End - Step 3

]);

// Start - Animate on hover
const hoverOptions = {
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "jump",
        "duration": 400,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "alternate",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
};

const navLinks = document.querySelectorAll(".nav-link");
const navSFX = new SplitFX(hoverOptions);
navSFX.prepare(navLinks);
navLinks.forEach(link => {
    navSFX.animateOnHover(link);
});

const featureCards = document.querySelectorAll(".feature-card");
const featureCardsSFX = new SplitFX(hoverOptions);
featureCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    featureCardsSFX.prepare(cardTitle);
    featureCardsSFX.animateOnHover(cardTitle, card);
});

const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialCardsSFX = new SplitFX(hoverOptions);
testimonialCards.forEach(card => {
    const cardTitle = card.querySelector("h3");
    testimonialCardsSFX.prepare(cardTitle);
    testimonialCardsSFX.animateOnHover(cardTitle, card);
});

const faqHeaders = document.querySelectorAll(".faq-header");
const faqHeadersSFX = new SplitFX(hoverOptions);
faqHeaders.forEach(header => {
    const headerText = header.querySelector("span");
    faqHeadersSFX.prepare(headerText);
    faqHeadersSFX.animateOnHover(headerText, header);
});

const pricingPlans = document.querySelectorAll(".pricing-plan");
const pricingPlansSFX = new SplitFX(hoverOptions);
pricingPlans.forEach(plan => {
    const cardTitle = plan.querySelector("h3");
    pricingPlansSFX.prepare(cardTitle);
    pricingPlansSFX.animateOnHover(cardTitle, plan);
});
// // End - Animate on hover

// // Start - Animate on scroll
const secTitles = document.querySelectorAll("h2");
const secTitlesSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": false,
    "animationIn": {
        "animation": "rotateTopRight",
        "duration": 500,
        "easing": "linear",
        "stagger": 50,
        "staggerDir": "alternate",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
});
secTitlesSFX.prepare(secTitles);
secTitlesSFX.animateOnScroll(secTitles, true, {threshold: 1});

const theProcessSec = document.getElementById("the-process");
const theProcessSecNestedTitles = theProcessSec.querySelectorAll("h3");
const theProcessSecNestedTitlesSFX = new SplitFX({
    "mode": "chars",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "zoomOutLeft",
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
theProcessSecNestedTitlesSFX.prepare(theProcessSecNestedTitles);
theProcessSecNestedTitlesSFX.animateOnScroll(theProcessSecNestedTitles, true, {threshold: 1});
// // Start - Animate on scroll