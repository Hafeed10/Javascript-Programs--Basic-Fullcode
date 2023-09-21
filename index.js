// let heading = document.getElementById("demo").innerHTML = "Hello Javascript";
// console.log(heading)


// let heading = document.querySelectorAll("div.box h2")
// console.log(heading).



// let boxes = document.getElementsByClassName("box")
// console.log(boxes)



// let heading = document.getElementsByTagName("h1")
// console.log(heading)



// console.log(document.querySelectorAll("h1"))
// console.log(document.querySelector("h1"))



let heading = document.getElementById("heading");
heading.onclick = function(event){
    event.target.textContent = "Hafeez"
    
   

}