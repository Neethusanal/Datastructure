function linearSearch(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===target)
        {
            return i
        }
    
      }      return -1
    
    
}
const arr=[2,3,4,5,6,7,8,9]
const result=linearSearch(arr,7)
console.log(result)

