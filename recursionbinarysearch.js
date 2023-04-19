function binarysearchRecursion(arr,target,start=0,end=arr.length-1)
{
    if (start>end)
    {
        return -1
    }
    const mid=Math.floor((start+end)/2)
    if(arr[mid]==target)
    {
        return mid;
    }
    else if(arr[mid]>target)
    {
        return binarysearchRecursion(arr,target,start,mid-1)
    }
    else
    {
        return binarysearchRecursion(arr,target,mid+1,end)
    }
}

const arr=[2,3,4,5,6,7,8,9,10]
const result=binarysearchRecursion(arr,8,start=0,end=arr.length-1)
console.log(result)