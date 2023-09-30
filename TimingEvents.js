let number = document.getElementById("number");
let button = document.getElementById("button");

randomNumber = () =>{
    number.innerText = Math.random();
};

var randomTimeout = setTimeoutr(randomNumber, 1000);

button.addEventListener('click', () =>{
    clearTimeout(randomTimeout);
   
})
