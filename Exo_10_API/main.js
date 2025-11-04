//? -------------------- BLAGUE --------------------------

const BTN_RIGOLER = document.getElementById('btn_rigoler')
const P_REPONSE = document.getElementById('reponse')
const P_QUESTION = document.getElementById('question')

BTN_RIGOLER.addEventListener('click', rigolerAxios);

function rigolerAxios() {

    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then((response) => {
            console.log(response);

            if (response.status === 200) {
                P_QUESTION.textContent = `${response.data.setup}`
                P_REPONSE.textContent = `${response.data.punchline}`
            }
        })

        .catch((error) => {
            console.error(error);

            if (error.status === 422) {
                P_REPONSE.textContent = 'vérifier la requête'
            }
        })
}


//? -------------------- IMAGES FUN --------------------------

const BTN_IMG = document.getElementById('btn_img')
const IMG = document.getElementById('img')

BTN_IMG.addEventListener('click', chargerAxios);

function chargerAxios() {

    axios.get('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
            console.log(response);

            if (response.status === 200) {
                IMG.src = `${response.data[0].url}`
                IMG.width = '500'
                console.log(IMG)
            }
        })    

        .catch((error) => {
                console.error(error)

                if (error.status === 422) {
                    IMG.textContent = 'Requette incorrect'
                }
            })     
}
