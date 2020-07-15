validator=(str)=>{
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s\-]?\d{4}$/g;/* 
    check the first if 1 + espace and check the 3 digit if with parentheses or not and 
    check if the espace exist and 
    move to the second 3 digit and check if they have espace or dash to move to the last 4 digits */ 
    return regex.test(str);
    /* this instruction return a boolean value if the number is valid or not */
}
console.log(validator("555-555-5555")) ;
// return true .