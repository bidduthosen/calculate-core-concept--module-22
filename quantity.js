function woodQuantity(chair, table, window){
    const chairQuantity = 2; 
    const tableQuantity = 4;
    const windowQuantity = 10;

    const parChairQuantity = chair * chairQuantity;
    const parTableQuantity = table * tableQuantity;
    const parWindowQuantity = window * windowQuantity;

    const totalWoodCft =parChairQuantity + parTableQuantity + parWindowQuantity;
    return totalWoodCft;
}

const woodCft = woodQuantity(2, 2, 2);
console.log(woodCft)