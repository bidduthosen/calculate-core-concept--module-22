const marks = [22, 53, 77, 24, 94, 64, 87, 19, 44];

function getMax(params){
    let maxNum = params[0];
    for(let mark of params){
        if(mark > maxNum){
            maxNum = mark;
        }
        // console.log(maxNum)

    }
    return maxNum;
}

const maxNumber = getMax(marks);
console.log(maxNumber)