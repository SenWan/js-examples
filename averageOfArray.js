function calculateAverage(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        average = sum / numbers.length;
    }
    return average;
}

const output = calculateAverage([10, 20, 30, 40]);
console.log(output);