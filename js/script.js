// Creo un ciclo for con la variabile num che parte da 1 fino a 100, incrementandola di 1 ad ogni ciclo
for (let num = 1; num <= 100; num++){

    // controllo che il numero sia multiplo sia di 3 che di 5, in quel caso stampo FizzBuzz in console
    if (num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");

    // controllo che il numero sia multipo di 3, in quel caso stampo Fizz in console
    } else if (num % 3 == 0) {
        console.log("Fizz");
    
    // controllo che il numero sia multipo di 5, in quel caso stampo Buzz in console
    } else if (num % 5 == 0) {
        console.log("Buzz");
    // altrimenti, stampo semplicemente il numero in console
    } else {
        console.log(num);
    }
}