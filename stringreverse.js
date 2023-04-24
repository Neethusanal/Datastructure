function stringreverse(string)
{
    let newstr=""
    for(let i=string.length-1;i>=0;i--)
    {
        newstr+= string[i]
    }
    return newstr
    
}
const string="Hello i am learning js with DSA"
const result=stringreverse(string)
console.log(result)