let n="1275738896725017843678901247456356744634567"

89672501

 let x=(n.split(''))
let evencount=0,oddcount=0
for(i=0;i<x.length;i++)
{
    if(x[i]%2==0) 
     { 
    evencount++
        
    }
    else {
            oddcount++

    }
   
}
console.log(oddcount,evencount)


