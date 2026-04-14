const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cola = [];

function menu() {
  console.log("\nCola actual:", cola);
  rl.question("¿Qué deseas hacer? (1: Agregar, 2: Eliminar, 3: Salir): ", (opcion) => {
    if (opcion === "1") {
      rl.question("Digita el número a agregar: ", (numero) => {
        cola.push(Number(numero));
        console.log("Agregado:", numero);
        menu();
      });
    } else if (opcion === "2") {
      if (cola.length > 0) {
        let eliminado = cola.shift();
        console.log("Eliminado:", eliminado);
      } else {
        console.log("La cola está vacía.");
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