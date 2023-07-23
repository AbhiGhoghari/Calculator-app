
const text = document.querySelector(".text");
const above_text  = document.querySelector(".above-text");
const changetheme = document.querySelector(".theme-chang-holder");
const round = document.querySelector(".round");
const body = document.querySelector("body");
const screen = document.querySelector(".screen");
const number = document.querySelector(".number");
const accent = document.querySelectorAll(".accent");
const color = document.querySelector(".color");
const span = document.querySelectorAll("span");
let currentNumber = '';
let firstNumber = null;
let screenResult = '';
let operator = null;
let previusOperation = null;

function updateScreen() {
    text.innerHTML =  currentNumber ;
  }


  function onNumberClick(number) {
   
    if (currentNumber === '0') {
      currentNumber = number.toString();
    } else {
     
      currentNumber += number.toString();
    }
    updateScreen();
  }

  function onOperatorClick(key){

    firstNumber = currentNumber;
    currentNumber = "";
    operator = key;
    

  }
  

  function resetScreen(){
    text.innerHTML = "0";
    currentNumber = "";
    previusOperation = "";
    above_text.innerHTML = "";
  }

  function calculate() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    previusOperation = firstNumber + operator + currentNumber + "=";
    above_text.innerHTML = previusOperation;
    currentNumber = result.toString();
    currentNumber =  currentNumber;
    
    updateScreen();
  }

  function onDeleteClick() {
    currentNumber = currentNumber.slice(0, -1); 
    if (currentNumber === '') {
      currentNumber = '0'; 
    }
    updateScreen();
  }

let count = 1;
let array = [body , screen , number  , color , changetheme ];
let array2 = ["body" , "screen" , "number" , "color" , "theme" ];
  changetheme.addEventListener("click" , function(){

    count++;
    if (count === 2){
        round.classList.add("center");
        for(let i = 0 ; i < array.length; i++ ){
            array[i].classList.add(array2[i]+"-light-theme");
        }
        accent[0].classList.add("accent-light-theme");
        accent[1].classList.add("accent-light-theme");
        
            
    }

    if(count === 3){
        round.classList.add("end");
        for(let i = 0 ; i < array.length; i++ ){
            array[i].classList.add(array2[i]+"-neon-theme");
        }
        for(var i = 0 ; i < span.length; i++){
           span[i].classList.add("span-neon-theme")
        }
        accent[0].classList.add("accent-neon-theme");
        accent[1].classList.add("accent-neon-theme");
        round.classList.add("round-neon");

    }
    if(count > 3){
        
        removeClass();
        
        count = 1;
    }
    

  })

  function removeClass(){
    for(let i = 0 ; i < array.length; i++ ){
        array[i].classList.remove(array2[i]+"-neon-theme");
    }
    for(var i = 0 ; i < span.length; i++){
       span[i].classList.remove("span-neon-theme")
    }
    accent[0].classList.remove("accent-neon-theme");
    accent[1].classList.remove("accent-neon-theme");
    round.classList.remove("round-neon");

    round.classList.remove("end");
        round.classList.remove("center");
        for(let i = 0 ; i < array.length; i++ ){
            array[i].classList.remove(array2[i]+"-light-theme");
        }
        accent[0].classList.remove("accent-light-theme");
        accent[1].classList.remove("accent-light-theme");


  }
  document.addEventListener('keydown', (event) => {
    // Check which key was pressed and call the appropriate function
    switch (event.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':  
        onNumberClick(event.key);
        break;
      case '.':
        // Handle decimal point input (if needed)
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        onOperatorClick(event.key);
        break;
      case 'Enter':
        // Use 'Enter' key for equals (=) operation
        calculate();
        break;
      case 'Backspace':
        onDeleteClick();
        break;
      case 'Escape':
        // Use 'Escape' key for clearing (reset) the screen
        resetScreen();
        break;
      // Add additional cases for other keyboard keys, if needed...
    }
  });


  // Attach click event listeners to number buttons
  document.getElementById('0').addEventListener('click', () => onNumberClick(0));
  document.getElementById('1').addEventListener('click', () => onNumberClick(1));
  document.getElementById('2').addEventListener('click', () => onNumberClick(2));
  document.getElementById('3').addEventListener('click', () => onNumberClick(3));
  document.getElementById('4').addEventListener('click', () => onNumberClick(4));
  document.getElementById('5').addEventListener('click', () => onNumberClick(5));
  document.getElementById('6').addEventListener('click', () => onNumberClick(6));
  document.getElementById('7').addEventListener('click', () => onNumberClick(7));
  document.getElementById('8').addEventListener('click', () => onNumberClick(8));
  document.getElementById('9').addEventListener('click', () => onNumberClick(9));
  document.getElementById('.').addEventListener('click' , () => onNumberClick("."));
  document.getElementById('Del').addEventListener('click',  onDeleteClick);
  document.getElementById("Reset").addEventListener('click' , function(){
    resetScreen();
  })
  document.getElementById('/').addEventListener('click', () => onOperatorClick('/'));
  document.getElementById('+').addEventListener('click', () => onOperatorClick('+'));
  document.getElementById('-').addEventListener('click', () => onOperatorClick('-'));
  document.getElementById('X').addEventListener('click', () => onOperatorClick('*'));
  document.getElementById('=').addEventListener('click', () => {
    if (firstNumber && operator && currentNumber) {
        calculate();
        
      }

  });
