// function changeColor(){
//     var button = document.getElementById("button");
//     button.style.color = "red";
// }

let button = document.getElementById("button")
button.onclick = function(){
    button.style.color = "yellow"
}

function changeColor(){
    const loop = document.getElementById("loop");
    loop.style.cssText = "color:red;";
}