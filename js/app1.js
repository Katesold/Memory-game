const card = document.getElementsByClassName('card');
let cards = [...card];


//create a new game
const deck = document.querySelector(".deck");
let shuffleCards = shuffle(cards);

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


//create stars
const starsAll = document.querySelector('.stars');

const star = `<li><i class="fa fa-star"></i></li>`;
starsAll.innerHTML = star + star + star;


//start time function
function startTime() {
    countingSec = setInterval(function() {

        totalSecs++;

        // display time
        timerDiv.innerHTML = totalSecs + 's';
    }, 1000);
}


//stop time function to be called when game won
function stopTime() {
    clearInterval(countingSec);
}

//listen for clicks and see if cards match, starts time
cards.forEach(function(card) {
    card.addEventListener('click', function(elem) {
        if (firstClick) {

            startTime();

            // don't start new counting
            firstClick = false;
        }
        clickedCards.push(card);
        card.classList.add('open', 'show', 'disabled');

        //check if cards match when 2 were clicked already

        if (clickedCards.length === 2) {
            if (clickedCards[0].innerHTML === clickedCards[1].innerHTML) {

                clickedCards[0].classList.add('open', 'show', 'match', 'animated', 'pulse');
                clickedCards[1].classList.add('open', 'show', 'match', 'animated', 'pulse');

                matched.push(clickedCards[0], clickedCards[1]);
                countMatches++;
                clickedCards = [];
                winning();

                //if they don't match add animation and hide cards with delay
            } else {
                clickedCards[0].classList.add('animated', 'shake');
                clickedCards[1].classList.add('animated', 'shake');
                setTimeout(function() {
                    clickedCards.forEach(function(card) {
                        card.classList.remove('open', 'show', 'disabled', 'animated', 'shake')
                    });
                    clickedCards = [];
                }, 700);
            }
        }
        //increase moves with each click
        moves++;
        countingMoves.innerHTML = moves;

        mMoves();
    });
});

//function for rating player, removing stars with too many moves
function mMoves() {
    if (moves < 30) {
        starsAll.innerHTML = star + star + star;
    } else if (moves < 40) {
        starsAll.innerHTML = star + star;
    } else {
        starsAll.innerHTML = star;
    }
}
//make modal appear upon winning with moves, time, stars and stop time
const modal = document.querySelector('.modal');

function winning() {
    if (matched.length == 16) {
        clearInterval(countingSec);
        modal.innerHTML = ` <h2>Congratulations! <br/> You matched all the cards with 
            ${moves} moves, <br/>
            in ${totalSecs} seconds <br/>
            ${starsAll.innerHTML}
            <h2>Restart Game?</h2>
            <button type='button' onclick='reload();'>Yes</button>
            <button type='button' onclick='modal.style.display= "none";'>No</button>`
        modal.classList.add('modal');
        modal.style.display = 'block';
        h2.style.color = '#000000';
        stopTime();
    }
}

//restart game by clicking on restart icon
const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    window.location.reload();
});

//reload function for clicking on Yes button within modal
function reload() {
    window.location.reload();
}


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