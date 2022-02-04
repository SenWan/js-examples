function compundInterest(principle, time, rate){
    CI = principle * (Math.pow(1 + rate / 100), time);
    return CI;
}

answer = compundInterest(10, 20, 30);
console.log(answer);