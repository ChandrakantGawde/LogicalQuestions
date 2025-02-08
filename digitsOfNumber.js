
var count = 0;
function CountDigits(no){
    
    while(no > 0){
        no % 10;
        count++;
        no = Math.floor(no / 10);
    }
    return count
}
console.log(CountDigits(12345))