function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log("best", num1)
        return num1;
    }
    else if(num2 > num3 && num2 > num1){
        console.log('second in number one', num2)
    }
    else{
        console.log('three in number one', num3)
        return num3;
    }
}
const maxOfThreeNumber = maxOfThree(67, 76 , 48);
console.log(maxOfThreeNumber)