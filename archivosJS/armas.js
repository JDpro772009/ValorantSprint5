const {createApp} = Vue
let urlApi = "https://valorant-api.com/v1/weapons"
import {menuDesp} from "./Apis.js"

/* 
fetch(urlApi).then(response => response.json()).then(data => {
    console.log(data)}) */


const app = createApp({
    data(){    //guarda la informacion que utilizara la app
        return{
            arsenal:[],
            arsenalBk:[],
            shopData: [],
            categorias:[],
            textoBuscador:"",
            categoriasSel: [],
            armaDetalles:{}
        }
    },

    created(){  //funciones que se ejecutan al iniciar la pagina
        this.traerData(urlApi)
        
    },

    methods:{   //funciones que necesitemos utilizar
        traerData(url){
            fetch(url).then(response => response.json()).then(data => {
                console.log(data);
                this.arsenal = data.data;
                this.arsenal.forEach(arma => {
                    arma.category = arma.category.replace("EEquippableCategory::", "");
                });
                this.arsenalBk = this.arsenal
                this.categorias = Array.from(new Set(data.data.map((arma) => arma.category)))
                console.log(this.arsenal);
                console.log(this.categorias);
                
            })
        },

       
        
    },

    computed:{   //funciones que dependan de eventos

        superFiltro(){
            let primerFiltro = this.arsenalBk.filter(arma => arma.displayName.toLowerCase().includes(this.textoBuscador.toLowerCase()))
            console.log(this.categoriasSel);
            if (this.categoriasSel.length == 0){
                this.arsenal = primerFiltro
            }else {
                this.arsenal = primerFiltro.filter(arma => this.categoriasSel.includes(arma.category))
            }
        }


    }


}).mount('#app')

let boton = document.querySelector(".lista-desplegable")

boton.addEventListener("click", menuDesp)
