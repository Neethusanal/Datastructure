function count(string,value)
{  let count=0
    for( let i=0;i<=string.length;i++)
    { 
        if(string[i]==value)
        {
            count++
        }
    }
    return count
}
const string="Learning club"
const value="u"
const result=count(string,value)
console.log(result)