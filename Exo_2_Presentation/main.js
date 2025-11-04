// * --------------- Etape 1 et 2 -----------------

const INPUT_PRENOM = document.getElementById('prenom')
const INPUT_NOM = document.getElementById('nom')
const INPUT_AGE = document.getElementById('age')

const INPUT_URL = document.getElementById('url')
const IMG = document.getElementById('image')

const BTN_VALIDER = document.getElementById('valider')
const P_RESULTAT = document.getElementById('resultat')

// ---------------

BTN_VALIDER.addEventListener('click', () => {
    let prenom = INPUT_PRENOM.value;
    let nom = INPUT_NOM.value;
    let age = INPUT_AGE.valueAsNumber;
    let agePlusUn = age + 1;

    let url = INPUT_URL.value.trim();

    if(url) {
        IMG.src = url
        IMG.style.display = 'block'
    }

    P_RESULTAT.textContent = `Moi, c'est ${prenom} ${nom} et j'ai ${agePlusUn} ans l'année prochaine.`

})


// * ------------------ Etape 3 -------------------

const BTN_CHAUD = document.getElementById('chaud')
const BTN_FROID = document.getElementById('froid')
const BTN_PERSO = document.getElementById('personnaliser')

const BOX_INPUT = document.querySelector('.container_input')
const BOX_PHOTO = document.querySelector('.photo-texte')

// -----------------

// Changer les couleurs de fond avec les classes créés en CSS

BTN_CHAUD.addEventListener('click', () => {

    //todo classList + style à supp
    //* Sert à retirer le classe et le style après que le thème personalisé est été fait (inline(prioritaire))
    BOX_INPUT.style = "";
    // BOX_INPUT.removeAttribute('style');
    BOX_PHOTO.style = "";
    P_RESULTAT.style = "";

    //* Sert à retirer le thème froid pour repasser au chaud
    BOX_INPUT.classList.remove('froid');
    BOX_PHOTO.classList.remove('froid');

    //* Prend la classe en CSS pour appliquer le style
    BOX_INPUT.classList.add('chaud');
    BOX_PHOTO.classList.add('chaud');
})


BTN_FROID.addEventListener('click', () => {

    //todo classList + style à supp
    //* Sert à retirer le classe et le style après que le thème personalisé est été fait (inline(prioritaire))
    BOX_INPUT.style = "";
    // BOX_INPUT.removeAttribute('style');
    BOX_PHOTO.style = "";
    P_RESULTAT.style = "";

    //* Sert à retirer le thème chaud pour repasser au froid
    BOX_INPUT.classList.remove('chaud');
    BOX_PHOTO.classList.remove('chaud');

    //* Prend la classe en CSS pour appliquer le style
    BOX_INPUT.classList.add('froid');
    BOX_PHOTO.classList.add('froid');
})

BTN_PERSO.addEventListener('click', () => {
    let couleurFond = prompt('Choisissez une couleur de fond en Hexadecimal :')
    let couleurTexte = prompt('Choisissez une couleur de texte en Hexadecimal :')

    if (couleurFond) {
            BOX_INPUT.style.backgroundColor = couleurFond
            BOX_PHOTO.style.backgroundColor = couleurFond
    }

    if (couleurTexte)
            P_RESULTAT.style.color = couleurTexte
})