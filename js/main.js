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
}

function convertValue(value) {
  const type = value.slice(-2); // obtener los últimos dos caracteres de la cadena
  const amount = parseInt(value); // convertir el valor en un número entero

  if (type === 'gp') {
    return amount * 100;
  } else if (type === 'sp') {
    return amount * 10;
  } else if (type === 'cp') {
    return amount;
  } else {
    return null; // en caso de que la cadena no termine en po, pp o pc, devolver nulo
  }
}



let carrito = [];

// Función para cargar el contenido del carrito desde localStorage
function cargarCarritoDesdeLocalStorage() {
  const carritoLocalStorage = localStorage.getItem('carrito');
  if (carritoLocalStorage) {
    let carritoObjeto = JSON.parse(carritoLocalStorage);
    if (!Array.isArray(carritoObjeto)) {
      // Si el contenido de localStorage no es un array, convertirlo a un array de objetos
      carritoObjeto = [carritoObjeto];
    }
    // Verificar que cada elemento del array tenga las propiedades esperadas
    const elementosValidos = carritoObjeto.filter(elemento => (
      elemento.hasOwnProperty('id') &&
      elemento.hasOwnProperty('nombre') &&
      elemento.hasOwnProperty('costo') &&
      elemento.hasOwnProperty('cantidad')
    ));
    // Asignar los elementos válidos a carrito
    carrito = elementosValidos;
  }
}



// Al cargar la página, cargar el contenido del carrito desde localStorage
cargarCarritoDesdeLocalStorage();



function agregarAlCarrito(id, nombre, costo) {
  // Verificar si el elemento ya está en el carrito
  const indice = carrito.findIndex(item => item.nombre === nombre);
  if (indice >= 0) {
    // Si ya está en el carrito, actualizar la cantidad
    carrito[indice].cantidad += 1;
  } else {
    
    // Si no está en el carrito, agregar un nuevo objeto
    carrito.push({ id, nombre, costo, cantidad: 1 });
  }
  actualizarCarrito()
}




function actualizarCarrito() {
  // Obtener el contenedor del carrito
  const contenedor = $("#michest .modal-body");
  // Limpiar el contenido del contenedor
  contenedor.empty();
  if (carrito.length <= 0){ 
    let elemento = $(`<h4> El carrito esta Vacio </h4>`)
    contenedor.append(elemento)
    localStorage.removeItem("carrito")
  }
  // Recorrer los elementos del carrito
  carrito.forEach(item => {
    let micosto = convertValue(item.costo) ;
    // Calcular el subtotal del elemento
    const subtotal = micosto * item.cantidad;
    
    // Crear un elemento HTML para el elemento del carrito
    const elemento = $( `
    <div class="carrito-medieval">
    <div class="item-carrito d-flex align-items-center">
    <div class="col-md-4 nombre">${item.nombre}</div>
    <div class="col-md-2 precio">${micosto / 100} gp</div>
    <div class="col-md-3 cantidad d-flex align-items-center justify-content-center">
      <button class="btn btn-medieval restar" onclick="restarDelCarrito('${item.nombre}')">-</button>
      <span>${item.cantidad}</span>
      <button class="btn btn-medieval sumar" onclick="agregarAlCarrito('${item.id}', '${item.nombre}' , '${micosto}')">+</button>
    </div>
    <div class="col-md-2 subtotal">${subtotal / 100} gp</div>
    <div class="eliminar">
      <button class="btn btn-medieval btn-eliminar" onclick="eliminarDelCarrito('${item.nombre}')">X</button>
    </div>
  </div>
</div>
    ` );
    
    // Agregar el elemento al contenedor
    contenedor.append(elemento);
    localStorage.setItem('carrito', JSON.stringify(carrito));
  });
  
  // Calcular el total del carrito
  const total = carrito.reduce((suma, item) => suma + convertValue(item.costo) * item.cantidad, 0);
  
  // Crear un elemento HTML para el total del carrito
  const totalElemento = $(`
    <div class="total-carrito">Total: ${total / 100} gp</div>
  `);
  
  // Agregar el total al contenedor
  contenedor.append(totalElemento);
}


function restarDelCarrito(nombre) {
  // Buscar el elemento correspondiente en el carrito
  const indice = carrito.findIndex(item => item.nombre === nombre);
  
  // Verificar si el elemento está en el carrito
  if (indice >= 0) {
    // Restar la cantidad
    carrito[indice].cantidad -= 1;
    
    // Eliminar el elemento si la cantidad es cero
    if (carrito[indice].cantidad === 0) {
      carrito.splice(indice, 1);
    }
  }
  actualizarCarrito()
}


function eliminarDelCarrito(nombre) {
  // Buscar el elemento correspondiente en el carrito
  const indice = carrito.findIndex(item => item.nombre === nombre);
  
  // Verificar si el elemento está en el carrito
  if (indice >= 0) {
    // Eliminar el elemento del carrito
    carrito.splice(indice, 1);
  }
  actualizarCarrito()
}

const imagenModal = document.getElementById('chest');
const modal = new bootstrap.Modal(document.getElementById('michest'));

document.addEventListener('hidden.bs.modal', (event) => {
  if (event.target.id === 'michest') {
    createChest();
  }
});


imagenModal.addEventListener('click', () => {
  modal.show();
  createChestOpen();
});
function createChestOpen(){
  const chestOn = document.getElementById("chest")
  let html = ""
  chestOn.innerHTML = ""
  html = `

  
  <img class="treasureChest" id="teasureChest" src="../media/treasure-open.png"
       alt=""> `

      
  chestOn.innerHTML += html
}

//Cofre 
function createChest(){
  const chestOn = document.getElementById("chest")
  let html = ""
  chestOn.innerHTML = ""
  html = `


  
  <img class="treasureChest" src="../media/treasure.png" alt="">
   
      `
  chestOn.innerHTML += html
}




createChest()


  



window.onload = function() {
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    }
    

  $.ajax({
    url: "https://www.dnd5eapi.co/api/equipment-categories/weapon",
    method: "GET",
    success: function(data) {
      const weapons = data.equipment.map(async function(weaponData) {
        const response = await $.ajax({
          url: `https://www.dnd5eapi.co${weaponData.url}`,
          method: "GET"
        });
  
        const weapon = new Weapons(
          response.name,
          response.damage?.damage_dice || "",
          response.properties?.map(prop => prop.name).join(", ") || "",
          response.weight,
          response.cost?.quantity ? `${response.cost.quantity} ${response.cost.unit}` : "",
          response.weapon_category,
          response.range?.normal ? `${response.range.normal}` : ""
        );
  
        return weapon;
      });
      
      Promise.all(weapons).then(function(weapons) {
        // Filtrar los datos para excluir los elementos sin daño
        const filteredWeapons = weapons.filter(function(weapon) {
          return weapon.damage !== "" && weapon.cost !== "" && weapon.properties !== "" && weapon.weight !== "";
        });
  
        // Agregar propiedad "DT_RowId" a cada objeto de los datos
        const weaponsWithIds = filteredWeapons.map(function(weapon, index) {
          return { ...weapon, DT_RowId: `row_${index}` };
        });
       
        console.log(weapons);
        const table = $("#myTable").DataTable({
          data: weaponsWithIds,
          columns: [
            { title: "Nombre", data: "name" },
            { title: "Daño", data: "damage" },
            { title: "Propiedades", data: "properties" },
            { title: "Peso", data: "weight" },
            { title: "Alcance", data: "range" },
            { title: "Tipo", data: "type" },
            { title: "Costo", data: "cost" },
          ],
        
          autoWidth: true,
          // Filtrar los datos para excluir los elementos sin daño
          dataSrc: function(json) {
            const filteredData = json.data.filter(function(row) {
              return row[1] !== "";
            });
            return { data: filteredData };
          }
        });
        
        $("#myTable tbody").on("click", "tr", function() {
          console.log("sucess");
          // Obtener los datos de la fila
          const fila = table.row(this).data();
          
          // Mostrar notificación con toastr
          toastr.success(`Se agregó ${fila.name} al carrito.`);
          
          
          // Agregar el elemento al carrito
          agregarAlCarrito(fila.DT_RowId, fila.name, fila.cost);
        });
        // Agregar filtro a la tabla
        $("#myTable_filter input").unbind().bind("keyup", function() {
          table.search(this.value).draw();
        });
        
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });


  // Resaltar la fila al pasar el mouse sobre ella
$("#myTable tbody").on("mouseenter", "tr", function() {
  $(this).addClass("table-active");
}).on("mouseleave", "tr", function() {
  $(this).removeClass("table-active");
});

actualizarCarrito();

}