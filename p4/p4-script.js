let randomnum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lh = document.querySelector('.lh');
const startover = document.querySelector('.resultparas');
const p = document.createElement('p');
let pg = [];
let ng = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
    });
}
function validateguess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`);
    }
    else if (guess < 1) {
        alert(`Number must be greater than zero`);
    }
    else if (guess > 100) {
        alert(`Number must be less than or equal to 100`);
    }
    else {
        pg.push(guess)
        if (ng === 10) {
            displayguess(guess);
            displaymesage(`Game over .  Random number was ${randomnum} ..`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}
function displayguess(guess) {
    userinput.value = '';
    guessslot.innerHTML += `${guess}  ,  `;
    ng++;
    remaining.innerHTML = `${11 - ng}`;

}
function checkguess(guess) {
    if (guess === randomnum) {
        displaymesage(`You guessed it right`);
        endgame();
    } else if (guess < randomnum) {
        displaymesage(`Number is too low`);
    } else if (guess > randomnum) {
        displaymesage(`Number is too high`);
    }

}


function displaymesage(message) {
    lh.innerHTML = `<h2>${message}</h2>`;

}
function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}
function newgame() {
    const newgamebut = document.querySelector('#newgame')
    newgamebut.addEventListener('click', function (e) {

        randomnum = parseInt(Math.random() * 100 + 1);
        pg = [];
        ng = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${11 - ng}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        displaymesage(`   `)

        playgame = true;
    });


}
