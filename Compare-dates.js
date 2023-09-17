
let today = new Date();
let someday = new Date();

someday.setFullYear(2100, 0, 14);
if (someday > today){
    text = "Today is before  February 1, 2100."
}else{
    text = "Today is after  February 1, 2100. "
}
console.log(text)