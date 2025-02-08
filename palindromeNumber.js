
var Number = 121;

function Cheackpalindrome(Number){
    let temp = Number;
    let revNo = 0

    while(Number > 0){
        let digit = Number % 10;
        revNo = revNo * 10 + digit
        Number = Math.floor(Number / 10);
    }
    
    if(temp == revNo){
       return "Number is Palindrom"
    }else{
       return "Number is Not Palindrom"
    }

}
console.log(Cheackpalindrome(Number))