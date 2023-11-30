/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


const area = function(l1, l2)
{
    
    return l1*l2
}



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum=function(n1,n2)
{
if( n1 === n2)
   return (n1+n2) *3
else
return n1+n2
}


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


const crazyDiff = function(numAbsolute){
if(numAbsolute>19){
    
    return (Math.abs(numAbsolute-19)*3)
} 
    else {
    return Math.abs(numAbsolute-19)
    }

}



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function(n){
if (n>20 && n<=100 || n === 400){
return true
}
else{
return false
}
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function(string){

if (string.startsWith('EPICODE')){

return string
}
else  {
    return 'EPICODE '+ string
}
}




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function(num){
if( num <0){
    return 'Inserisci numero positivo'
}
else if (num % 3 === 0 || num % 7 === 0){

   return  'Il numero è multiplo di 3 o 7'
}
else{
  return  'il numero non è multiplo 3 o 7'
}

}



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString=function(reverseStr){
    
   return reverseStr.split('').reverse().join('')
   
}



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function(stringa){
stringa = stringa.split('')
for (let i=0; i< stringa.length; i++){
    stringa[i] = stringa[i].charAt(0).toUpperCase() + stringa[i].slice(0)
}
console.log(upperFirst('ciao come'))
return stringa.join('')
}




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
