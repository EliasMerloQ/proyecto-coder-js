function ticket(name,equip1,equip2,equip3,equip4) {
  alert("Bienvenido al gremio " + name + "\n Su equipo inicial es el siguiente: \n" + equip1 + "\n" + equip2 + "\n" + equip3 + "\n" + equip4) 
  alert("Pase a la Tienda de Colombus con el siguiente ticket a reclamar sus objetos gratis para su aventura!")
}
function check_clase(caracter){
  while(caracter !== "1" && caracter !== "2" && caracter !== "3"){
    caracter = prompt("Caracter ingresado no valido Ingrese: \n1) Artificiero\n2) Bárbaro \n3) Bardo")
  }
  return caracter
}
function check_ab(caracter1) {
  while(caracter1 != "a" && caracter1 != "b"){
    caracter1 = prompt("Caracter ingresado no valido \nIngrese (a) o (b)")      
  }
}
function check_abc(caracter2){
  while(caracter2 !== "a" && caracter2 !== "b" && caracter2 !== "c"){
    caracter2 = prompt("Caracter ingresado no valido \nIngrese (a), (b) o (c) ")      
  }
}

let nombre = prompt("Ingrese su nombre");
alert("Bienvenido " + nombre +"!");
let clase = prompt("Digame cual es su Clase \n (elija uno de los numeros mostrados a continuacion) \n1) Artificiero \n2) Bárbaro \n3) Bardo");
let _class = check_clase(clase);

switch(_class) {
  case "1":
    alert("Seleccione su equipo a continuación \n Elija ingresando a,b,c... \n el numero (n) indica la cantidad de objetos a dar")
    equipo1 = "(2) Armas simples"
    alert(equipo1)
    equipo2 = "(1) Ballesta ligera \n(20) Virotes"
    alert(equipo2)
    select3 = prompt("(a) (1) Armadura de cuero tachonado \n (b) (1) Cota de escamas")
    check_ab(select3);
    if(select3 == "a"){
      equipo3 = "(1) Armadura de cuero tachonado"
    }
    if(select3 == "b"){
      equipo3 = "(1) Cota de escamas"
    }
    equipo4 = "(1) Herramientas de ladron \n (1) Paquete de Explorador"
    break

  case "2":
    alert("Seleccione su equipo a continuación \n Elija ingresando a,b,c... \n el numero (n) indica la cantidad de objetos a dar")
    select1 = prompt ("(a) (1) Gran Hacha \n(b) (1) Arma marcial")
    check_ab(select1)
    if(select1 == "a") {
      equipo1 = "(1) Gran Hacha"
    }
    if(select1 == "b") {
      equipo1 = "(1) Arma Marcial";
    }
    select2 = prompt("(a) (2) Hacha de mano \n (b) (1) Arma simple")
    check_ab(select2)
    if(select2 == "a") {
      equipo2 = "(2) Hacha de mano"
    }
    if(select2 =="b") {
      equipo2 = "(1) Arma simple";
    }
    equipo3 = "(1) Equipo de explorador \n(4) Javalinas"
    alert(equipo3)
    equipo4 = ""
    break;

  case "3":
    alert("Seleccione su equipo a continuación \n Elija ingresando a,b,c... \n el numero (n) indica la cantidad de objetos a dar")
    select1 = prompt("(a) (1) Estoque \n(b) (1) Espada Larga \n (c) (1) Arma simple")
    check_abc(select1)
    console.log(select1)
    if(select1 == "a") {
      equipo1 = "(1) Estoque";
    }
    else if(select1 == "b") {
      equipo1 = "(1) Espada Larga"
    }
    else if(select1 == "c") {
      equipo1 = "(1) Arma simple"
    }
    console.log(equipo1)
    select2 = prompt("(a) (1) Paquete de diplomatico \n(b) (1) Paquete de artista");
    check_ab(select2)
    if(select2 = "a"){
      equipo2 = "(1) Paquete de diplomatico";
    }
    else if(select2 = "b"){
      equipo2 = "(1) Paquete de artista";
    }
    equipo3 = "(1) Instrumento musical"
    alert("(1) Instrumento musical")
    equipo4 = "(1) Armadura de cuero \n(1) Daga"
    alert("(1) Armadura de cuero \n(1) Daga")
    break
}

ticket(nombre,equipo1,equipo2,equipo3,equipo4)
