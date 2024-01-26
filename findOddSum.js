function getSum(array) {
    const oddNumbers = [];
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        if(element % 2 == 1){
            sum = sum + element;
            console.log(index, element, sum);
            oddNumbers.push(element);
        }
        
    }
}

const myArray = [12, 23, 31, 40, 50, 67];
getSum(myArray);