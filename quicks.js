function quicksort(arr)
{
    if(arr.length<2)
    {
        return arr
    }
    let pivot=arr[arr.length-1]
    let leftarr=[]
    let rightarr=[]

    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]<pivot)
        {
            leftarr.push(arr[i])
        }
        else{
            rightarr.push(arr[i])
        } 
    }return[...quicksort(leftarr),pivot,...quicksort(rightarr)]
    // let left=quicksort(leftarr)
    // let right=quicksort(rightarr)
    // return left.concat([pivot],right)
    
}
const arr=[9,3,5,1,7,22,8,66]
const res=quicksort(arr)
console.log(res)