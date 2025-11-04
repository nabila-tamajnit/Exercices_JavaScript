const products = [
    {
        picture: './images/thai_1.jpg',
        name: 'Som Tam',
        description: 'Salade de tofu pimentée et croquante, avec haricots verts et cacahuètes.',
        price: 10.50,
        promo: true,
        promoPrice: 9.50,
    },

    {
        picture: './images/thai_2.jpg',
        name: 'Ba Mee Hang',
        description: 'Nouilles aux œufs servies sèches avec des légumes et une sauce légère.',
        price: 13.50,
        promo: false,
        promoPrice: 12.50,
    },

    {
        picture: './images/thai_3.jpg',
        name: 'Pad Thaï',
        description: 'Nouilles de riz sautées avec des œufs, des germes de soja et une sauce sucrée-salée.',
        price: 13.50,
        promo: true,
        promoPrice: 12.50,
    },

    {
        picture: './images/thai_4.jpg',
        name: 'Ba Mee Nam',
        description: 'Nouilles fines aux œufs avec des légumes verts et une sauce parfumée',
        price: 13.50,
        promo: false,
        promoPrice: 12.50,
    },
]

console.log(products)

const DIV_CONT_PRODUCTS = document.getElementById('container_product');

products.forEach((product, indice) => {

    //? ------------------ CARD ------------------------
    const DIV_BOX_PRODUCT = document.createElement('div');
    DIV_BOX_PRODUCT.classList.add('card')

    //* ------------- DIV IMG ----------------
    const DIV_IMG = document.createElement('div');
    DIV_IMG.classList.add('box_img')

    // ---------- IMG ----------------
    const IMG_PRODUCT = document.createElement('img');
    IMG_PRODUCT.src = product.picture;
    IMG_PRODUCT.alt = 'photo de ' + product.name;

    DIV_IMG.append(IMG_PRODUCT);


    //* --------------- DIV INFOS ---------------
    const DIV_INFO = document.createElement('div');
    DIV_INFO.classList.add('box_info')

    // ------------- H2 (title) --------------
    const NAME_PRODUCT = document.createElement('h2');
    NAME_PRODUCT.textContent = product.name;

    // ---------- P (description) ------------
    const DESC = document.createElement('p');
    DESC.textContent = product.description


    //* ------------- DIV PRICE -----------------
    const DIV_PRICE = document.createElement('div')
    DIV_PRICE.classList.add('container_price')

    // ------------ H3 (price) --------------
    const H_PRICE = document.createElement('h3')
    H_PRICE.textContent = 'Prix'

    // ----------- BOX PRICE ----------------
    const BOX_PRICE = document.createElement('div')
    BOX_PRICE.classList.add('box_price')

    // ----------- PRICE (h4) -----------------
    const PRICE = document.createElement('h4');
    PRICE.textContent = product.price.toFixed(2) + ' €'



    //? --------------- ADD ELEMENTS DIV ---------------
    BOX_PRICE.append(PRICE)
    DIV_PRICE.append(H_PRICE, BOX_PRICE)
    DIV_INFO.append(NAME_PRODUCT, DESC, DIV_PRICE);
    DIV_BOX_PRODUCT.append(DIV_IMG, DIV_INFO);
    DIV_CONT_PRODUCTS.append(DIV_BOX_PRODUCT);
    DIV_IMG.append(IMG_PRODUCT);

    //? ---------------- CREATE SPAN PROMO ----------------

    if (product.promo) {
        // --------- ICON PROMO ----------
        const ICONE_PROMO = document.createElement('div')
        ICONE_PROMO.classList.add('icone_div')
        const P_ICONE = document.createElement('p')
        P_ICONE.classList.add('p_icone')

        P_ICONE.textContent = '%'

        DIV_BOX_PRODUCT.append(ICONE_PROMO)
        ICONE_PROMO.append(P_ICONE)


        // --------- PRICE PROMO --------------
        const PROMO_PRICE = document.createElement('span')
 
        PROMO_PRICE.textContent = product.promoPrice.toFixed(2) + ' €';
        BOX_PRICE.append(PROMO_PRICE)

        PRICE.classList.add('promo')
    }
})