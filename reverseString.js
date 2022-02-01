function reverseStrint(str){
    let newString = '';
    for(i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}

reverse = 'Hell World';
console.log(reverseStrint(reverse));