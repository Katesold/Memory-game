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

let firstClick = true;
const timerDiv = document.querySelector('.timer');
let countingSec, totalSecs = 0;

// add value to timer
timerDiv.innerHTML = totalSecs + 's';



let moves = 0;

let matched = [];
let countingMoves = document.querySelector('.moves');
countingMoves.innerHTML = moves;

let countMatches = 0;

const starsAll = document.querySelector('.stars');

const star = `<li><i class="fa fa-star"></i></li>`;
starsAll.innerHTML = star + star + star;


function startTime() {
    countingSec = setInterval(function() {

        totalSecs++;

        // display time
        timerDiv.innerHTML = totalSecs + 's';
    }, 1000);
}

function stopTime() {
    clearInterval(countingSec);
}


cards.forEach(function(card) {
    card.addEventListener('click', function(elem) {
        if (firstClick) {

            startTime();

            // don't start new counting
            firstClick = false;
        }
        clickedCards.push(card);
        card.classList.add('open', 'show', 'disabled');

        if (clickedCards.length === 2) {
            if (clickedCards[0].innerHTML === clickedCards[1].innerHTML) {
                clickedCards[0].classList.add('open', 'show', 'match');
                clickedCards[1].classList.add('open', 'show', 'match');

                matched.push(clickedCards[0], clickedCards[1]);
                countMatches++;
                clickedCards = [];
                winning();
            } else {

                setTimeout(function() {
                    clickedCards.forEach(function(card) {
                        card.classList.remove('open', 'show', 'disabled')
                    });
                    clickedCards = [];
                }, 700);
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

//make modal appear upon winning
const modal = document.querySelector('.modal');

function winning() {
    if (matched.length == 16) {
        modal.innerHTML = ` <h2>Congratulations! You matched all the cards with 
            ${moves} moves, 
            in ${totalSecs} seconds
            ${starsAll.innerHTML}
            <h1>Restart Game?</h1>
            <button type="button" onclick="reload();">Yes</button>
            <button type="button" onclick="modal.style.display= 'none';">No</button>`
        modal.classList.add('modal');
        modal.style.display = 'block';
        stopTime();

    }
}


const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    window.location.reload();

});

function reload() {
    window.location.reload();
}



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