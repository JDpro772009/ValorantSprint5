
let allGameModes = []


import {menuDesp} from "./Apis.js"


async function fetchGameModes() {
    try {
        const response = await fetch('https://valorant-api.com/v1/gamemodes')
        const data = await response.json()
        allGameModes = data.data
        displayGameModes(allGameModes)
    } catch (error) {
        console.error('Error fetching game modes:', error)
    }
}

function displayGameModes(gameModes) {
    const container = document.getElementById('gameModesContainer')

    const noResultsMessage = document.getElementById('noResultsMessage')
    
    container.innerHTML = ''
    
    if (gameModes.length === 0) {
        
        noResultsMessage.style.display = 'block'
    } else {
        
        noResultsMessage.style.display = 'none'
        gameModes.forEach(mode => {
            const modeDiv = document.createElement('div')
            modeDiv.className = 'col-md-6 col-lg-4 hidden'
            modeDiv.innerHTML = `
                <div class="gameCard game-mode bg-white shadow-sm p-4 mb-5 rounded">
                    <h2 class="text-center">${mode.displayName}</h2>
                    <p class="text-center m-3 fs-5">${mode.description ? mode.description : 'Fun and fast-paced gameplay, making it ideal for players looking to enjoy a casual experience without the pressure of competitive play.'}</p>
                    <img src="${mode.listViewIconTall ? mode.listViewIconTall : '../RecursosExt/VALORANT Design Work.jpeg'}" alt="${mode.displayName} image">
                </div>
            `
            container.appendChild(modeDiv)
        })
    }

    gameModes.forEach(mode => {
        const modeDiv = document.createElement('div')
        modeDiv.className = 'col-md-6 col-lg-4 hidden'
        modeDiv.innerHTML = `
            <div id="gameContainer" class="game-mode bg-white shadow-sm p-4 rounded">
                <h2 class="text-center tex">${mode.displayName}</h2>
                <p class="text-center m-3">${mode.description ? mode.description : 'Fun and fast-paced gameplay, making it ideal for players looking to enjoy a casual experience without the pressure of competitive play.'}</p>
                <img src="${mode.listViewIconTall ? mode.listViewIconTall : '../RecursosExt/VALORANT Design Work.jpeg'}" alt="${mode.displayName} image">
            </div>
        `
        container.appendChild(modeDiv)
    })


    window.addEventListener('scroll', () => animateOnScroll(container))
}

function filterGameModes() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase()
    const filteredModes = allGameModes.filter(mode =>
        mode.displayName.toLowerCase().includes(filterValue)
    );
    displayGameModes(filteredModes)
}

function animateOnScroll(container) {
    const cards = container.querySelectorAll('.col-md-6.col-lg-4')
    const windowHeight = window.innerHeight

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top

        if (cardTop < windowHeight) {
            card.classList.remove('hidden')
            card.classList.add('grow-animation')
        }
    });
}


window.onload = () => {
    fetchGameModes()
    document.getElementById('filterInput').addEventListener('input', filterGameModes)
}
=======
window.onload = fetchGameModes

let boton = document.querySelector(".lista-desplegable")

boton.addEventListener("click", menuDesp)

