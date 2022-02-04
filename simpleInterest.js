function simpleInterest(principle, time, rate){
    interest = principle * time * rate / 100;
    return interest;
}

console.log(simpleInterest(10, 20, 30));