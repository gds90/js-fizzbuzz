Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS:
Crea un container nel DOM , aggiungendo (attraverso la funzione `appendChild()` oppure con la classica concatenazione vista fin'ora) un elemento html con il numero o la stringa corretta da mostrare.

<!-- SOTTOPROBLEMI -->
1) Creo un ciclo For con le seguenti istruzioni:
    1.a) dichiaro una variabile chiamato num con valore che parte da 1;
    1.b) ripeto il ciclo For finché la variabile num non è minore o uguale a 100;
    1.c) incremento la variabile num di 1 per ogni ciclo;
2) all'interno del ciclo For applico la prima istruzione condizionale if controllando che il numero sia multiplo di 3 e di 5, in quel caso stampo in console "FizzBuzz", altrimenti:
    2.a) se il numero non è multiplo di 3 e di 5, controllo se il numero è multiplo solo di 3, in quel caso stampo in console "Fizz", altrimenti
    2.b) se il numero è multiplo solo di 5, stampo in console "Buzz", altrimenti:
    2.c) stampo in console semplicemente la variabile num;
