const { createApp } = Vue;
import {menuDesp} from "./Apis.js"
let urlApi = "https://valorant-api.com/v1/weapons";

const app = createApp({
    data() {   
        return {
            arsenal: [],
            arsenalBk: [],
            shopData: [],
            uuidArma: "",
            armaDetalles: {}  
        };
    },

    created() {  
        this.traerData(urlApi);
        this.uuidArma = this.obtenerParametroUrl('uuid');
    },

    methods: {   
        traerData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.arsenal = data.data;
                    this.arsenal.forEach(arma => {
                        arma.category = arma.category.replace("EEquippableCategory::", "");
                    });
                    this.arsenalBk = this.arsenal;

                    // Aquí llamamos a `comparaUuid` para buscar el arma una vez que los datos están cargados
                    if (this.uuidArma) {
                        this.comparaUuid();
                    }
                });
        },

        obtenerParametroUrl(nombre) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(nombre);
        },

        comparaUuid() {
            const arma = this.arsenalBk.find(arma => arma.uuid == this.uuidArma);
            if (arma) {
                // Filtra las skins para asegurarte de que solo las que tienen un displayIcon válido se queden
                arma.skins = arma.skins.filter(skin => skin.displayIcon !== null);
                this.armaDetalles = arma;
            }
            console.log(this.uuidArma);
            console.log(this.armaDetalles);
        }
    }
}).mount('#app');


let boton = document.querySelector(".lista-desplegable")

boton.addEventListener("click", menuDesp)