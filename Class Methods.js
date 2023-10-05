class Home {
    color = "red";
    rooms = 3;
    doors = 5;
    open = () =>{
        console.log("open");
        // return "door is open";
    };
    close = () =>{
        console.log(" close");
        // return "door is open";
    };
    clean = () =>{
        console.log("clean");
        // return "door is open";
    };
};
let new_home = new Home(open);
// let new_home2 = new Home();
// console.log(new_home.color);
console.log("open");
// console.log(new_home2.color);