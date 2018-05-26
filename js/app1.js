/*
 * Create a list that holds all of your cards
 */
/*

function gameCreate(){
    for(let i=0; i < cards.length; i++){
      const deck = document.createElement("li");
      deck.classList.add("card");
      deck.innerHTML = '<i class="' + shuffleIcons[i] + '"</i>';
      selectDeck.appendChild(deck);

      deck.addEventListener('click', function(){
        deck.classList.add('open', 'show', 'disabled')
      });
  }
}

*/

const card = document.getElementsByClassName('card');
let cards = [...card];


//create a new game
const deck = document.querySelector(".deck");
let shuffleCards = shuffle(cards);

/*function createGame() {
    for (let i = 0; i < shuffleCards.length; i++) {
        Array.prototype.forEach.call(shuffleCards, function(addItem) {
            deck.appendChild(addItem);
        });
    }
}*/


function createGame() {
    shuffleCards.forEach(function(addCards) {
        deck.appendChild(addCards);
    });
}

createGame();

let clickedCards = [];

let moves = 0;

let matched = [];
let countingMoves = document.querySelector('.moves');
countingMoves.innerHTML = moves;


const starsAll = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;
starsAll.innerHTML = star + star + star;

cards.forEach(function(card) {
    card.addEventListener('click', function(elem) {
        clickedCards.push(card);
        card.classList.add('open', 'show', 'disabled');

        if (clickedCards.length === 2) {
            if (clickedCards[0].innerHTML === clickedCards[1].innerHTML) {
                clickedCards[0].classList.add('open', 'show', 'match');
                clickedCards[1].classList.add('open', 'show', 'match');

                matched.push(clickedCards[0], clickedCards[1]);
                clickedCards = [];
            } else {

                setTimeout(function() {
                    clickedCards.forEach(function(card) {
                        card.classList.remove('open', 'show', 'disabled')
                    });
                    clickedCards = [];
                }, 800);
            }
        }
        moves++;
        countingMoves.innerHTML = moves;

        if (moves < 30) {
            starsAll.innerHTML = star + star + star;
        } else if (moves < 40) {
            starsAll.innerHTML = star + star;
        } else {
            starsAll.innerHTML = star;
        }
    });
});


const modal = document.querySelector('.modal');

const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    window.location.reload();

});


const timerDiv = document.querySelector('.timer');
let countingSec;
let totalSecs = 0;

// Set the default value to the timer's container
timerDiv.innerHTML = totalSecs + 's';

function startTime() {
    countingSec = setInterval(function() {
        // Increase the totalSeconds by 1
        totalSecs++;
        // Update the HTML Container with the new time
        timerDiv.innerHTML = totalSecs + 's';
    }, 1000);
}

function stopTime() {
    clearInterval(countingSec);
}

/*


const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    // Delete all cards
    const allElem = document.getElementsByTagName('li');
    for (let i = 0; i < allElem.length; i++) {
        console.log('element');
    }
    deck.innerHTML = '';



    shuffleCards = shuffle(cards);
    shuffleCards.forEach(function(addCards) {
        deck.appendChild(addCards);
        clickedCards = [];


        moves = 0;
        countingMoves.innerHTML = moves;
        starsAll.innerHTML = star + star + star;
    });
});

*/



/*
const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    // Delete all cards
    cards.innerHTML = '';
    const newC = document.querySelectorAll('card i');
    /*newC.classList.remove('open', 'match', 'disabled');*/
/*card.setAttribute('class', 'card');

    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('li');
        card.classList.add('card');
        card.innerHTML = `<i class="${card[i]}"></i>`;
        deck.appendChild(card);


        clickedCards = [];
        moves = 0;
        countingMoves.innerHTML = moves;
        starsAll.innerHTML = star + star + star;
        /*shuffleCards.forEach(function(addCards) {
            deck.appendChild(addCards);
    };
});
createGame();

//const newCards = document.querySelectorAll('.card');
cards.setAttribute('class', 'card');

// Reset vars

clickedCards = []; 
moves = 0; 
countingMoves.innerHTML = moves; 
starsAll.innerHTML = star + star + star;
});
*/


//listener for clicks
/*for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        this.classList.add('open', 'show', 'disabled');

        function matching() {

            const thisCard = this;
            const prevCard = clickedCards[0];

            // check if this clicked card is the second card to match
            if (clickedCards.length === 1) {

                card.classList.add('open', 'show', 'disabled');
                clickedCards.push(this);

                // compare cards


                if (thisCard.innerHTML === prevCard.innerHTML) {

                    // match
                    thisCard.classList.add('match');
                    prevCard.classList.add('match');

                    matched.push(thisCard, prevCard);

                    clickedCards = [];

                    if (matched.length === cards.length) {
                        document.write('Game Over');
                    }

                } else {

                    // wait then hide
                    setTimeout(function() {
                        thisCard.classList.remove('open', 'show', 'disabled');
                        prevCard.classList.remove('open', 'show', 'disabled');

                    }, 1000);

                    openedCards = [];

                }
            } else {
                // no match
                /*thisCard.classList.add('open', 'show', 'disabled');
                clickedCards.push(this);
            }
        }
        matching();


    });
}*/

//var to store clicked cards in an array
/*let clickedCards = [];

let matched = [];

let moves = 0;*/


/*function matching() {

    const thisCard = this;
    const prevCard = clickedCards[0];

    // check if this clicked card is the second card to match
    if (clickedCards.length === 1) {

        card.classList.add('open', 'show', 'disabled');
        clickedCards.push(this);

        // compare cards


        if (thisCard.innerHTML === prevCard.innerHTML) {

            // match
            thisCard.classList.add('match');
            prevCard.classList.add('match');

            matched.push(thisCard, prevCard);

            clickedCards = [];

            if (matched.length === cards.length) {
                document.write('Game Over');
            }

        } else {

            // wait then hide
            setTimeout(function() {
                thisCard.classList.remove('open', 'show', 'disabled');
                prevCard.classList.remove('open', 'show', 'disabled');

            }, 1000);

            openedCards = [];

        }
    } else {
        // no match
        thisCard.classList.add('open', 'show', 'disabled');
        clickedCards.push(this);
    }
}*/

/*
const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {

    deck.innerHTML = '';

    createGame();


    matched = [];
    moves = 0;
    movesContainer.innerHTML = moves;
    starsContainer.innerHTML = star + star + star;
});*/


/*function matching() {
    /*clickedCards.push(this);
    if (clickedCards.length === 1) {
        moves++;
        if (clickedCards[0].innerHTML === clickedCards[1].innerHTML) {

            clickedCards[0].classList.add('match');
            clickedCards[1].classList.add('match');
            /*clickedCards[0].classList.remove('show', 'open');
            clickedCards[1].classList.remove('show', 'open');

            matched.push(clickedCards[0], clickedCards[1])
            clickedCards.classList.add('disabled');

            clickedCards = [];
        } else {
            clickedCards[0].classList.add('show', 'open', 'disabled');
            clickedCards[1].classList.add('show', 'open', 'disabled');

            setTimeout(function() {
                clickedCards[0].classList.remove('show', 'open', 'disabled');
                clickedCards[1].classList.remove('show', 'open', 'disabled');
                clickedCards.push(this);

                clickedCards.classList.add('card');
                clickedCards = [];
            }, 1000);
            clickedCards = [];
        }
    }
}



const thisCard = this;
const prevCard = clickedCards[0];*/

//check if cards match
/*if (clickedCards.length === 1) {

    thisCard.classList.add('open');
    thisCard.classList.add('show');
    thisCard.classList.add('disabled');

    clickedCards.push(this);

    if (thisCard.innerHTML === prevCard.innerHTML) {

        thisCard.classList.add('match');
        prevCard.classList.add('match');

        clickedCards = [];

    } else {
        thisCard.classList.remove('open', 'show', 'disabled');
        prevCard.classList.remove('open', 'show', 'disabled');

        clickedCards = [];
    }

} else {
    thisCard.classList.add('open');
    thisCard.classList.add('show');
    thisCard.classList.add('disabled');

    clickedCards.push(this);
}




});
}*/











/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */