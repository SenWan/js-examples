function isLeap(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true;
    }
    return false;
}

const myYear = isLeap(2025);
console.log(myYear);