let store1 =[
    {
        name: "Apple",
        qty: 500,
        price: 50,
    },
    {
        name: "Orenge",
        qty: 200,
        price: 80,
    },
    {
        name: "Grepes",
        qty: 300,
        price: 90,
    },
];
let store2 =[
    {
        name: "Apple",
        qty: 100,
        price: 20,
    },
    {
        name: "Orenge",
        qty: 150,
        price: 40,
    },
    {
        name: "Grepes",
        qty: 400,
        price: 10,
    },
];

let store3 =[
    {
        name: "Apple",
        qty: 150,
        price: 40,
    },
    {
        name: "Orenge",
        qty: 160,
        price: 60,
    },
    {
        name: "Grepes",
        qty: 130,
        price: 70,
    },
];

let store1_total = 0;
let store2_total = 0;
let store3_total = 0;

let total_cost = {
    store1: store1_total,
    store2: store2_total,
    store3: store3_total,
};

store1.forEach((product) => {
    store1_total += product.price * product.qty;
    
});
store2.forEach((product) => {
    store2_total += product.price * product.qty;
    
});
store3.forEach((product) => {
    store3_total += product.price * product.qty;
    
});



total_cost.store1 = store1_total;
total_cost.store2 = store2_total;
total_cost.store3 = store3_total;

console.log(total_cost);
