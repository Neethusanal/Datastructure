function fibonacci(n)
{
    if(n==0)
    {
        return[0]
    }
    else if(n==1)
    {
        return[0,1]
    }
    else{
        let fibArr= fibonacci(n-1)
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2])
        return fibArr
    }
}
console.log(fibonacci(10))