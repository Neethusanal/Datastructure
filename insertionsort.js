function insertionsort(arr){
    
    for(i=1;i<arr.length;i++)
    {
        let key=arr[i]
        for(let j=i-1;(i>=0&&arr[j]<key);j--)
        {
            arr[j+1]=arr[j]
            arr[j]=key
        }
    }
    return arr
}

const arr=[9,-3,7,5,-1]
const res=insertionsort(arr)
console.log(res)