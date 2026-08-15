const h1 = document.querySelector("h1.hero-title");
const nested = h1.querySelector(".nested");

const textAnimator = new SplitFX({
    "in": {
        "animation": "typeWriter",
        "duration": 120,
        "easing": "linear",
        "stagger": 120
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
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
            "content": "Marketing",

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
            "content": "Automation",

            "in": {
                "animation": "typeWriter",
                "duration": 120,
                "easing": "linear",
                "stagger": 120
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            "content": "Customer Support",

            "in": {
                "animation": "typeWriter",
                "duration": 120,
                "easing": "linear",
                "stagger": 120
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            "content": "Sales",

            "in": {
                "animation": "typeWriter",
                "duration": 120,
                "easing": "linear",
                "stagger": 120
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            "content": "Automation",

            "in": {
                "animation": "typeWriter",
                "duration": 120,
                "easing": "linear",
                "stagger": 120
            },
            "out": {
                "duration": 50,
                "stagger": 50,
                "staggerDir": "backward",
                "delay": 2000
            }
        },
        {
            "content": "Marketing",

            "in": {
                "animation": "typeWriter",
                "duration": 120,
                "easing": "linear",
                "stagger": 120
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
const hoverSFX = new SplitFX({
    "in": {
        "includeSpaces": false,
        "animation": "shakeX",
        "duration": 200,
        "easing": "linear",
        "stagger": 40,
        "staggerDir": "centerOut"
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
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
    "_comments": [
        "Ensure stagger is >= duration to correctly simulate typing behavior",
        "You can customize the typing cursor color and width for the typeWriter animation using the --sfx-cursor-color and --sfx-cursor-width CSS variables, or by setting the vars.cursorColor and vars.cursorWidth options when creating a new SplitFX instance."
    ],
    "in": {
        "animation": "typeWriter",
        "duration": 80,
        "easing": "linear",
        "stagger": 80
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
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
    "_comments": [
        "Ensure stagger is >= duration to correctly simulate typing behavior",
        "You can customize the typing cursor color and width for the typeWriter animation using the --sfx-cursor-color and --sfx-cursor-width CSS variables, or by setting the vars.cursorColor and vars.cursorWidth options when creating a new SplitFX instance."
    ],
    "in": {
        "animation": "typeWriter",
        "duration": 80,
        "easing": "linear",
        "stagger": 80
    },
    "out": {
        "mode": "words",
        "duration": 0,
        "stagger": 0
    },
    "vars": {
        "cursorColor": "white"
    }
});
theProcessSecNestedTitles.forEach(title => {
    theProcessSecNestedTitlesSFX.animateOnScroll(title, {repeat: false, observerOptions: {threshold: 1}});
});
// // Start - Animate on scroll