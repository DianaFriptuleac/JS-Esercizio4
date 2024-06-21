/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex1*****');

 function area (l1 , l2){
   return l1 * l2;
}
const risultato = area(5, 6);
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex2*****');

function crazySum (numb1, numb2){
    if(numb1 === numb2 ){
return (numb1 + numb2 )* 3;
  } else{
    return numb1 + numb2;
  }
}
console.log(crazySum(4,4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex3*****');

function crazyDiff(num){
    console.log(Math.abs(num - 19));
    if (num > 19)
        return Math.abs(num - 19)* 3;
    return;
}
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex4*****');

function boundary(myNum){
if( myNum >= 20 && myNum <= 100 || myNum === 400 ){
    return true;
}else{
    return false;
}
}
console.log(boundary(300));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex5*****');

function epify (stringa){
  if (stringa.indexOf('EPICODE') === 0){
    return stringa;
  }else{
    return 'EPICODE' + stringa;
  }
}
console.log (epify('EPICODE ciao!'));



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex6*****');

function check3and7(positiveNumber){
  if (positiveNumber >= 0 && (positiveNumber % 3 === 0 || positiveNumber % 7 === 0)){
    return true;
  }else{
    return false;
  }
}
console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex7-soluzione1*****');


function reverseString(stringa1){
return (stringa1.split("").reverse("").join(""));
}
console.log(reverseString('EPICODE'));

console.log('*****ex7-soluzione2*****');

function reverseString(stringa2){
let revString = stringa2.split('');
revString.reverse('');
revString = revString.join('');
return stringa2 = revString;
}
console.log(reverseString('EPICODE'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex8-soluzione non mia*****');

const upperFirst = function (str) {
  let words = str.split(' ')
  let finalString = []
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0)
    let uppercaseChar = firstChar.toUpperCase()
    let cutString = words[i].slice(1)
    let finalWord = uppercaseChar + cutString
    finalString.push(finalWord)
  }
  console.log(finalString.join(' '))
}

upperFirst('hello world')




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex9*****');

function cutString(naMe){
  return naMe.slice(1, naMe.length - 1);
}
console.log(cutString('Epicode'));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('*****ex10*****');

function giveMeRandom (n) {
  const arrAy = [];
  for (let i = 0; i < n; i++){
  arrAy.push (Math.floor(Math.random()*10));
}
return Array;
}
console.log(giveMeRandom(5));