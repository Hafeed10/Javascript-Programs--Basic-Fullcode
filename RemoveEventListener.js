let number = document.getElementById("number");
let box = document.getElementById("box");
let button = document.getElementById("button");


randomNumber = () =>{
    number.innerText = Math.random();
    number.style.cssText = "color:yellow; font-size:50px;";
};

box.addEventListener("mouseover", randomNumber);
button.addEventListener("click",() =>{
    box.removeEventListener("mouseover", randomNumber)
    // box.addEventListener("mouseover", randomNumber)
});

