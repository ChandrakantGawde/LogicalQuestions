var str = "chandu";

function StrRev(str){

    // Using charAt method

    //var length = str.length; // get length
    var getRev = '' // empty string to store result

    // while(length >= 0){
    //    var rev = str.charAt(length); // get char from end
    //    getRev = getRev+rev; // concate

    //    length--; // reduce length
    // }

  
    // convert string using charactor array split method 
    let charArray = str.split('');
    var length = charArray.length;
    
    for(let i= length-1 ; i>=0 ; i--){
        getRev = getRev + charArray[i];
    }
    console.log(getRev);
};

StrRev(str);