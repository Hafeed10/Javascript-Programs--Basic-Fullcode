console.log(location.href);
console.log(location.hostname)
console.log(location.pathname)
console.log(location.protocol)

let button = document.getElementById("button");
button.addEventListener("click",() =>{
    location.reload();

});
