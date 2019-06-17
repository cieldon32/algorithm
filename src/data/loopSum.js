const demo = function() {
  const sumLoop = arr => {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
  }
  console.log(sumLoop([1, 2, 3, 4])); // 10
}


export default demo;