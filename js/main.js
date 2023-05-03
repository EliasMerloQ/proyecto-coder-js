// Constructor de Armas
class Weapons{
  constructor(name, damage, properties, weight, cost, type, range){
    this.name = name
    this.damage = damage
    this.properties = properties
    this.weight = weight
    this.cost = cost
    this.type = type
    this.range = range
  }
  /*Metodo para estandarizar el valor en po*/
  moneyValue() {
    const po = this.cost.includes("po") ? parseInt(this.cost) : 0;
    const pp = this.cost.includes("pp") ? parseInt(this.cost) : 0;
    const pc = this.cost.includes("pc") ? parseInt(this.cost) : 0;
    const total = po + pp / 10 + pc / 100;
    const newValue = Math.floor(total / 1) + (total % 1);
    return `${newValue} po`;
  }
}
// Constructor de Armaduras
class Armors {
  constructor(name, armorClase, stealth, strength, weight, cost, type){
    this.name = name
    this.ac = armorClase
    this.stealth = stealth
    this.strength = strength
    this.weight = weight
    this.cost = cost
    this.type = type
  }
  moneyValue() {
    const po = this.cost.includes("po") ? parseInt(this.cost) : 0;
    const pp = this.cost.includes("pp") ? parseInt(this.cost) : 0;
    const pc = this.cost.includes("pc") ? parseInt(this.cost) : 0;
    const total = po + pp / 10 + pc / 100;
    const newValue = Math.floor(total / 1) + (total % 1);
    return `${newValue} po`;
  }
}

// Armas instanciadas como objetos
const baston = new Weapons("Bastón", "1d6 contundente", "Versátil (1d8)", "4 lb.",  "2 pp", "simple", "melee");
const clava = new Weapons("Clava", "1d4 contundente", "Ligera", "2 lb.", "1 pp", "simple", "melee");
const daga = new Weapons("Daga", "1d4 perforante", "Sutil, ligera, arrojadiza (alcance 20/60)", "1 lb.", "2 po", "simple", "melee");
const granClava = new Weapons("Gran Clava", "1d8 contundente", "Dos manos", "10 lb.", "2 pp", "simple", "melee");
const hachaDeMano = new Weapons("Hacha de mano", "1d6 cortante", "Ligera, arrojadiza (alcance 20/60)", "2 lb.", "5 po", "simple", "melee");
const hoz = new Weapons("Hoz", "1d4 cortante", "Ligera", "2 lb.", "1 po", "simple", "melee");
const javalina = new Weapons("Javalina", "1d6 perforante", "Arrojadiza (alcance 30/120)", "2 lb.", "5 pp", "simple", "range");
const lanza = new Weapons("Lanza", "1d6 perforante", "Arrojadiza (alcance 20/60), versátil (1d8)", "3 lb.", "1 po", "simple", "melee");
const martilloLigero = new Weapons("Martillo ligero", "1d4 contundente", "Ligera, arrojadiza (alcance 20/60)", "2 lb.","2 po", "simple", "melee");
const maza = new Weapons("Maza", "1d6 contundente", "–", "4 lb", "5 po", "simple", "melee");
const arcoCorto = new Weapons("Arco corto", "1d6 perforante", "Munición (alcance 80/320), dos manos", "2 lb.", "25 po", "marcial", "range");
const ballestaLigera = new Weapons("Ballesta ligera", "1d8 perforante", "Munición (alcance 80/320), de carga, dos manos", "5 lb.", "25 po", "marcial", "range");
const dardo = new Weapons("Dardo", "1d4 perforante", "Sutil, arrojadiza (alcance 20/60)", "1/4 lb.", "5 pc", "simple", "range");
const honda = new Weapons("Honda", "1d4 contundente", "Munición (alcance 30/120)", "-", "1 pp", "simple", "range");
const alabarda = new Weapons("Alabarda", "1d10 cortante", "Pesada, alcance, dos manos", "6 lb.", "20 po", "marcial", "melee");
const cimitarra = new Weapons("Cimitarra", "1d6 cortante", "Sutil, ligera", "3 lb.", "25 po", "marcial", "melee");
const espadaCorta = new Weapons("Espada corta", "1d6 perforante", "Sutil, ligera", "2 lb.", "10 po", "marcial", "melee");
const espadaLarga = new Weapons("Espada larga", "1d8 cortante", "Versátil (1d10)", "3 lb.", "15 po", "marcial", "melee");
const estoque = new Weapons("Estoque", "1d8 perforante", "Sutil", "2 lb.", "25 po", "marcial", "melee");
const granHacha = new Weapons("Gran hacha", "1d12 cortante", "Pesada, dos manos", "7 lb.", "30 po", "marcial", "melee");
const guja = new Weapons("Guja", "1d10 cortante", "Pesada, alcance, dos manos", "6 lb.", "20 po", "marcial", "range");
const hachaDeBatalla = new Weapons("Hacha de batalla", "1d8 cortante", "Versátil (1d10)", "4 lb.", "10 po", "marcial", "melee");
const lanzaDeCaballeria = new Weapons("Lanza de caballería", "1d12 perforante", "Alcance, especial", "6 lb.", "10 po", "marcial", "range");
const latigo = new Weapons("Látigo", "1d4 cortante", "Sutil, alcance", "3 lb.", "2 po", "marcial", "range");
const luceroDelAlba = new Weapons("Lucero del alba", "1d8 perforante", "-", "4 lb.", "15 po", "marcial", "melee");
const mandoble = new Weapons("Mandoble", "2d6 cortante", "Pesada, dos manos", "6 lb.", "50 po", "marcial", "melee");
const mangual = new Weapons("Mangual", "1d8 contundente", "-", "2 lb.", "10 po", "marcial", "melee");
const martilloDeGuerra = new Weapons("Martillo de guerra", "1d8 contundente", "Versátil (1d10)", "2 lb.", "15 po", "marcial", "melee");
const mazoDeGuerra = new Weapons("Mazo de guerra", "2d6 contundente", "Pesada, dos manos", "10 lb.", "10 po", "marcial", "melee");
const pica = new Weapons("Pica", "1d10 perforante", "Pesada, alcance, dos manos", "18 lb.", "5 po", "marcial", "range");
const picoDeGuerra = new Weapons("Pico de guerra", "1d8 perforante", "-", "2 lb.", "5 po", "marcial", "melee");
const tridente = new Weapons("Tridente", "1d6 perforante", "Arrojadiza (alcance 20/60), versátil (1d8)", "4 lb.", "5 po", "marcial", "range");
//Armaduras instanciadas como objetos
const acolchada = new Armors("Acolchada", "CA 11 + DES", "Desventaja", "-", "8 lb.", "5 po", "armadura ligera");
const cuero = new Armors("Cuero", "CA 11 + DES", "-", "-", "10 lb.", "10 po", "armadura ligera");
const cueroTachonado = new Armors("Cuero tachonado", "CA 12 + DES", "Desventaja", "-", "13 lb.", "45 po", "armadura ligera");
const camisaDeMalla = new Armors("Camisa de malla", "CA 13 + DES (máx. 2)", "-", "-", "20 lb.", "50 po", "armadura media");
const cotaDeEscamas = new Armors("Cota de escamas", "CA 14 + DES (máx. 2)", "Desventaja", "-", "20 lb.", "50 po", "armadura media");
const coraza = new Armors("Coraza", "CA 14 + DES (máx. 2)", "-", "-", "20 lb.", "400 po", "armadura media");
const placasMalla = new Armors("Placas y malla", "CA 15 + DES(máx. 2)", "Desventaja", "-", "40 lb.", "750 po", "armadura media")
const pieles = new Armors("Pieles", "CA 12 + DES (máx. 2)", "-", "-", "12 lb.", "10 po", "armadura media");
const armaduraDeBandas = new Armors("Armadura de bandas", "CA 17", "Desventaja", "Fue 15", "60 lb.", "200 po", "armadura pesada");
const armaduraDePlacas = new Armors("Armadura de placas", "CA 18", "Desventaja", "Fue 15", "65 lb.", "1500 po", "armadura pesada");
const cotaGuarnecida = new Armors("Cota guarnecida", "CA 14", "Desventaja", "-", "40 lb.", "30 po", "armadura pesada")
const cotaDeMalla = new Armors("Cota de malla", "CA 16", "Desventaja", "Fue 13", "55 lb.", "75 po", "armadura pesada");

// Array de todas las armas
const weaponList = [baston, clava, daga, granClava, hachaDeMano, hoz, javalina, lanza, martilloLigero, maza,arcoCorto, ballestaLigera, dardo, honda, alabarda, cimitarra, espadaCorta, espadaLarga, estoque, granHacha, guja, hachaDeBatalla, lanzaDeCaballeria, latigo, luceroDelAlba, mandoble, mangual, martilloDeGuerra, mazoDeGuerra, pica, picoDeGuerra, tridente]
//Array de todas las armaduras
const armorList = [acolchada, cuero, cueroTachonado, camisaDeMalla, cotaDeEscamas, coraza,placasMalla ,pieles, armaduraDeBandas, armaduraDePlacas, cotaGuarnecida, cotaDeMalla];

// Filtrar las armas que tienen la propiedad "type" igual a "simple"
const weaponsListSimple = weaponList.filter((arma) => arma.type === "simple");

// Filtrar las armas que tienen la propiedad "type" igual a "marcial"
const weaponsListMarcial = weaponList.filter((arma) => arma.type === "marcial");

// Filtrar las armaduras que tienen la propiedad "type" igual a "armadura ligera"
const armorListLight = armorList.filter((armadura) => armadura.type === "armadura ligera");

// Filtrar las armaduras que tienen la propiedad "type" igual a "armadura media"
const armorListMedium = armorList.filter((armadura) => armadura.type === "armadura media");

// Filtrar las armaduras que tienen la propiedad "type" igual a "armadura pesada"
const armorListHeavy = armorList.filter((armadura) => armadura.type === "armadura pesada");

//--------//

function convertValue(value) {
  const type = value.slice(-2); // obtener los últimos dos caracteres de la cadena
  const amount = parseInt(value); // convertir el valor en un número entero

  if (type === 'po') {
    return amount * 100;
  } else if (type === 'pp') {
    return amount * 10;
  } else if (type === 'pc') {
    return amount;
  } else {
    return null; // en caso de que la cadena no termine en po, pp o pc, devolver nulo
  }
}


function agregarArma(weaponArr){
  let html = ""
  armasLista.innerHTML = ""
  armasLista.innerHTML += html
  for(let i = 0; i < weaponArr.length; i++){
    const Weapons = weaponArr[i]
    html +=`
            <div class="row-link-content p-1">
            <li class="weapon" data-categoria="${Weapons.range}" data-tipo="${Weapons.type}">
            <div class="row">
            <div class="col-6 col-md-3">
              <strong class="liColor">${Weapons.name}</strong>
            </div>
            <div class="col-6 col-md-3">
              <strong class="liColor">${Weapons.damage}</strong>
            </div>
            <div class="col-3 col-md-3">
              <strong class="liColor">${Weapons.properties}</strong>
            </div>
            <div class="col-1 col-md-1">
              <strong class="liColor">${Weapons.weight}</strong>
            </div>
            <div class="col-1 col-md-1">
              <strong class="liColor">${Weapons.cost}</strong>
            </div>
            <div class="col-1 col-md-1">
            <button class="btn btn-warning" onclick="addToCart('${Weapons.name}', '${convertValue(Weapons.cost)}')">
            <i class="fas fa-plus">+</i>
          </button>
            </div>
          </div>
            </div>
            <hr style = "color: #fff"> 
            </div>`
  }
  armasLista.innerHTML += html
}
agregarArma(weaponList)

const miBoton = document.getElementById('miBoton')
miBoton.addEventListener("click", () => {
  agregarArma(weaponsListSimple)
  alert("hiciste click")
});

function agregarArmadura(armadura){
  const ListaArmaduras = document.getElementById("armadurasLista")
  ListaArmaduras.innerHTML +=`
             <div class="row-link-content p-1">
             <li class="armor" data-categoria="${armadura.stealth}" data-tipo="${armadura.type}">
              <div class="row">
                <div class="col-5 col-md-3">
                  <strong class="liColor armaduraName">${armadura.name}</strong>
                </div>
                <div class="col-5 col-md-3">
                  <strong class="liColor ">${armadura.ac}</strong>
                </div>
                <div class="col-2 col-md-2">
                  <strong class="liColor">${armadura.stealth}</strong>
                </div>
                <div class="col-2 col-md-1">
                  <strong class="liColor">${armadura.strength}</strong>
                </div>
                <div class="col-1 col-md-1">
                  <strong class="liColor">${armadura.weight}</strong>
                </div>
                <div class="col-1 col-md-1">
                  <strong class="liColor">${armadura.cost}</strong>
                </div>
                <div class="col-1 col-md-1">
            <button class="btn btn-warning" onclick="addToCart('${armadura.name}', '${convertValue(armadura.cost)}')">
            <i class="fas fa-plus">+</i>
              </button>
            </div>
              </div>
              </div>
            <hr style = "color: #fff"> 
            </div>` 
}
for (let i = 0; i < armorList.length; i++) {
  agregarArmadura(armorList[i]);
}
//filtro

//carrito
function Carrito() {
  this.productos = [];
  this.total = 0;
}

//Cofre 
function createChest(){
  const chestOn = document.getElementById("chest")
  let html = ""
  chestOn.innerHTML = ""
  html = `
      <a href=""><img
      class="treasureChest" src="../media/treasure.png" alt=""> <span id="cart-count">0</span> </a>`
  chestOn.innerHTML += html
}

createChest()
