// *--------------- ELEMENTS 1ERE PARTIE (ADD) --------------------
const INPUT_NAME = document.getElementById('input_name')
const BTN_ADD = document.getElementById('btn_add')
const ALL_NAME = document.getElementById('all_name')
const ADD_NAME = document.getElementById('add_name')


// *--------------- ELEMENTS 2EME PARTIE (RANDOM) ------------------
const BTN_RANDOM = document.getElementById('btn_random')
const NAME_RANDOM = document.getElementById('name_random')
const FINISH_RDM = document.getElementById('finish_random')


// *----------------- ELEMENT DELET LAST NAME ----------------------
const BTN_DELET = document.getElementById('delet')


// *---------------------- ELEMENT RESET ---------------------------
const BTN_RESET = document.getElementById('reinit')


// --------------- CRÉATION DU TABLEAU VIDE ----------------
let tableName = [];



// ?------------------- PARTIE 1 (ADD) ---------------------------
BTN_ADD.addEventListener('click', () => {

    let inputName = INPUT_NAME.value

    if(inputName === '') {
        ADD_NAME.textContent = 'Veulliez noter un nom !'
    }
    else {
        tableName.push(inputName)
        console.log(tableName)

        ALL_NAME.textContent = tableName.join(' | ')
        ADD_NAME.textContent = ''
    }

    INPUT_NAME.value = ''
})


INPUT_NAME.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        BTN_ADD.click();
    }
})


// ?-------------------- PARTIE 2 (RANDOM) ------------------------
BTN_RANDOM.addEventListener('click', () => {

    let randomIndex = Math.floor(Math.random() * tableName.length);
    let resultRandom = tableName[randomIndex];

    NAME_RANDOM.textContent = `${resultRandom} tu est le chef cuisto 👨‍🍳`;


    tableName.splice(randomIndex, 1);

    ALL_NAME.textContent = tableName.join(' | ');
    console.log(tableName);


    if (tableName.length === 0) {
        NAME_RANDOM.textContent = ""
        FINISH_RDM.textContent = "Plus personne à tirer au sort !";
        return;
    }
    else {
        FINISH_RDM.textContent = ''
    }

    ADD_NAME.textContent = ''

});


// ?--------------------- DELET LAST NAME -----------------------
BTN_DELET.addEventListener('click', () => {

    tableName.pop()
    console.log(tableName)

    ALL_NAME.textContent = tableName.join(' | ');
});


// ?------------------------- RESET -----------------------------
BTN_RESET.addEventListener('click', () => {

    tableName.splice(0)
    tableName = []; //same
    console.log(tableName)

    ALL_NAME.textContent = "";
    NAME_RANDOM.textContent = "";
    FINISH_RDM.textContent = "";
});




