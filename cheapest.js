const phones = [
    {name: 'samsung', price: 22000, color: 'red', ram: '3gb'},
    {name: 'Xiaomi', price: 7000, color: 'red', ram: '3gb'},
    {name: 'Realme', price: 36000, color: 'red', ram: '3gb'},
    {name: 'Iphone', price: 154000, color: 'red', ram: '3gb'},
    {name: 'Nokia', price: 8000, color: 'red', ram: '3gb'}
];

function getCheapestPhone(phones){
    let pricePhone = phones[0];
    for(let phone of phones){
        if(phone.price > pricePhone.price){
            pricePhone = phone;
        }
    }
    return pricePhone;
}
const cheap = getCheapestPhone(phones);
console.log(cheap);