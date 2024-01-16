function findSmallestIndex(arr: number[]) {
  let smallest: number = arr[0];
  let smallestIndex: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr: number[]) {
  let newArr: number[] = [];
  const originalLength = arr.length;

  for (let i = 0; i < originalLength; i++) {
    let smallestIndex: number = findSmallestIndex(arr);
    newArr.push(arr.splice(smallestIndex, 1)[0]);
  }

  return newArr;
}

const unsortedArray: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray: number[] = selectionSort(unsortedArray);
console.log(sortedArray);
