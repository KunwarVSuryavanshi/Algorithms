// Larger one moves to the very last, by swapping the largest number among the two.
// Complexity is --->
//      Worse = O(n ^ 2)
//      Best = O(n) (When the array is sorted or nearly sorted)


let arr = [34, 45, 29, 8]

console.log(arr)

function bubbleSort(arr) {
  let swaps = false;  
  for (let i = 0; i < arr.length; i++){
    
    for (let j = 0; j+1 < arr.length - i; j++){ // arr.length -i because last element is already sorted.

      // Swap the two numbers, if former one is larger than the latter one.
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps = true;
      }
  
    }
    if (!swaps) break; //If no swapping is done then the array is already sorted....there should be atleast one swap in unsorted one.
  }

}

bubbleSort(arr)

console.log(arr)