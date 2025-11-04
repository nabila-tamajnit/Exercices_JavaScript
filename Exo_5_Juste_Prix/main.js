const BTN_EASY = document.getElementById('easy');
const BTN_AVERAGE = document.getElementById('average');
const BTN_DIFFICULT = document.getElementById('difficult');

const NBR_CHANCES = document.getElementById('nbr_chances');

const INPUT_NMBR = document.getElementById('input_number');

const BTN_VALID = document.getElementById('btn_valid');

const P_RESULT = document.getElementById('p_result');

const SPAN_MAX = document.getElementById('max');

const JEU = document.getElementById('div1')
const INSTRUCTIONS = document.getElementById('div2')

const BTN_RESET = document.getElementById('btn_reset')


let chancesBase = 0;
let chances;
let max;
let nbrRandom;

INPUT_NMBR.disabled = true;
BTN_VALID.disabled = true;

BTN_EASY.addEventListener('click', () => {

    chancesBase = 0;
    chances = 5;

    max = 10;

    nbrRandom = Math.floor(Math.random() * max + 1);
    console.log(nbrRandom)
    console.log(chances)

    NBR_CHANCES.textContent = "".padEnd(chances * 2, '💰');
    SPAN_MAX.textContent = max;

    BTN_EASY.disabled = true;
    BTN_AVERAGE.disabled = true;
    BTN_DIFFICULT.disabled = true;

    INPUT_NMBR.disabled = false;
    BTN_VALID.disabled = false;

    P_RESULT.textContent = '';

    JEU.classList.add('hidden')

})


BTN_AVERAGE.addEventListener('click', () => {

    chances = 10;
    max = 100;
    chancesBase = 0;

    nbrRandom = Math.floor(Math.random() * max + 1);
    console.log(nbrRandom)


    NBR_CHANCES.textContent = "".padEnd(chances * 2, '💰');
    SPAN_MAX.textContent = max;

    BTN_EASY.disabled = true;
    BTN_AVERAGE.disabled = true;
    BTN_DIFFICULT.disabled = true;

    INPUT_NMBR.disabled = false;
    BTN_VALID.disabled = false;

    P_RESULT.textContent = '';


})


BTN_DIFFICULT.addEventListener('click', () => {

    chances = 15;
    max = 1000;
    chancesBase = 0;


    nbrRandom = Math.floor(Math.random() * max + 1);
    console.log(nbrRandom)


    NBR_CHANCES.textContent = "".padEnd(chances * 2, '💰');
    SPAN_MAX.textContent = max;

    BTN_EASY.disabled = true;
    BTN_AVERAGE.disabled = true;
    BTN_DIFFICULT.disabled = true;

    INPUT_NMBR.disabled = false;
    BTN_VALID.disabled = false;

    P_RESULT.textContent = '';



})





BTN_VALID.addEventListener('click', () => {

    let userNbr = INPUT_NMBR.valueAsNumber;




    if (isNaN(userNbr) || userNbr < 1 || userNbr > max) {
        P_RESULT.textContent = "ENTREZ UN NOMBRE VALIDE 😅"

    }

    else if (userNbr > nbrRandom) {
        P_RESULT.textContent = "👇  C'est plus petit que " + userNbr

        chances--
        NBR_CHANCES.textContent = "".padEnd(chances * 2, '💰');
        console.log(NBR_CHANCES);
    }

    else if (userNbr < nbrRandom) {
        P_RESULT.textContent = "👆  C'est plus grand que " + userNbr

        chances--
        NBR_CHANCES.textContent = ''.padEnd(chances * 2, '💰');
    }

    else {
        P_RESULT.textContent = "C'EST GAGNÉ 🎉"

        BTN_EASY.disabled = false;
        BTN_AVERAGE.disabled = false;
        BTN_DIFFICULT.disabled = false;

        INPUT_NMBR.disabled = true;
        BTN_VALID.disabled = true;


    }

    if (chancesBase === chances) {
        P_RESULT.textContent = "GAME OVER 😒";
        NBR_CHANCES.textContent = "Vous n'avez plus de chances 😔";

        BTN_EASY.disabled = false;
        BTN_AVERAGE.disabled = false;
        BTN_DIFFICULT.disabled = false;

        INPUT_NMBR.disabled = true;
        BTN_VALID.disabled = true;


    }

    INPUT_NMBR.value = ''


})

INPUT_NMBR.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        BTN_VALID.click();
    }

})


//todo 
// div jeu (hidden)
// div "choisissez difficluté" (!hidden)
// au click sur un niveau 
// div jeu (!hidden)
// div "choisissez difficluté" (hidden)

// si tu veux remettre à la fin de partie (gagné ou perdu)
// rajouter un bouton reset partie hidden jusqu'à gagné ou perdu
// au click sur le bouton reset partie -> réactive facile, moyen, difficile 
// et div jeu hidden
// div choisissez devient !hidden
