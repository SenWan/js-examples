function getUnique(arr){
    let uniqueArray = [];
    for(let i of arr){
        if(uniqueArray.indexOf(i) == -1){
            uniqueArray.push(i);
        }
    }
    return uniqueArray;
}

unique = getUnique([10, 20, 30, 40, 10, 20, 30, 40, 50]);
console.log(unique);