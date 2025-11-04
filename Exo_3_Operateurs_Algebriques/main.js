const NOTE = document.getElementById('note')
const POURBOIRE = document.getElementById('pourboire')
const P_PERS = document.getElementById('personnes')

const BTN_CALCULE = document.getElementById('btn_calcule')

// ----------------------

const TOTAL_POURB = document.getElementById('total_pourboire')
const TOTAL_PERS = document.getElementById('total_personnes')
const TOTAL_PAYER = document.getElementById('total_payer')

const BTN_REINITIAL = document.getElementById('btn_reinitial')


//* ------------ CALCULER -----------------

BTN_CALCULE.addEventListener('click', () => {
    let note = NOTE.valueAsNumber;
    let pourboire = POURBOIRE.valueAsNumber;
    let personnes = P_PERS.valueAsNumber;

    let prixPourboire = (note * pourboire) / 100;
    let prixTotal = note + prixPourboire;    
    let prixPrsn = prixTotal / personnes;

    
    TOTAL_POURB.textContent = `${prixPourboire.toFixed(2)} €`;
    TOTAL_PERS.textContent = `${prixPrsn.toFixed(2)} €`;
    TOTAL_PAYER.textContent = `${prixTotal.toFixed(2)} €`;

    console.log(TOTAL_POURB)
    console.log(TOTAL_PERS)
    console.log(TOTAL_PAYER)

})

//* ------------- RÉINITIALISER -------------

BTN_REINITIAL.addEventListener('click', () => {
    NOTE.value = '';
    POURBOIRE.value = '';
    P_PERS.value = '';

    TOTAL_POURB.textContent = '0,00 €';
    TOTAL_PERS.textContent = '0,00 €';
    TOTAL_PAYER.textContent = '0,00 €';
})

