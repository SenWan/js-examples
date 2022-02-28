const gcd = (first, second) => {
    if(first % second == 0){
        return second;
    }
    else{
        return gcd(second % first, first);
    }
}

const lcm = (first, second) => first / gcd(first, second) * second;

console.log(lcm(10, 20));
console.log(gcd(10, 20));