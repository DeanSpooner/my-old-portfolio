let pokememory = document.getElementById("pokememory");
let simon = document.getElementById("simon");
let dice = document.getElementById("dice");
let scrapbook = document.getElementById("scrapbook");

pokememory.addEventListener("mouseenter", function () {
    this.classList.add('pokememory-select');
});

pokememory.addEventListener("mouseleave", function () {
    this.classList.remove('pokememory-select');
});

simon.addEventListener("mouseenter", function () {
    this.classList.add('simon-select');
});

simon.addEventListener("mouseleave", function () {
    this.classList.remove('simon-select');
});

dice.addEventListener("mouseenter", function () {
    this.classList.add('dice-select');
});

dice.addEventListener("mouseleave", function () {
    this.classList.remove('dice-select');
});

scrapbook.addEventListener("mouseenter", function () {
    this.classList.add('scrapbook-select');
});

scrapbook.addEventListener("mouseleave", function () {
    this.classList.remove('scrapbook-select');
});