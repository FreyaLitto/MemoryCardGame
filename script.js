const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;

function flipCard() {
this.classList.toggle("flip");

if(!cardIsFlipped){
    //first click, first card
    cardIsFlipped = true;
    firstCard = this;

   

} else {
    // second click, second card
    cardIsFlipped = false;
    secondCard = this;
    console.log({ firstCard, secondCard})


    if(firstCard.dataset.name === secondCard.dataset.name) {
        disableCards();

    } else {
      unflipCards();
    }
}
}
function desableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
    setTimeout(() =>{
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")

    }, 1500) 
}



cards.forEach(function (card) {
    card.addEventListener("click", flipCard);
});

