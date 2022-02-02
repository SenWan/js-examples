function checkPrime(n){
    isPrime = true;
    for(i = 2; i < n; i++){
        if(n % i == 0){
            isPrime = false;
            break;
        }
        else{
            isPrime = true;
        }
    }
    return isPrime;
}

console.log(checkPrime(2));
console.log(checkPrime(8));
console.log(checkPrime(13));