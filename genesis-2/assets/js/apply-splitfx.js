const h1 = document.querySelector("h1.hero-title");
const nested = h1.querySelector(".nested");

const textAnimator = new SplitFX({
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "typeWriter",
        "duration": 120,
        "easing": "linear",
        "stagger": 120,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span",
    "vars": {
        "cursorColor": "white"
    }
});

textAnimator.prepare(h1);
textAnimator.animateOnLoad(h1);

window.addEventListener("load", () => {
textAnimator.animateIn(h1)
.onfinish = () => {
    SplitFX.animateSequence(nested, [
        {
            content: "Marketing",

            "in": {
                "animation": "flash",
                "duration": 0,
                "easing": "linear",
                "stagger": 0
            },
            "out": {
                "animation": "typeWriter",
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            content: "Automation",

            "in": {
                "animation": "typeWriter",
                "duration": 130,
                "easing": "linear",
                "stagger": 130
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            content: "Customer Support",

            "in": {
                "animation": "typeWriter",
                "duration": 130,
                "easing": "linear",
                "stagger": 130
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            content: "Sales",

            "in": {
                "animation": "typeWriter",
                "duration": 130,
                "easing": "linear",
                "stagger": 130
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            content: "Automation",

            "in": {
                "animation": "typeWriter",
                "duration": 130,
                "easing": "linear",
                "stagger": 130
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            content: "Marketing",

            "in": {
                "animation": "typeWriter",
                "duration": 130,
                "easing": "linear",
                "stagger": 130
            },
            "out": {
                "animation": "flash",
                "duration": 0,
                "stagger": 0,
                "staggerDir": "backward",
                "delay": 0
            }
        },
    ]);
};
});


// Start - Animate on hover
const hoverOptions = {
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "shakeX",
        "duration": 200,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "centerOut",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span"
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
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "typeWriter",
        "duration": 100,
        "easing": "linear",
        "stagger": 100,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span",
    "vars": {
        "cursorColor": "white"
    }
});
secTitles.forEach(title => {
    secTitlesSFX.animateOnScroll(title, {repeat: false, observerOptions: {threshold: 1}});
});

const theProcessSec = document.getElementById("the-process");
const theProcessSecNestedTitles = theProcessSec.querySelectorAll("h3");
const theProcessSecNestedTitlesSFX = new SplitFX({
    "in": {
        "mode": "chars",
        "includeSpaces": true,
        "animation": "typeWriter",
        "duration": 100,
        "easing": "linear",
        "stagger": 100,
        "staggerDir": "forward",
        "delay": 0
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "tagName": "span",
    "vars": {
        "cursorColor": "white"
    }
});
theProcessSecNestedTitles.forEach(title => {
    theProcessSecNestedTitlesSFX.animateOnScroll(title, {repeat: false, observerOptions: {threshold: 1}});
});
// // Start - Animate on scroll