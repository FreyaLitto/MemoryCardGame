const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard)return;
    if(this === firstCard)return;
this.classList.add("flip");

if(!cardIsFlipped){
    //first click, first card
    cardIsFlipped = true;
    firstCard = this;

    return;
}

    // second click, second card
    cardIsFlipped = false;
    secondCard = this;
   

    checkForMatch();
}

  function checkForMatch() {

    let isMatched = firstCard.dataset.name === secondCard.dataset.name;
    isMatched ? disableCards() : unFlipCards ();
  }
     

function desableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() =>{
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetBoard();

    }, 1500) 
}

function resetBoard() {
    [cardIsFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(function (card) {
    card.addEventListener("click", flipCard);
});

