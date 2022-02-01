// remove duplicate from array usinge set

function getUnique(arr){
    let uniqueArr = [... new Set(arr)];
    return uniqueArr;
}
array = getUnique([10, 20, 30, 40, 10, 20, 30, 40]);
for(i of array){
    console.log(i);
}