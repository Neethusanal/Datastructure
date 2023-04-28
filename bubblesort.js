function bubblesort(arr){
let swapped
do{
    for(let i=0;i<arr.length-1;i++){
        swapped=false
        if(arr[i]>arr[i+1])
            {
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
    }

}while(swapped)
}

const arr=[9,-6,-10,4,2,7]
bubblesort(arr)
console.log(arr)