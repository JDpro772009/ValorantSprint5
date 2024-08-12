import {mapas, menuDesp, agentes, armas, Ranked} from "./Apis.js"

let Direc = agentes

let {createApp} = Vue
let app = createApp({
    data() {
        return {
            personajes: [],
            Mapas: [],
            Armas: [],
            Estadisticas: []
        }
    },
    created() {
        this.traerData(Direc)
        this.traerMapas(mapas)
        this.traerArmas(armas)
        this.traerEst(Ranked)
    },
    methods: {
        traerData(url) {
            fetch(url)
                .then(response => response.json())
                .then(dato => {
                    this.personajes = dato["data"][0].fullPortrait
                    console.log(this.personajes);
                })
        },
        traerMapas(url) {
            fetch(url)
                .then(response => response.json())
                .then(dato => {
                    this.Mapas = dato["data"][0].splash
                    console.log(this.Mapas);
                })
        },
        traerArmas(url) {
            fetch(url)
                .then(response => response.json())
                .then(dato => {
                    this.Armas = dato["data"][0].displayIcon
                })
        },
        traerEst(url) {
            fetch(url)
                .then(response => response.json())
                .then(dato => {
                    this.Estadisticas = dato["data"][0].tiers[24].largeIcon
                    console.log(this.Estadisticas);
                })
        }
    },
    computed: {

    }
}).mount("#app")

fetch(mapas)
    .then(response => response.json())
    .then(json => pintarMapas(json))

function pintarMapas(valor) {
    let cajaCartas = document.querySelector(".cartas")
    cajaCartas.innerHTML = ""
    document.querySelector('.buscar').value = ""
    for (let i = 0; i < valor["data"].length; i++) {
        let cajita = document.createElement("div")
        cajita.setAttribute("class", "cartaMaps carta")
        cajita.innerHTML = `
            <h5 class="card-title nombreMap">${valor["data"][i].displayName}</h5>
            <img src="${valor["data"][i].splash}" class="maps">
            <button class="estrella btn-favorito">★</button>
        `
        cajaCartas.appendChild(cajita)
    }
    verificarCartas(); 
    document.querySelectorAll('.btn-favorito').forEach(button => {
        button.addEventListener('click', agregarAFavoritos);
    });
    
}

let boton = document.querySelector(".lista-desplegable")
boton.addEventListener("click", menuDesp)

document.querySelector('.buscar').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let cards = document.querySelectorAll('.carta');
    
    cards.forEach(card => {
        let cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
        if (cardTitle.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });

    verificarCartas(); 
});

function verificarCartas() {
    let cards = document.querySelectorAll('.carta');
    let todasOcultas = Array.from(cards).every(card => card.style.display === 'none');

    if (todasOcultas || cards.length === 0) {

        let cajaCartas = document.querySelector(".cartas")
        let h1 = document.createElement("h1")
        let comp = document.querySelector(".comp")
        if(cajaCartas.contains(comp)){
console.log("ya hay");

        }else{
            h1.setAttribute("class","comp")
            h1.textContent = "No encontramos lo que buscas..."
        cajaCartas.appendChild(h1)
        }
        
    }
    else{
        let cajaCartas = document.querySelector(".cartas")
        let comp = document.querySelector(".comp")
        if(cajaCartas.contains(comp)){
            cajaCartas.removeChild(comp)
            
                    }
    }
}

let check = document.querySelector(".chekMap")

check.addEventListener("click",()=>{
    if(check.checked){
        fetch(mapas)
    .then(response => response.json())
    .then(json => pintarMapas2(json))
        
    }else{
        fetch(mapas)
    .then(response => response.json())
    .then(json => pintarMapas(json))
    }
})


function pintarMapas2(valor) {
    let cajaCartas = document.querySelector(".cartas")
    cajaCartas.innerHTML = ""
    document.querySelector('.buscar').value = ""
    for (let i = 0; i < valor["data"].length; i++) {
        if(valor["data"][i].displayIcon == null){

        }else{
        let cajita = document.createElement("div")
        cajita.setAttribute("class", "cartaMaps carta")
        cajita.innerHTML = `
            <h5 class="card-title nombreMap">${valor["data"][i].displayName}</h5>
            <img src="${valor["data"][i].displayIcon}" class="maps">

        `
        cajaCartas.appendChild(cajita)
    }}
    verificarCartas(); 
}


function agregarAFavoritos(event) {
    let boton = event.currentTarget;
    let carta = boton.closest('.cartaMaps'); 
    let seccionFavoritos = document.querySelector('.favoritos');


    let nombreMap = carta.querySelector('.nombreMap').textContent;
    let imagenMap = carta.querySelector('.maps').src;


    let mapaFavorito = {
        nombre: nombreMap,
        imagen: imagenMap
    };


    let favoritos = JSON.parse(localStorage.getItem('favoritosMapas')) || [];


    let index = favoritos.findIndex(fav => fav.nombre === nombreMap);

    if (index === -1) {

        boton.innerHTML = '<i class="fas fa-star"></i>'; 
        seccionFavoritos.appendChild(carta);
        favoritos.push(mapaFavorito); 
    } else {

        boton.innerHTML = '<i class="far fa-star"></i>'; 
        seccionFavoritos.removeChild(carta);
        favoritos.splice(index, 1); 
    }


    localStorage.setItem('favoritosMapas', JSON.stringify(favoritos));
}

function cargarFavoritos() {
    let seccionFavoritos = document.querySelector('.favoritos');
    let favoritos = JSON.parse(localStorage.getItem('favoritosMapas')) || [];

    favoritos.forEach(mapa => {
        let cajita = document.createElement("div");
        cajita.setAttribute("class", "cartaMaps carta");
        cajita.innerHTML = `
            <h5 class="card-title nombreMap">${mapa.nombre}</h5>
            <img src="${mapa.imagen}" class="maps">
            <button class="estrella btn-favorito">★</button>
        `;
        seccionFavoritos.appendChild(cajita);
    });


    document.querySelectorAll('.btn-favorito').forEach(button => {
        button.addEventListener('click', agregarAFavoritos);
    });
}

cargarFavoritos();

