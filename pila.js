// Definición de la pila
let pila = [];

// Función para agregar elementos (PUSH)
function push(nombre, edad) {
  const persona = {
    nombre: nombre,
    edad: edad
  };

  pila.push(persona);
  console.log("Elemento agregado:", persona);
}

// Función para eliminar elementos (POP)
function pop() {
  if (pila.length === 0) {
    console.log("La pila está vacía");
    return;
  }

  const eliminado = pila.pop();
  console.log("Elemento eliminado:", eliminado);
}

// Función para mostrar la pila
function mostrarPila() {
  console.log("Contenido de la pila:", pila);
}

// 🔥 PRUEBAS (esto demuestra que funciona)
push("Orlando", 30);
push("Ana", 25);
mostrarPila();

pop();
mostrarPila();