const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;

function flipCard() {
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

  function checkforMatch() {

    let isMatched = firstCard.dataset.name === secondCard.dataset.name;
    isMatched ? disableCards() : unFlipCards ();
  }
     

function desableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unFlipCards() {
    setTimeout(() =>{
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")

    }, 1500) 
}



cards.forEach(function (card) {
    card.addEventListener("click", flipCard);
});

