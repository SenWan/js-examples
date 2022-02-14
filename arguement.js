// Unlimited parameters to a function using arguments

function addNumbers(num1, num2){
    let result = 0;
    for(const num of arguments){
        result += num;
    }
    return result;
}

const sumNumbers = addNumbers(10, 20, 30, 40);
console.log(sumNumbers);