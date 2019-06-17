// find the smallest value in an array
const findSmallestIndex = (array) => {
  let smallestElement = arry[0];
  let smallestIndex = 0;
  for(let i = 1; i < arry.length; i++){
    if(array[i] < smallestElement){
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {
  const sortedArray = [];
  const length = array.length;
  for(let i = 0; i < length; i++){
    //find the smallest element in the given array
    const smallestIndex = findSmallestIndex(array);

    //and the smallest element to new array
    sortedArray.push(array.splice(smallestIndex, 1)[0]);
  }
  return sortedArray;
};

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]

const demo = function() {
    
}


export default demo;