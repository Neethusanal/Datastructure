function fibonacci(n)
{
    if(n<=1)
    {
        return n
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}
const result=fibonacci(10)
console.log(result)