export let agentes = "https://valorant-api.com/v1/agents"
export let armas = "https://valorant-api.com/v1/weapons"
export let aerosoles = "https://valorant-api.com/v1/sprays"
export let mapas = "https://valorant-api.com/v1/maps"
export let Gamemodes = "https://valorant-api.com/v1/gamemodes"
export let monedas = "https://valorant-api.com/v1/monedas"
export let Paquetes = "https://valorant-api.com/v1/bundles"
export let Ranked = "https://valorant-api.com/v1/competitivetiers"
export function menuDesp(){
    let menu = document.querySelector(".menu-desplegable")
    let menuTotal = document.querySelector(".menu-total")
    
    menu.classList.toggle("left-0-menu")
    menuTotal.classList.toggle("left-0-menu-total")
    

}

