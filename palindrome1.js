function palindrome(string)
{
    for(i=0;i<string.length;i++)
    {
        if(string[i]==string[string.length-1])
        {
            return `${string} is palindrome`
        }
    
    else {
        return  `${string} is not palindrome`
    }
}
}
//const string="haiii"
const string="MalayalaM"
const result=palindrome(string)
console.log(result)