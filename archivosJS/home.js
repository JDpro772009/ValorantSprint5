
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