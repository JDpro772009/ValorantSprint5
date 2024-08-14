import {agentes,mapas,armas,Ranked,menuDesp} from "./Apis.js"

let Direc = agentes

let {createApp} = Vue

let app = createApp({
    data(){
        return{
            personajes:[],
            Mapas:[],
            Armas:[],
            Estadisticas:[]
        }
    },
    created(){
        this.traerData(Direc)
        this.traerMapas(mapas)
        this.traerArmas(armas)
        this.traerEst(Ranked)
    },
    methods:{
        traerData(url){
            fetch(url)
            .then(response => response.json())
            .then(dato=>{

                this.personajes = dato["data"][0].fullPortrait
                console.log(this.personajes);
                
            })
        },
        traerMapas(url){
            fetch(url)
            .then(response => response.json())
            .then(dato=>{

                this.Mapas = dato["data"][0].splash
                console.log(this.Mapas);
                
            })
        },
        traerArmas(url){
            fetch(url)
            .then(response => response.json())
            .then(dato=>{

                this.Armas = dato["data"][0].displayIcon

                
            })
        },
        traerEst(url){
            fetch(url)
            .then(response => response.json())
            .then(dato=>{

                this.Estadisticas = dato["data"][0].tiers[24].largeIcon
                console.log(this.Estadisticas);
                
            })
        }

        
    },
    computed:{

    }
}).mount("#app")

let boton = document.querySelector(".lista-desplegable")

boton.addEventListener("click", menuDesp)


async function getBestAgent() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        const agents = data.data;

        let bestAgent = null;
        let maxAbilitiesCount = 0;

        agents.forEach(agent => {
            const abilitiesCount = agent.abilities.length; // Contamos las habilidades del agente

            // Comparamos para encontrar el agente con más habilidades
            if (abilitiesCount > maxAbilitiesCount) {
                maxAbilitiesCount = abilitiesCount;
                bestAgent = agent;
            }
        });

        if (bestAgent) {
            renderAgentCard(bestAgent);
        } else {
            console.log('No se encontraron agentes.');
        }
    } catch (error) {
        console.error('Error al obtener los agentes:', error);
    }
}

function renderAgentCard(agent) {
    const agentCardContainer = document.getElementById('agentCardContainer');
    agentCardContainer.innerHTML = `
            <div class="card-banner">
                <img id="agentIcon" src="${agent.displayIcon}" class="card-img-top" alt="${agent.displayName}">
                <div class="card-body">
                <h5 class="card-title">${agent.displayName}</h5>
                <p class="card-text"><strong>Habilidades:</strong></p>
                <div>${agent.abilities.map(ability => `<li>${ability.displayName}</li>`).join('')}</div>
                </div>
                </div>
    `;
}

// Llama a la función para obtener el mejor agente
getBestAgent();
async function getWeaponWithHighestDamage() {
    try {
        const response = await fetch('https://valorant-api.com/v1/weapons');
        const data = await response.json();
        const weapons = data.data;

        let highestDamageWeapon = null;
        let maxDamage = 0;

        weapons.forEach(weapon => {
            // Verificar si weaponStats y damageRanges existen
            if (weapon.weaponStats && weapon.weaponStats.damageRanges) {
                const damageRanges = weapon.weaponStats.damageRanges;

                // Comprobar el daño en el rango más alto
                damageRanges.forEach(range => {
                    if (range.headDamage > maxDamage) {
                        maxDamage = range.headDamage;
                        highestDamageWeapon = weapon;
                    }
                });
            }
        });

        if (highestDamageWeapon) {
            renderWeaponCard(highestDamageWeapon);
        } else {
            console.log('No se encontraron armas.');
        }
    } catch (error) {
        console.error('Error al obtener las armas:', error);
    }
}

function renderWeaponCard(weapon) {
    const weaponCardContainer = document.getElementById('weaponCardContainer');
    weaponCardContainer.innerHTML = `
        <div class="card-banner">
            <div>
            <img id="weaponIcon" src="${weapon.displayIcon}"class="card-img-top" alt="${weapon.displayName}">
            </div>
            <div class="Card-body">
                <h5 class="card-title ">${weapon.displayName}</h5>
                <p><strong>Tipo:</strong> ${weapon.shopData?.category}</p>
                <p><strong>Daño Máximo (Cabeza):</strong> ${weapon.weaponStats.damageRanges[0].headDamage}</p>
                <p><strong>Daño (Cuerpo):</strong> ${weapon.weaponStats.damageRanges[0].bodyDamage}</p>
            </div>
        </div>
    `;
}

// Llama a la función para obtener el arma con más daño
getWeaponWithHighestDamage();

async function getYoruInfo() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        const agents = data.data;

        // Buscar a Yoru en la lista de agentes
        const yoru = agents.find(agent => agent.displayName === 'Yoru');

        if (yoru) {
            renderYoruCard(yoru);
        } else {
            console.log('Yoru no encontrado.');
        }
    } catch (error) {
        console.error('Error al obtener la información de Yoru:', error);
    }
}

function renderYoruCard(agent) {
    const agentCardContainer = document.getElementById('agentyoruContainer');
    const card = document.createElement('div');
    card.className = 'card-banner';
    card.innerHTML = `
        <img id="agentIcon" src="${agent.fullPortrait}" alt="${agent.displayName}">
        <div class="card-body">
            <h5>${agent.displayName}</h5>
            <p><strong>Rol:</strong> ${agent.role.displayName}</p>
            <p><strong>Descripción:</strong> ${agent.description}</p>
            <p><strong>Habilidades:</strong></p>
                ${agent.abilities.map(ability => `<li>${ability.displayName}</li>`).join('')}
            
        </div>
    `;
    agentCardContainer.appendChild(card);
}

// Llama a la función para obtener la información de Yoru
getYoruInfo();

async function getBrimstoneInfo() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        const agents = data.data;

        // Buscar a Brimstone en la lista de agentes
        const brimstone = agents.find(agent => agent.displayName === 'Brimstone');

        if (brimstone) {
            renderBrimstoneCard(brimstone);
        } else {
            console.log('Brimstone no encontrado.');
        }
    } catch (error) {
        console.error('Error al obtener la información de Brimstone:', error);
    }
}

function renderBrimstoneCard(agent) {
    const agentCardContainer = document.getElementById('primeragenteContainer');
    const card = document.createElement('div');
    card.className = 'card-banner';
    card.innerHTML = `
        <img id="agentIcon" src="${agent.fullPortrait}" alt="${agent.displayName}">
        <div class="agent-card-body">
            <h5>${agent.displayName}</h5>
            <p><strong>Rol:</strong> ${agent.role.displayName}</p>
            <p><strong>Descripción:</strong> ${agent.description}</p>
            <p><strong>Habilidades:</strong></p>
                ${agent.abilities.map(ability => `<li>${ability.displayName}</li>`).join('')}
        </div>
    `;
    agentCardContainer.appendChild(card);
}

// Llama a la función para obtener la información de Brimstone
getBrimstoneInfo();

async function getMapInfo() {
    try {
        const response = await fetch('https://valorant-api.com/v1/maps');
        const data = await response.json();
        const maps = data.data;

        // Buscar el mapa Ascent
        const ascentMap = maps.find(map => map.displayName === 'Haven');

        if (ascentMap) {
            renderMapCard(ascentMap);
        } else {
            console.log('Mapa Haven no encontrado.');
        }
    } catch (error) {
        console.error('Error al obtener la información del mapa:', error);
    }
}

function renderMapCard(map) {
    const mapCardContainer = document.getElementById('mapCardContainer');
    const card = document.createElement('div');
    card.className = 'card-banner';
    card.innerHTML = `
        <img id="mapIcon" src="${map.listViewIcon}" alt="${map.displayName}">
        <div class="card-body">
            <h5 class="card-title">${map.displayName}</h5>
            <p><strong>Descripción:</strong> ${map.tacticalDescription || 'Descripción no disponible.'}</p>
        </div>
    `;
    mapCardContainer.appendChild(card);
}

// Llama a la función para obtener la información del mapa
getMapInfo();

const agentData = [
    { position: 1, name: 'Sage', selectionRate: 28.91, winRate: 50.65 },
    { position: 2, name: 'Reyna', selectionRate: 27.49, winRate: 50.60 },
    { position: 3, name: 'Jett', selectionRate: 25.73, winRate: 50.54 },
    { position: 4, name: 'Chamber', selectionRate: 16.20, winRate: 50.80 },
    { position: 5, name: 'Omen', selectionRate: 12.80, winRate: 48.73 },
    { position: 6, name: 'Raze', selectionRate: 12.34, winRate: 50.20 },
    { position: 7, name: 'Sova', selectionRate: 10.91, winRate: 50.06 },
    { position: 8, name: 'Brimstone', selectionRate: 10.44, winRate: 51.19 },
    { position: 9, name: 'Viper', selectionRate: 9.47, winRate: 49.90 },
    { position: 10, name: 'Skye', selectionRate: 8.59, winRate: 49.52 }
];

function renderAgentTable() {
    const tableBody = document.getElementById('agentTableBody');

    agentData.forEach(agent => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${agent.position}</td>
            <td>${agent.name}</td>
            <td>${agent.selectionRate}%</td>
            <td>${agent.winRate}%</td>
        `;
        tableBody.appendChild(row);
    });
}

// Llama a la función para renderizar la tabla
renderAgentTable();


async function fetchWeapons() {
    try {
        const response = await fetch('https://valorant-api.com/v1/weapons');
        const data = await response.json();
        const weapons = data.data;

        // Suponiendo que las mejores armas son las que tienen más daño en cabeza
        const topWeapons = weapons.sort((a, b) => {
            const aHeadDamage = a.weaponStats ? a.weaponStats.damageRanges[0].headDamage : 0;
            const bHeadDamage = b.weaponStats ? b.weaponStats.damageRanges[0].headDamage : 0;
            return bHeadDamage - aHeadDamage;
        }).slice(0, 3); // Obtener las tres mejores armas

        renderWeaponTable(topWeapons);
    } catch (error) {
        console.error('Error al obtener las armas:', error);
    }
}

function renderWeaponTable(weapons) {
    const tableBody = document.getElementById('weaponTableBody');

    weapons.forEach(weapon => {
        const row = document.createElement('tr');
        const headDamage = weapon.weaponStats ? weapon.weaponStats.damageRanges[0].headDamage : 'N/A';
        const bodyDamage = weapon.weaponStats ? weapon.weaponStats.damageRanges[0].bodyDamage : 'N/A';
        const legDamage = weapon.weaponStats ? weapon.weaponStats.damageRanges[0].legDamage : 'N/A';

        row.innerHTML = `
            <td><img id="weaponIcon2" src="${weapon.displayIcon}" alt="${weapon.displayName}" width="50"></td>
            <td>${weapon.displayName}</td>
            <td>${weapon.shopData?.category}</td>
            <td>${headDamage}</td>
            <td>${bodyDamage}</td>
            <td>${legDamage}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Llama a la función para obtener las armas
fetchWeapons();
async function fetchSprays() {
    try {
        const response = await fetch('https://valorant-api.com/v1/sprays');
        const data = await response.json();
        const sprays = data.data || []; // Asegúrate de que sprays sea un arreglo

        // Aquí se definen los 10 sprays más utilizados (esto es un ejemplo, puedes ajustarlo según tus necesidades)
        const topSprays = [
            "Oh No", 
            "Revive Me, Jett!", 
            "Salt Shaker", 
            "Perfect Disaster", 
            "This is Also Fine", 
            "Am I Clear?", 
            "One Last Bite", 
            "Pocket Sage", 
            "Yoru Rick Roll", 
            "Teddy Bear"
        ];

        const sprayCardsContainer = document.getElementById('sprayCardsContainer');

        // Filtrar y mostrar solo los sprays más utilizados
        sprays.forEach(spray => {
            if (topSprays.includes(spray.displayName)) {
                const card = document.createElement('div');
                card.className = 'spray-card';
                card.innerHTML = `
                    <img src="${spray.fullIcon || 'https://via.placeholder.com/300'}" alt="${spray.displayName}">
                    <div class="spray-card-body">
                        <h5>${spray.displayName}</h5>
                        <p>${spray.description || 'Descripción no disponible.'}</p>
                        <p><strong>Tipo:</strong> ${spray.type || 'N/A'}</p>
                    </div>
                `;
                sprayCardsContainer.appendChild(card);
            }
        });
    } catch (error) {
        console.error('Error al obtener los sprays:', error);
    }
}

// Llama a la función para obtener los sprays
fetchSprays();

// Datos de tasa de victorias por mapa
const mapWinRates = [
    { map: "Icebox", winRate: 48 },
    { map: "Bind", winRate: 51 },
    { map: "Haven", winRate: 53 },
    { map: "Split", winRate: 49 },
    { map: "Ascent", winRate: 52 },
    { map: "Breeze", winRate: 47 },
    { map: "Fracture", winRate: 46 },
    { map: "Pearl", winRate: 50 }
];

// Datos de estadísticas de mapas
const mapStats = [
    { map: "Icebox", winRate: 48, roundsWon: 1234 },
    { map: "Bind", winRate: 51, roundsWon: 2345 },
    { map: "Haven", winRate: 53, roundsWon: 3456 },
    { map: "Split", winRate: 49, roundsWon: 4567 },
    { map: "Ascent", winRate: 52, roundsWon: 5678 },
    { map: "Breeze", winRate: 47, roundsWon: 6789 },
    { map: "Fracture", winRate: 46, roundsWon: 7890 },
    { map: "Pearl", winRate: 50, roundsWon: 8901 }
];

// Función para obtener las imágenes de los mapas desde la API
async function fetchMapImages() {
    try {
        const response = await fetch('https://valorant-api.com/v1/maps');
        const data = await response.json();
        return data.data; // Retorna la lista de mapas
    } catch (error) {
        console.error('Error al obtener las imágenes de los mapas:', error);
        return [];
    }
}

// Función para llenar la tabla con estadísticas de mapas
async function populateMapStatsTable() {
    const tableBody = document.getElementById('mapStatsTableBody');
    const maps = await fetchMapImages();

    // Crea un objeto para acceder fácilmente a las imágenes de los mapas
    const mapImages = {};
    maps.forEach(map => {
        mapImages[map.displayName] = map.splash; // Usar displayIcon para la imagen
    });

    mapStats.forEach(stats => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stats.map}</td>
            <td><img id="mapIcon2" src="${mapImages[stats.map] || 'https://via.placeholder.com/100'}" alt="${stats.map}" width="100"></td>
            <td>${stats.winRate}%</td>
            <td>${stats.roundsWon}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Llama a la función para llenar la tabla
populateMapStatsTable();