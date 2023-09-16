//finally


function add(a, b){
    if(isNaN(a) || isNaN(b)){
        throw "Not a nuber !!!"
    }
    return a + b;

}
try{
    let x = add(10,100);
   console.log(x)
}catch(error){
    console.log(error)
}finally{
    console.log("Common Area !!!!")
}
