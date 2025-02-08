

function cheackStringPalindrome(str){
    let newStr = '';
    let charArray = str.split('');
    
    for(let i= charArray.length - 1; i>=0 ; i--){
        newStr = newStr + charArray[i];
    }

    if(str.toLowerCase() == newStr.toLowerCase()){
        return "String is Palindrome"
    }
    else{
         return "String is Not Palindrome"
    }
    console.log(newStr)

}

console.log(cheackStringPalindrome("Madam"))