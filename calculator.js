function add(a, b){
    const total = a + b;
    return total;
}
function minus(a, b){
    const total = a - b;
    return total;
}
function multiplication(a, b){
    const total = a * b;
    return total;
}
function divide(a, b){
    const total = a / b;
    return total;
}


function getCalculate(a, b, operation){
    if(operation === 'add'){
        let added = add(a, b);
        return added
    }
    else if(operation === 'minus'){
        const minuses = minus(a, b);
        return minuses;
    }
    else if(operation === 'multiplication'){
        const multiplicationes = multiplication(a, b);
        return multiplicationes;
    }
    else if(operation === 'divide'){
        const divides = divide(a, b);
        return divides;
    }
    else{
        return 'provide a operation!'
    }
}

const apple = 40;
const banana = 50;
const operationName = 'multiplication';
const operationDetails = getCalculate(apple, banana, operationName);
console.log(operationDetails);
