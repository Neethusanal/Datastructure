function isString(n)
{
    if(typeof n==='string'|| n instanceof String)
    {
        return true
    }
    else 
    {
        return false
    }
}
 const n=123
//const n="stringinnnn"
const res=isString(n)
console.log(res)