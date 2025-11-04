
//---------------- ElEMENT HTML ----------------------
const INPUT_PRODUCT = document.getElementById('input_product')
const BTN_ADD = document.getElementById('btn_add')

const P_ERROR = document.getElementById('error')
const UL_PRODUCT = document.getElementById('ul_product')

//---------------- ARRAY CREATION ---------------------
let productList = []




//*--------------------- CLICK EVENT -----------------------
INPUT_PRODUCT.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addProduct();
    }
})

//*--------------------- BUTTON EVENT ------------------------

BTN_ADD.addEventListener('click', () => {
    addProduct();
})



//?------------------ FUNCTION => addProduct ------------------
function addProduct() {
    let inputProduct = INPUT_PRODUCT.value.trim()

    if(inputProduct === '' || !isNaN(inputProduct)) {
        P_ERROR.textContent = 'Veulliez noter un produit !'
        
    }
    else if(productList.map(product => product.toLowerCase()).includes(inputProduct.toLowerCase())) {
        P_ERROR.textContent = 'Le produit est déjà dans la liste'
    }
    else {
        productList.push(inputProduct)
        console.log(productList)

        loopProduct();

        P_ERROR.textContent = ''
    }
    
    INPUT_PRODUCT.value = ''
}

//?----------------- FUNCTION => loopProduct ------------------
function loopProduct() {
    UL_PRODUCT.innerHTML = '';

    productList.forEach((product, indice) => {
        console.log(indice);
        
        UL_PRODUCT.innerHTML += `<li>${product} <button onclick="deleteProduct(${indice})">🗑️</button></li>`
        console.log(UL_PRODUCT)
    })
}

//?------------------ FUNCTION => deleteProduct ---------------
function deleteProduct(indice){
    console.log("delete");

    productList.splice(indice, 1)
    loopProduct();
    console.log(productList);
}