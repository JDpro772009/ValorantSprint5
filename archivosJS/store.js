import {menuDesp} from "./Apis.js"
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuTotal = document.querySelector(".menu-total");
    const content = document.querySelector(".content");})
  
 
  
  const products = [
    {
      id: 1,
      name: "Brimstone",
      price: "Free",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Proveniente de Estados Unidos, Brimstone proporciona una constante ventaja para su equipo con su arsenal orbital. Su habilidad otorga información de forma precisa y a distancia, lo que lo hace un comandante sin igual en el campo.",
      toBuy: false,
    },
    {
      id: 2,
      name: "Phoenix",
      price: 1.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Proviene del Reino Unido. El poder estelar de Phoenix se manifiesta en su estilo de combate al incendiar el campo de batalla con sus granadas aturdidoras y cegadoras. Sin importar si cuenta con apoyo o no, participará en la batalla bajo sus propios términos.",
      toBuy: false,
    },
    {
      id: 3,
      name: "Sage",
      price: 2.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "El bastión de China. Sage proporciona seguridad para sí misma y para su equipo en cualquier lugar. Gracias a su capacidad de revivir a sus compañeros caídos y evitar ataques agresivos, les da un lugar de protección en medio de la caótica pelea.",
      toBuy: false,
    },
    {
      id: 4,
      name: "Sova",
      price: 9.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Proveniente de la tundra del eterno invierno de Rusia. Sova rastrea, encuentra y elimina a sus enemigos con gran eficiencia y precisión. Su arco personalizado y sus increíbles habilidades de exploración impedirán que sus enemigos puedan esconderse de él.",
      toBuy: false,
    },
    {
      id: 5,
      name: "Viper",
      price: 9.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Viper, la química estadounidense, despliega varios artefactos químicos venenosos para controlar el campo de batalla y afectar la visión de los enemigos. Si las toxinas no asesinan a su presa, sin duda lo harán sus juegos mentales.",
      toBuy: false,
    },
    {
      id: 6,
      name: "Cypher",
      price: 2.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Cypher, el agente de información marroquí, es un sistema de vigilancia de un solo hombre que puede monitorear todos los movimientos de sus enemigos. No hay secreto que no descubra ni maniobra que no detecte. Cypher siempre está vigilando.",
      toBuy: false,
    },
    {
      id: 4,
      name: "Reyna",
      price: 9.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Desde el corazón de México, Reyna llega para dominar los duelos uno contra uno y cada asesinato que realiza aumenta su poder. Su letalidad solo está limitada por tu destreza al usarla, por lo que su eficacia dependerá mucho de ello.",
      toBuy: false,
    },
    {
      id: 5,
      name: "Omen",
      price: 9.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "La prodigio alemana Killjoy asegura fácilmente los puntos estratégicos del campo de batalla con su arsenal de inventos. Si el daño que inflige no detiene a sus enemigos, las debilitaciones de sus robots la ayudarán a aniquilarlos.",
      toBuy: false,
    },
    {
      id: 6,
      name: "Jett",
      price: 4.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Proviene de Corea del Sur. El ágil y evasivo estilo de pelea de Jett le permite enfrentarse a riesgos que otros no pueden. Es imparable en todos los enfrentamientos y acaba con sus enemigos antes de que sepan qué los atacó.",
      toBuy: false,
    },
    {
      id: 7,
      name: "Raze",
      price: 4.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Raze llega de Brasil con su explosiva personalidad y sus grandes armas. Gracias a su contundente estilo de juego, es muy buena para separar a los enemigos atrincherados y para despejar espacios estrechos con una gran cantidad de explosiones.",
      toBuy: false,
    },
    {
      id: 8,
      name: "Killjoy",
      price: 2.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "La prodigio alemana Killjoy asegura fácilmente los puntos estratégicos del campo de batalla con su arsenal de inventos. Si el daño que inflige no detiene a sus enemigos, las debilitaciones de sus robots la ayudarán a aniquilarlos.",
      toBuy: false,
    },
    {
      id: 9,
      name: "Breach",
      price: 0.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e435c3378b7999a3338b408dbb5da8ba63f91150-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Breach, el sueco biónico, lanza poderosas ráfagas cinéticas para abrirse paso a la fuerza a través del territorio enemigo. El daño y la interrupción que inflige garantizarán que ninguna pelea sea justa.",
      toBuy: false,
    },
    {
      id: 10,
      name: "Skye",
      price: 5.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Procedentes de Australia, Skye y su manada de bestias se abren paso por territorio hostil. Con sus creaciones que obstaculizan al enemigo y su poder para sanar a los demás, los equipos serán más fuertes y seguros al lado de Skye.",
      toBuy: false,
    },
    {
      id: 11,
      name: "Yoru",
      price: 1.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/05e1a996814dd10d7179efee327d29a7be00e912-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "El nativo de Japón, Yoru, fractura la realidad para infiltrarse en las líneas enemigas sin ser visto. Con engaños y agresividad por igual, sorprende a sus objetivos antes de que sepan dónde buscarlo.",
      toBuy: false,
    },
    {
      id: 12,
      name: "Astra",
      price: 9.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ba51d43803082941b0274b66413b0acc972546dd-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "La agente ghanesa Astra canaliza las energías del cosmos para remodelar los campos de batalla a su antojo. Con pleno dominio de su forma astral y un talento para una profunda previsión estratégica, siempre está eones por delante del próximo movimiento de su enemigo.",
      toBuy: false,
    },
    {
      id: 13,
      name: "KAY/O",
      price: 6.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "KAY/O es una máquina de guerra construida para un único propósito: neutralizar radiantes. Su poder para suprimir las habilidades del enemigo anula la capacidad de sus oponentes para contraatacar, lo que les asegura a él y a sus aliados la ventaja definitiva.",
      toBuy: false,
    },
    {
      id: 14,
      name: "Chamber",
      price: 1.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Bien vestido y bien armado, el diseñador de armas francés Chamber repele agresores con una precisión mortal. Aprovecha su arsenal personalizado para mantener a los enemigos a raya y eliminarlos desde lejos. Siempre cuenta con la contingencia perfecta para cada plan.",
      toBuy: false,
    },
    {
      id: 15,
      name: "Neon",
      price: "Free",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "La agente filipina, Neon, avanza a velocidades impactantes, descargando ráfagas de energía bioeléctrica tan rápido como su cuerpo la genera. Se adelanta velozmente a sus enemigos para atraparlos desprevenidos y luego los fulmina más rápido que un rayo.",
      toBuy: false,
    },
    {
      id: 16,
      name: "Fade",
      price: 39.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e7099cc13a665ed2b556d514e50984393ed49967-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Fade, la cazarrecompensas turca, desata el poder de las pesadillas para apoderarse de los secretos del enemigo. En armonía con el terror puro, acecha a sus objetivos y revela sus miedos más profundos antes de aplastarlos en la oscuridad.",
      toBuy: false,
    },
    {
      id: 17,
      name: "Harbor",
      price: "Free",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1246b5c517f6c8fa660e884a7032c1c54994003e-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Originario de las costas de la India, Harbor arrasa el campo de batalla utilizando tecnología ancestral que controla el agua. Desata corrientes furiosas y olas aplastantes para escudar aliados y apalear oponentes.",
      toBuy: false,
    },
    {
      id: 18,
      name: "Gekko",
      price: "Free",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8d88f133f735f6a9077679b1ece754e5624c728e-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Gekko, el nativo de Los Ángeles, lidera un grupo de criaturas revoltosas y son como uña y mugre. Sus amiguitos avanzan a toda velocidad, dispersando a los enemigos, y Gekko los persigue para reagruparlos y lanzarlos de nuevo.",
      toBuy: false,
    },
    {
      id: 19,
      name: "Deadlock",
      price: "Free",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "La agente noruega Deadlock despliega una variedad de nanocables de alta tecnología para asegurar el campo de batalla, incluso en los asaltos más letales. Nadie escapa de su ojo vigilante ni sobrevive a su ferocidad inquebrantable.",
      toBuy: false,
    },
    {
      id: 20,
      name: "Iso",
      price: 5.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "El agente chino Iso es un neutralizador a sueldo que entra en estado de fluidez para desmantelar a sus oponentes. Reconfigura la energía ambiental para convertirla en una protección a prueba de balas y avanza con determinación hacia su próximo duelo a muerte.",
      toBuy: false,
    },
    {
      id: 21,
      name: "Clove",
      price: 3.99,
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=413",
      description:
        "Clove llega desde Escocia buscando pleitos y sus travesuras no paran ni en el calor de la batalla, ni en el frío de la muerte. Con juventud e inmortalidad, confunde a los enemigos incluso desde el más allá, porque saben que en cualquier momento puede regresar al mundo de los vivos.",
      toBuy: false,
    },
  ];
  
  const { createApp } = Vue;
  
  const app = createApp({
    data() {
      return {
        ListaProductosBK: products,
        ListaProductos: products,
        listaCarrito: [],
        textoBuscar: "",
      };
    },
    created() {
      this.main();
    },
    methods: {
      main() {
        if (JSON.parse(localStorage.getItem("listaCarrito"))) {
          this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
          for (let productoCarrito of this.listaCarrito) {
            for (let productoDisponible of this.ListaProductos) {
              if (productoDisponible.id == productoCarrito.id) {
                productoDisponible.toBuy = !productoDisponible.toBuy;
              }
            }
          }
        }
      },
      toBuy(producto) {
        for (let productoDisponible of this.ListaProductos) {
          if (productoDisponible == producto) {
            if (!this.listaCarrito.includes(producto)) {
              productoDisponible.toBuy = !productoDisponible.toBuy;
              this.listaCarrito.push(producto);
            }
          }
        }
        localStorage.setItem("listaCarrito", JSON.stringify(this.listaCarrito));
        this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
      },
      filtroBuscar() {
        if (this.textoBuscar.length != 0) {
          this.ListaProductos = [...this.ListaProductosBK].filter((producto) =>
            producto.name
              .toLowerCase()
              .includes(this.textoBuscar.trim().toLowerCase())
          );
          this.filtrar();
        } else {
          this.ListaProductos = [...this.ListaProductosBK];
          this.filtrar();
        }
      },
      filtrar() {
        let sentido = document.querySelector("input[type=radio]:checked").value;
        let propiedad = document.querySelector("#filtroSelect").value;
        if (propiedad != "none") {
          if (sentido == "ascendente") {
            if (propiedad == "name") {
              this.ListaProductos = this.ListaProductos.sort((a, b) =>
                b[propiedad].localeCompare(a[propiedad])
              );
            } else {
              this.ListaProductos = this.ListaProductos.sort(
                (a, b) => a[propiedad] - b[propiedad]
              );
            }
          } else {
            if (propiedad == "name") {
              this.ListaProductos = this.ListaProductos.sort((a, b) =>
                a[propiedad].localeCompare(b[propiedad])
              );
            } else {
              this.ListaProductos = this.ListaProductos.sort(
                (a, b) => b[propiedad] - a[propiedad]
              );
            }
          }
        }
      },
      limpiarCarrito(producto) {
        if (this.listaCarrito.length == 1) {
          for (let productoDisponible of this.ListaProductos) {
            if (productoDisponible.id == producto.id) {
              productoDisponible.toBuy = !productoDisponible.toBuy;
            }
          }
          this.listaCarrito = [];
          localStorage.clear();
        } else {
          for (let productoDisponible of this.ListaProductos) {
            if (productoDisponible == producto) {
              productoDisponible.toBuy = !productoDisponible.toBuy;
            }
          }
          let index = 0;
          for (let productoCarrito of this.listaCarrito) {
            if (productoCarrito.id == producto.id) {
              index = this.listaCarrito.indexOf(productoCarrito);
            }
          }
          this.listaCarrito.splice(index, 1);
          localStorage.setItem("listaCarrito", JSON.stringify(this.listaCarrito));
        }
      },
      vaciarCarrito() {
        for (let productoDisponible of this.ListaProductos) {
          productoDisponible.toBuy = false;
        }
        this.listaCarrito = [];
        localStorage.clear();
      },
    },
    computed: {},
  }).mount("#store");
  
  let boton = document.querySelector(".lista-desplegable")

boton.addEventListener("click", menuDesp)