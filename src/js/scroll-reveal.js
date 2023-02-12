ScrollReveal({ reset: true });

const sectionAbout = {
    cards: '.about'
}

const sectionPlans = {
    cardsPlans: '.cards'
}

function applyReveal(target, time) {
    ScrollReveal().reveal(target, {delay: time});
}

applyReveal(sectionAbout.cards, 200)
applyReveal(sectionPlans.cardsPlans, 200)