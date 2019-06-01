let display = '0';
let buffer = '';
const screen = document.querySelector('.screen');

document.querySelector('.calculator-begin').addEventListener("click",function(event){
    if (event.target.tagName === 'BUTTON'){
        buttonClick(event.target.innerText);
    }
});

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
};

function handleNumber( value ) {
    if (display === "0") {
        display = value;
    }
    else{
        display += value;
    }
    displayOnScreen();
};


function handleSymbol(value){
    if (value === 'C'){
        
    buffer = '';
    display = '0';
    operation = 'NA'
    displayOnScreen();
    }
    else if (value === '←'){
        display=display.slice(0, -1);
        displayOnScreen();
        if (display === ''){
            display = '0';
            displayOnScreen();
        }
    }
    else if (value === '÷' ){
        buffer = buffer + display + '/';
        display = '0';
        displayOnScreen();
        console.log(buffer);
    }
    else if (value === 'X' ){
        buffer = buffer + display + '*';
        display = '0';
        displayOnScreen();
        console.log(buffer);
    }
    else if (value === '-' ){
        buffer = buffer + display + '-';
        display = '0';
        displayOnScreen();
        console.log(buffer);
    }
    else if (value === '+' ){
        buffer = buffer + display + '+';
        display = '0';
        displayOnScreen();
        console.log(buffer);
    }
    else{
        buffer=buffer+display;
        display=eval(buffer);
        displayOnScreen();
        console.log(buffer);
        buffer = '';
    }
};

function displayOnScreen() {
    screen.innerText = display;
}