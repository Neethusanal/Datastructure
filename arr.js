const arr=[{"one":100},{"two":200},{"three":300}]
sum(arr)
function sum(arr)
{   let sum=0
    for(i=0;i<arr.length;i++)

    {
        for(const key in arr[i])
        {
            sum+=arr[i][key]
        }
        
    }
    console.log(sum)
}
