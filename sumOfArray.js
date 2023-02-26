function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        console.log(i, numbers[i], sum);
    }
}

const myNumbers = [12, 65, 45, 78, 45, 91];
getSumOfArray(myNumbers);