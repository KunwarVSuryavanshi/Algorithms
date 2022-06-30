// Divide array in left (one element intially) and right. Take the element from the right array and `insert` it into left array by checking where its value would lie.


let arr = [2, 34, 5, 3, 8]

function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {  // This is for iterating right array. (Unsorted one)
    let currentVal = arr[i]

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { // This is for iterating left `sorted` array.

      arr[j + 1] = arr[j]

    }

    arr[j + 1] = currentVal
  }

}

insertionSort(arr)

console.log(arr)

/* 

Visually working

arr = [2, 34, 5, 3, 8]

CurrentVal = 34, 

i=1, 
j=0, 
inner loop doesn't execute
[2, 34, 5, 3, 8]
-----------------------------------

CurrentVal = 5,

i=2,
j=1
[2, 34, 34, 3, 8]

i=2,
j=0,
inner loop doesn't execute
[2, 34, 34, 3, 8]

For arr[j+1] = currentVal
[2, 5, 34, 3, 8]
------------------------------------

*/


