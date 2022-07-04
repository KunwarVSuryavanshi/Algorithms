/* 
In this we keep on dividing the array till there is one element at end and then we merge last nodes of the tree obtained from dividing, and 
sort those merged elements.

Divide and Conquer

Divide -> Merge -> Sort -> Merge -> Sort ....


Time Complexity ===> O(nlogn) {for all cases}
Space Complexity ===> O(n)

*/


const mergeArr = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }  else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

const divideArr = (arr) => {
  if (arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length / 2)

  let leftArr = divideArr(arr.slice(0, mid))
  let rightArr = divideArr(arr.slice(mid))

  
  return mergeArr(leftArr, rightArr)
}


console.log(divideArr([10, 2, 3, 1, 6]))
