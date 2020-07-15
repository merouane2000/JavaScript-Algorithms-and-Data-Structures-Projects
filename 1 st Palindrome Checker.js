function palindrome(str) { 
    str = str.toLowerCase().replace(/[\W_]/g , ""); // remove all non-alphanumeric characters by nothing .
    var ispalindrome = true;
     //loop through half length of the array.
    for (let i =0 ; i<str.length/2 ; i++ ){

         //check if first half is equal to the second half.
        if(str[i] !== str[str.length - i - 1]){
            ispalindrome = false;
        }
    } 
    return ispalindrome
    }
    
    
    
    console.log(palindrome("almostomla"));
    // return false.