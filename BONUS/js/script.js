const list = document.querySelector('ul');
let li;
// Creo un ciclo for con la variabile num che parte da 1 fino a 100, incrementandola di 1 ad ogni ciclo
for (let num = 1; num <= 100; num++){
    // controllo che il numero sia multiplo sia di 3 che di 5, in quel caso stampo FizzBuzz in console
    if (num % 3 == 0 && num % 5 == 0){
        li = `<li>Il numero ${num} è multiplo di 3 e di 5, FizzBuzz</li>`;

    // controllo che il numero sia multipo di 3, in quel caso stampo Fizz in console
    } else if (num % 3 == 0) {
        li = `<li>Il numero ${num} è multiplo di 3, Fizz</li>`;

    // controllo che il numero sia multipo di 5, in quel caso stampo Buzz in console
    } else if (num % 5 == 0) {
        li = `<li>Il numero ${num} è multiplo di 5, Buzz</li>`;

    // altrimenti, stampo semplicemente il numero in console
    } else {
        li = `<li>Numero ${num}</li>`;
    }
    list.innerHTML += li;
}