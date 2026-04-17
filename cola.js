// Simulación de una cola (Queue)
let cola = [];

// Agregar elemento (enqueue)
function enqueue(numero) {
  cola.push(numero);
  console.log("Se agregó:", numero);
}

// Eliminar elemento (dequeue)
function dequeue() {
  if (cola.length === 0) {
    console.log("La cola está vacía");
    return;
  }

  const eliminado = cola.shift();
  console.log("Se eliminó:", eliminado);
}

// Mostrar cola
function mostrarCola() {
  console.log("Cola actual:", cola);
}

// Pruebas
enqueue(10);
enqueue(20);
enqueue(30);
mostrarCola();

dequeue();
mostrarCola();