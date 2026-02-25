const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, "infinite", [
    // Start - Step 1
    {
        "class": "",
        "innerHTML": `From idea to <span class="text-purple-600">live product</span> faster than ever`,

        "mode": "words",
        "wrapper": "span",
        "includeSpace": true,
        "animationIn": {
            "animation": "fadeRightBig",
            "duration": 600,
            "easing": "ease",
            "stagger": 200,
            "staggerDir": "forward",
            "delay": 0
        },

        "animationOut": {
            "staggerDir": "backward",
            "delay": 3000
        }
    },
    // End - Step 1

    // Start - Step 2
    {
        "class": "",
        "innerHTML": `Everything you need to <span class="text-purple-600">scale</span> your startup`,

        "mode": "words",
        "wrapper": "span",
        "includeSpace": true,
        "animationIn": {
            "animation": "rotateTopRight",
            "duration": 600,
            "easing": "ease-out",
            "stagger": 200,
            "staggerDir": "forward",
            "delay": 0
        },

        "animationOut": {
            "staggerDir": "backward",
            "delay": 3000
        }
    },
    // End - Step 2

    // Start - Step 3
    {
        "class": "",
        "innerHTML": `The complete platform for <span class="text-purple-600">modern SaaS founders</span>`,

        "mode": "words",
        "wrapper": "span",
        "includeSpace": true,
        "animationIn": {
            "animation": "flipY",
            "duration": 600,
            "easing": "ease",
            "stagger": 200,
            "staggerDir": "forward",
            "delay": 0
        },

        "animationOut": {
            "staggerDir": "backward",
            "delay": 3000
        }
    }
    // End - Step 3

]);

// Start - Animate on hover
const hoverOptions = {
    "mode": "words",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "wobble",
        "duration": 1000,
        "easing": "linear",
        "stagger": 0,
        "staggerDir": "forward",
        "delay": 0
    },
    "animationOut": {
        "duration": 0,
        "stagger": 0,
        "delay": 0
    }
};

const navLinks = document.querySelectorAll(".nav-link, .sfx-btn");
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
    const headerTitle = header.querySelector("h3");
    faqHeadersSFX.prepare(headerTitle);
    faqHeadersSFX.animateOnHover(headerTitle, header);
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
    "mode": "words",
    "wrapper": "span",
    "includeSpace": true,
    "animationIn": {
        "animation": "wobble",
        "duration": 1200,
        "easing": "linear",
        "stagger": 0,
        "staggerDir": "forward",
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

// const featuresSec = document.getElementById("features");
// const featuresSecNestedTitles = featuresSec.querySelectorAll("h3");
// const featuresSecNestedTitlesSFX = new SplitFX({
//     "mode": "chars",
//     "wrapper": "span",
//     "includeSpace": false,
//     "animationIn": {
//         "animation": "rotateTopRight",
//         "duration": 400,
//         "easing": "ease-in-out",
//         "stagger": 50,
//         "staggerDir": "forward",
//         "delay": 0
//     },
//     "animationOut": {
//         "duration": 0,
//         "stagger": 0,
//         "delay": 0
//     }
// });
// featuresSecNestedTitlesSFX.prepare(featuresSecNestedTitles);
// featuresSecNestedTitlesSFX.animateOnScroll(featuresSecNestedTitles, true, {threshold: 1});
// // Start - Animate on scroll