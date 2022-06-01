
const getString=(str)=>{
     
    reverseString= str.split("").reverse().join("");
    if (str===reverseString) {
        console.log("its is a Palindrome")
    }else{
        console.log("It is not a palindrome")
    }
}

getString("abba")