function selectionsort(arr) {
    // outer loop to select one element at a time
    for(let i = 0; i < arr.length; i++) {
        let min = i; // initialize minimum index

        // inner loop to find the smallest element
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j; // update minimum index
            }
        }

        // swap if minimum is not at its original position
        if(i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    // return sorted array
    return arr;
}

const arr = [0, -1, 5, 8, 22];
const res = selectionsort(arr);
console.log(res); // [-1, 0, 5, 8, 22]
