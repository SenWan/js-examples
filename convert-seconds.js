function convertSeconds(seconds){
    hours = parseInt(seconds / 3600);
    minutes = parseInt((seconds - hours * 3600) / 60);
    remainingSeconds = parseInt(seconds - hours * 3600 - minutes * 60);
    return hours, minutes, remainingSeconds;
}
let result = convertSeconds(5000)
console.log(result);