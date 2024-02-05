const products = [
    {name : 't-shirt', price: 4, quantity : 4 }, //16
    {name : 'Shoes', price: 2, quantity : 2 },// 4
    {name : 'glass', price: 2, quantity : 1 },//2
    {name : 'pent', price: 3, quantity : 3 },//9
    {name : 'watch', price: 2, quantity : 2 },//4
];


function getAveragePrice(arr){
    let totalPrice = 0;
    for(let product of arr){
        let totalQuantityPriceAverage = product.price * product.quantity;
        totalPrice = totalQuantityPriceAverage + totalPrice;
    }
    return totalPrice;
}
const averagePrice = getAveragePrice(products);
console.log(averagePrice)