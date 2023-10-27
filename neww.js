
function second(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length ; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [7, 2, 4, 9, 11, 33, 6];
console.log(second(arr));
console.log(arr[arr.length-2])







