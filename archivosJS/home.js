
import {agentes} from "./Apis.js"

let Direc = agentes

let {createApp} = Vue

let app = createApp({
    data(){
        return{

        }
    },
    created(){
        this.traerData(Direc)
    },
    methods:{
        traerData(url){
            fetch(url)
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                
            })
        }
    },
    computed:{

    }
}).mount("#app")
