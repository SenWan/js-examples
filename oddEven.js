function isEven(age){
    if(age % 2 == 0){
        return true;
    }
    return false;
}
const myAge = isEven(24);
console.log(myAge);