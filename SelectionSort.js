// Works exactly like BubbleSort the difference is that in this we move the smallest element to the front.
//  Complexity --->
//    Worst => O(n^2)
//    Best => O(n^2)

let arr = [23, 5, 21, 6, 9]

console.log(arr)

function SelectionSort(arr) {
  let index; // Store the index of the smallest element.
  
  for (let i = 0; i < arr.length; i++){

    index = i;
  
    for (let j = i+1; j < arr.length-1; j++){
  
      if (arr[index] > arr[j]) { // If found new min then update the min index value.
        index = j;
      }

    } 
    
    if(i !== index){
      [arr[i], arr[index]] = [arr[index], arr[i]]
    }

  }
}

SelectionSort(arr)

console.log(arr)