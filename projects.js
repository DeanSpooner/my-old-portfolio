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



// CLOCK JS

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const allHands = document.querySelectorAll('.hand')



function setDate() {
  const now = new Date(); //Grabs current now date and time and puts into a const.

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';

  if (secondsDegrees === 90) {
    allHands.forEach(hand => hand.style.transition = 'none')
  } else {
    allHands.forEach(hand => hand.style.transition = '')
  }
}

setInterval(setDate, 1000); //Makes this script run every 1000ms aka every second.
