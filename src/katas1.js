function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
    let resultado = [];
    let contador = 1;
    while(contador <= 20){
      resultado.push(contador);
      contador++;
    }
      
      console.log(resultado);
} oneThroughTwenty();


// call function oneThroughTwenty

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
   let resultado = [];
   let contador = 1;
    
   while (contador <= 20) {
     if(contador % 2 == 0) {
      resultado.push(contador);
     }
     
     contador++;
   } console.log(resultado);
} evensToTwenty();


// call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado = [];
  let contador = 1;
    
  while (contador <= 20) {
    if(contador % 2 == 1) {
      resultado.push(contador);
    }
    
    contador++;
  } console.log(resultado);
} oddsToTwenty();
  

// call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado = [];
  let contador = 1;

while (contador <= 100) {
  if (contador % 5 == 0) {
    resultado.push(contador);

  }
  contador++
} console.log(resultado);
} multiplesOfFive();
  

// call function multiplesOfFive

function squareNumbers() {
    
  /* Your code goes below
   Write a for or a while loop
   return the result */
   
   let resultado = [];
   let contador = 1;

 while(contador <= 10){
   let resultfinal = contador*contador;
   resultado.push(resultfinal);
   contador++;
 }
 console.log(resultado);
 } squareNumbers() ;
 

// call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado = [];
  let contador = 20;
    
   while (contador >= 1) {
     
      resultado.push(contador);
          
     contador--;
   } console.log(resultado);

} countingBackwards();

// call function countingBackwards

function evenNumbersBackwards() {
    
  /* Your code goes below
   Write a for or a while loop
   return the result */
   let resultado = [];
   let contador = 20;
 
   while(contador >= 1) {
     if(contador % 2 == 0){
      resultado.push(contador);

     }
     
     contador--;
   } console.log(resultado);

 } evenNumbersBackwards();


// call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado = [];
  let contador = 20;

  while(contador >= 1){
    if(contador % 2 == 1){
      resultado.push(contador);
    }
    contador--;
  }
  console.log(resultado);
} oddNumbersBackwards();
  

// call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado = [];
  let contador = 100;

  while(contador >= 1){
    if(contador % 5 == 0){
      resultado.push(contador);
    }
    contador--;
  } console.log(resultado);

}multiplesOfFiveBackwards();

// call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
  /* Your code goes below
 Write a for or a while loop
 return the result */
 let resultado = [];
 let contador = 10;

 while(contador >= 1){
   let resultfinal = contador*contador;
   resultado.push(resultfinal);
   contador--;
 }
 console.log(resultado);

} squareNumbersBackwards();

// call function squareNumbersBackwards

