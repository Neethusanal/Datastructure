function frequency(string)
{
    let count=[]
    for(i=0;i<string.length;i++)
    {
        let char=string[i]
        if(count[char])
        {
            count[char]++
        }
        else
        {
            count[char]=1
        }
        
            
        
    }
    return count
}

const string="wonderland"
 const result=frequency(string)
console.log(result)