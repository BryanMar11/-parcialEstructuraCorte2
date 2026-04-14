const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pila = [];

function menu() {
  console.log("\nPila actual:", pila);
  rl.question("¿Qué deseas hacer? (1: Agregar, 2: Eliminar, 3: Salir): ", (opcion) => {
    if (opcion === "1") {
      rl.question("Digita el número a agregar: ", (numero) => {
        pila.push(Number(numero));
        console.log("Agregado:", numero);
        menu();
      });
    } else if (opcion === "2") {
      if (pila.length > 0) {
        let eliminado = pila.pop();
        console.log("Eliminado:", eliminado);
      } else {
        console.log("La pila está vacía.");
      }
      menu();
    } else if (opcion === "3") {
      rl.close();
    } else {
      console.log("Opción no válida.");
      menu();
    }
  });
}

menu();