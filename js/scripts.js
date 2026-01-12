/* ./js/scripts.js in silus-counter-3 of silus-counter-3.bauska.org */
/* 12/05/2025 = 2,250
   1/4/2026 = 3,250 + 5,500 
   1/11/206 = 9,500
   dd/mm/yy = 0 */
let counter = 2250 + 3250 + 5500 + 9500;
/* all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
