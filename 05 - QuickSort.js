/* Choose an element, pivot (for ex 1st) compare it with rest...smaller no in the left side and larger element in the right side.
  1. Keep swapping the nummber in array whenever that element is smaller than the pivot element.
  2. After all swap change the first element or pivot with the index that we got by swapping the elements.


  Complexity--->
  Worst - O(n^2)  (Sorted Array)
  best - O(nlogn)
*/




/* --------------------------------------------------------------------------------------------------------------------------- */
// CHOSING THE PIVOT AND PLACE IT RIGHT POSITION
/* --------------------------------------------------------------------------------------------------------------------------- */

function pivot(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIndx = start;

  for (let i = start + 1; i < arr.length; i++){
    if (pivot > arr[i]) {

      swapIndx++; // tracking for the step 2

      [arr[swapIndx], arr[i]] = [arr[i], arr[swapIndx]] // Swap the elements...step 1

    }
  }

  [arr[start], arr[swapIndx]] = [arr[swapIndx], arr[start]] // Step 1 executed.

  return swapIndx; // Return the position of the swapped item.
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndx = pivot(arr, left, right)
  
    // Left
    quickSort(arr, left, pivotIndx)
  
    //Right
    quickSort(arr, pivotIndx+1, right)
    
  }
  return arr

}