let string="Hello World"
let chartofind= "r"
let index= string.indexOf(chartofind)

if (index!==-1)
{
    console.log("The character ", chartofind, "was found at index",index) 
}
else{
    console.log("The character was not found in th string")
}