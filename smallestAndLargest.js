const arr = [10, 20, 5, 40, 60];
let smallest = arr[0];
let largest = arr[0];

for(i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log(smallest);
console.log(largest);