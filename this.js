// console.log(this);
let myFunc = () =>{
    console.log(this);
}
myFunc();

var hafe = {
    firstName : "hafe",
    lastName : " muhammed",
    id :33433,
    myFunc:function(){
          return this
    }
  
}
console.log(hafe);