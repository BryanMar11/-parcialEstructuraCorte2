const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pila = [];

function menu() {
  console.log(pila);
  
  rl.question("1. Agregar Objeto\n2. Eliminar Objeto\n3. Salir\n> ", (opcion) => {
    if (opcion === "1") {
      rl.question("Propiedad 1: ", (p1) => {
        rl.question("Propiedad 2: ", (p2) => {
          pila.push({ dato1: p1, dato2: p2 });
          console.log("Agregado.");
          menu();
        });
      });
    } else if (opcion === "2") {
      if (pila.length > 0) {
        console.log("Eliminado:", pila.pop());
      } else {
        console.log("Vacía.");
      }
      menu();
    } else if (opcion === "3") {
      rl.close();
    } else {
      menu();
    }
  });
}

menu();