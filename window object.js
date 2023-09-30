let height = document.getElementById("height");
let width = document.getElementById("width");

calculate = () => {
    let h = window.innerHeight;
    let w = window.innerWidth;
    height.innerText = h;
    width.innerText = w;
}

width.onload = calculate;
window.onresize = calculate;