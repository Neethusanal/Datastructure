function selectionsort(arr)
{
    for(i=0;i<arr.length;i++)
    {
        let min=i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[min])
            {
                min=j
            }
        }if(i!==min)
        {
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }return arr
}
const arr=[9,4,-1,5,2,6]
const res=selectionsort(arr)
console.log(res)