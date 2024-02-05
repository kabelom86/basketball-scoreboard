const homeScore = document.getElementById("home-score");
const homeButtons = document.querySelectorAll("#home-btns button");

function addHomeScore(event) {
  const value = parseInt(event.target.dataset.value);
  const currentScore = parseInt(homeScore.textContent);
  homeScore.textContent = currentScore + value;
}

homeButtons.forEach((button) => button.addEventListener("click", addHomeScore));

const guestScore = document.getElementById("guest-score");
const guestButtons = document.querySelectorAll("#guest-btns button");

function addGuestScore(event) {
  const value = parseInt(event.target.dataset.value);
  const currentScore = parseInt(guestScore.textContent);
  guestScore.textContent = currentScore + value;
}

guestButtons.forEach((button) => button.addEventListener("click", addGuestScore));