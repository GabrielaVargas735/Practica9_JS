/**
 * Eventos.
 * Ejemplo 7: Aplica el mismo handler a múltiples elementos.
 */

// Event handler: Esta función se ejecuta cuando el evento se dispara.
let c = 'blue';
function changeColor(event) {
  if (c == 'red'){
    event.currentTarget.style.backgroundColor = 'red';
    c = 'blue'}
  else{
    event.currentTarget.style.backgroundColor = 'blue';
    c = 'red'
  }
}
// document.getElementByTagName(): Obtiene un array (HTMLCollection) con todos los
// elementos del tipo indicado.
let elements = document.querySelectorAll('div');
// Asigna el event handler a *cada* elemento.
// Itera sobre los elementos usando for.
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}


