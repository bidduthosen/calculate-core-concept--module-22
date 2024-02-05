function getDiscount(params){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(params <= 100){
        let total = params * first100Price;
        return total;
    }
    else if( params <= 200){
        let first100Total = 100 * first100Price;
        let remainingQuantity = params - 100;
        let remainingTotal = remainingQuantity * second100Price;
        let total = remainingTotal + first100Total
        return total;
    }
    else{
        let first100Total = 100 * first100Price;
        let second100Total = 100 * second100Price;
        let remainingQuantity = params - 200;
        let remainingTotal = remainingQuantity * above200Price;
        let total = remainingTotal + first100Total + second100Total;
        return total;
    }
}


const discount = getDiscount(205);
console.log(discount)