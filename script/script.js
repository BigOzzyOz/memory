let isFlipping = false;
let isFlipping2 = false;


/**
 * Flips a card element and checks for a match.
 *
 * @param {HTMLElement} element - The card element to flip.
 * @param {Event} event - The event that triggered the flip.
 *
 * @returns {void}
 */
function flip(element, event) {
  event.preventDefault();
  if (isFlipping && isFlipping2) return;

  isFlipping2 = isFlipping ? true : false;
  isFlipping = true;
  let card = element.firstElementChild;
  card.style.transform = 'rotateY(180deg)';
  checkMatch();
  setTimeout(() => {
    isFlipping = false;
    isFlipping2 = false;
  }, 1500);
}

/**
 * Checks for a match between two flipped cards.
 * If a match is found, the matchedCards function is called.
 * If no match is found, the flipBack function is called after a 1-second delay.
 *
 * @returns {void}
 */
function checkMatch() {
  let flippedCards = document.querySelectorAll('.flip-card-inner[style="transform: rotateY(180deg);"]');
  if (flippedCards.length === 2) {
    flippedCards[0].lastElementChild.firstElementChild.src === flippedCards[1].lastElementChild.firstElementChild.src ? matchedCards(flippedCards) : setTimeout(flipBack, 1000, flippedCards);
  }
}

function matchedCards(flippedCards) {
  flippedCards.forEach(card => card.classList.add('match'));
}

function flipBack(card) {
  card.forEach(card => card.style.transform = '');
}

function renderGameBoard(size) {
  for (let i = 0; i < size; i++) {

  }
}

function startGame() {

}

