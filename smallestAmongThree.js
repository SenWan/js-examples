function findSmallest(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    return third;
}

const smallest = findSmallest(60, 50, 40);
console.log(smallest);