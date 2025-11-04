//* ----------------- Exercice 1 ----------------------

const INPUT_AGE = document.getElementById ('age')
const BTN_VALIDER1 = document.getElementById ('valider1')
const RESULAT1 = document.getElementById ('resultat1')

BTN_VALIDER1.addEventListener('click', () => {

    let age = INPUT_AGE.valueAsNumber;

    if( isNaN(age) ){

        RESULAT1.textContent = "Veuillez entrer votre âge !";

    } else if( age >= 18 ){

        RESULAT1.textContent = `Bienvenue sur notre site destiné au adultes 👀`;

    } else {

        RESULAT1.textContent = `Hop hop, que faites-vous ici ? 🔞`;
    }
})


//* -------------- Exercice 2 ----------------------

const INPUT_ANNEE = document.getElementById ('annee')
const BTN_VALIDER2 = document.getElementById ('valider2')
const RESULTAT2 = document.getElementById ('resultat2')

BTN_VALIDER2.addEventListener('click', () => {

    let annee = INPUT_ANNEE.valueAsNumber;

    if( isNaN(annee) ){

        RESULTAT2.textContent = "Veuillez entrer une année !";

    } else if( (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0 ) {

        RESULTAT2.textContent = `L'année ${annee} est bissextile !`;

    } else {

        RESULTAT2.textContent = `L'année ${annee} n'est pas bissextile !`;
    }

})


//* -------------- Exercice 3 ----------------------

const INPUT_CHOICE = document.getElementById ('input_choice')
const BTN_CHOICE = document.getElementById ('btn_choice')
const P_RESULT = document.getElementById ('p_resultat')
const IMG_RESULT = document.getElementById ('img_resultat')

BTN_CHOICE.addEventListener('click', () => {
    const value = INPUT_CHOICE.valueAsNumber

    
    switch(value) {
    case 523 :
        P_RESULT.textContent = "Voila votre thé"
        IMG_RESULT.src = "https://www.un-amour-de-cafe.com/files/Blog/shutterstock_135404954.jpg";
        break;

    case 394 :
    P_RESULT.textContent = "Voila votre café"
    IMG_RESULT.src = "https://www.shutterstock.com/image-photo/black-tea-cup-glass-dried-600nw-2567696105.jpg";
    break;

    case 789 :
    P_RESULT.textContent = "Voila votre Chocolat chaud"
    IMG_RESULT.src = "https://img-3.journaldesfemmes.fr/boN731OsLOuxLU6hIKwcERc4TAc=/1500x/smart/764d4813020b4cd6b504db7d495ec201/ccmcms-jdf/14729311.jpg";
    break;

    case 276 :
    P_RESULT.textContent = "Voila votre jus d'orange"
    IMG_RESULT.src = "https://img.cuisineaz.com/660x660/2017/08/03/i131280-jus-d-orange-au-thermomix.jpeg";
    break;

    default :
    P_RESULT.textContent = "ERREUR : CODE INVALIDE"
    IMG_RESULT.src = "https://img.freepik.com/vecteurs-premium/vecteur-icone-erreur_535345-6246.jpg";   
    }
})