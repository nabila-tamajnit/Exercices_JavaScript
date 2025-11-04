const FIRST_NMBR = document.getElementById('number_one')
const SCD_NBR= document.getElementById('number_two')
const RESULT = document.getElementById('result')

const BTN_ADD = document.getElementById('addition')
const BTN_SUB= document.getElementById('subtraction')
const BTN_MLTP = document.getElementById('multiplication')
const BTN_DVS = document.getElementById('division')
const BTN_PRCT = document.getElementById('percentage')
const BTN_CLEAR = document.getElementById('clear')
const BTN_RESULT = document.getElementById('btn_equal')

//? L'opération n'a pas de valeur à la base
let operation = null

//? Au click, l'opération prends la valeur des bouttons
BTN_ADD.addEventListener('click', () => {
    operation = "+"
})
BTN_SUB.addEventListener('click', () => {
    operation = "-"
})
BTN_MLTP.addEventListener('click', () => {
    operation = "*"
})
BTN_DVS.addEventListener('click', () => {
    operation = "/"
})
BTN_PRCT.addEventListener('click', () => {
    operation = "%"
})

//? Quand on appuie sur le boutons résultat
BTN_RESULT.addEventListener('click', () => {
    let firstNumber = FIRST_NMBR.valueAsNumber
    let secondNumber = SCD_NBR.valueAsNumber

    //* La valeur de l'opération change au click des boutons pour donner le résultat
    if(operation === '+') {
        let addition = firstNumber + secondNumber
        RESULT.value = addition
    }

    if(operation === '-') {
        let substraction = firstNumber - secondNumber
        RESULT.value = substraction
    }

    if(operation === '*') {
         let multiplication = firstNumber * secondNumber
        RESULT.value = multiplication
    }

    if(operation === '/') {
        let division = firstNumber / secondNumber
        RESULT.value = division
    }

    if(operation === '%') {
         let percentage = (firstNumber * secondNumber) / 100
        RESULT.value = percentage
    }
})

//? Quand on click sur C, les valeurs des input disparaissent
BTN_CLEAR.addEventListener('click', () => {
    FIRST_NMBR.value = ''
    SCD_NBR.value = ''
    RESULT.value =''
})