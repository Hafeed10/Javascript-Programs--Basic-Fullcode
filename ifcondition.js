// const calc = (a, b) => {
//     if (a > b) {
//         return a + b;
//     };
//     return a;
// };
// console.log(calc(10, 5));

//if else codition//

// const calc = (a, b) => {
//     if (a > b) {
//         console.log("if part")
//         return a + b;
//     } else{
//         console.log("elsse part")
//         return a - b;
//     };
   
// };
// console.log(calc(10, 50));


// const calc = (a, b) => {
//     if (a < b) {
//         console.log("if part")
//         return a + b;

//     } else {
//         return a - b;
//         console.log("else part")
//     };
// }
// console.log(calc(10, 5))


// time = 10;

//  < 12 -good morning

// 12 > 16 < -good afternoon

// 16 20 good evenig 

// 20 < time < 24 goog night 

// const wish = (time) => {
//     if (time <= 12){
//         return "good morning"

//     } else if (time > 12 && time <= 16){
//         return "good afternoon"

//     }else if (time > 16 && time <= 20){
//         return " good evenig "
//     } else if (time > 20 && time <= 24){
//         return "goog night "
//     }
// }
// console.log(wish(20)); 



// let x = 60;
// if (x > 10){
//    console.log( x + 10);
// }else{
//     console.log(x)
// }

// x > 10? console.log( x + 10) : console.log(x);


let today = new Date().getDay();
console.log(today)
let day =""

switch (today ) {
    case 0 :{
        day = "sunday";
        break;
    }
       
    case 1 :{
        day = "monday";
        break;
    }
    case 2 :{
        day = "tuesday";
        break;
    }
    case 3 :{
        day = "wednesday";
        break;
    }
    case 4 :{
        day = "thursday";
        break;
    }
    case 5 :{
        day = "friday";
        break;
    }
    case 6 :{
        day = "saturday";
    }
        
       
}
console.log(day)