function insertionsort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let key=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>key)
        {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }return arr
}
const arr=[9,4,-1,5,2,6]
const res=insertionsort(arr)
console.log(res)