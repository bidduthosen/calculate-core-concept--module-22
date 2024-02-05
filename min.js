const marks = [22, 53, 77, 24, 94, 64, 87, 19, 44];
function getMin(params){
    let minNum = params[0];
    for(let min of params){
        if(min < minNum){
            minNum = min;
        }
    }
    console.log(minNum)
    return minNum;
}

console.log(getMin(marks));