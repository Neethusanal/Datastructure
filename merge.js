function mergesort(arr)
{
    if(arr.length<2)
    {
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const leftarr=arr.slice(0,mid)
    const rightarr=arr.slice(mid)
    return merge(mergesort(leftarr),mergesort(rightarr))
}
function merge(leftarr,rightarr)
{
    const sortedarr=[]
    while(leftarr.length && rightarr.length)
    {
        if(leftarr[0]<rightarr[0])
        {
            sortedarr.push(leftarr.shift())
        }
        else
        {
            sortedarr.push(rightarr.shift())
        }
    }return [...sortedarr,...leftarr,...rightarr]
}
const arr=[9,3,5,1,7,22,8,66]
const res=mergesort(arr)
console.log(res)