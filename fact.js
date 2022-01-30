function isFacorial(n){
    let answer = 1;
    for (let i=1; i<=n; i++){
        answer *= i;
    }
    return answer;
}
let n = 5;
answer = isFacorial(n);
console.log(answer);