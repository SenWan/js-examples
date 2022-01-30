function isFacorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * isFacorial(n - 1);
}

let n = 5;
answer =  isFacorial(5);
console.log(answer);