const h1 = document.querySelector("h1.hero-title");
SplitFX.animateSequence(h1, [
    // Start - Step 1
    {
        "content": `From idea to <span class="text-purple-600">live product</span> faster than ever`,
        "allowHTML": true,

        "in": {
            "mode": "words",
            "animation": "fadeRight",
            "duration": 800,
            "stagger": 200
        },
        "out": {
            "staggerDir": "backward",
            "delay": 3000
        }
    },
    // End - Step 1

    // Start - Step 2
    {
        "content": `Everything you need to <span class="text-purple-600">scale</span> your startup`,
        "allowHTML": true,

        "in": {
            "mode": "words",
            "animation": "fadeRight",
            "duration": 800,
            "stagger": 200
        },
        "out": {
            "staggerDir": "backward",
            "delay": 3000
        }
    },
    // End - Step 2

    // Start - Step 3
    {
        "content": `The complete platform for <span class="text-purple-600">modern SaaS founders</span>`,
        "allowHTML": true,

        "in": {
            "mode": "words",
            "animation": "fadeRight",
            "duration": 800,
            "stagger": 200
        },
        "out": {
            "staggerDir": "backward",
            "delay": 3000
        }
    }
    // End - Step 3

],
{repeat: "infinite"});

// Start - Animate on hover
const hoverOptions = {
    "in": {
        "mode": "words",
        "animation": "wobble",
        "duration": 1000,
        "easing": "linear",
        "stagger": 0
    },
    "out": {
        "duration": 0
    }
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
    "_comment": "You can change the movement distance of the fadeRight animation using the --sfx-distance CSS variable, or by setting the vars.distance option when creating a new SplitFX instance.",
    "in": {
        "mode": "words",
        "animation": "fadeRight",
        "duration": 800,
        "stagger": 200
    },
    "out": {
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