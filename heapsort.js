function heapsort(arr)
{
    let n=arr.length
    for(i=Math.floor(n/2)-1;i>=0;i--)
    {
        heapify(arr,n,i)
    }
    for(i=n-1;i>=0;i--)
    {
        let temp=arr[0]
        arr[0]=arr[i]
        arr[i]=temp
         heapify(arr,i,0)
    }
    return arr
}

function heapify(arr,n,i)
{
    let largest=i
    let left= 2*i+1
    let right=2*i+2
    if(left<n&& arr[left]>arr[largest])
    {
        largest=left
    }
    if(right<n &&arr[right]>arr[largest])
    {
        largest=right
    }
    if(!largest==i)
    {
        let temp=arr[i]
        arr[i]=arr[largest]
        arr[largest]=temp
    }
}
let arr=[5,2,8,4,0,1]
let sortedarr=heapsort(arr)
console.log(sortedarr)