const demo = function() {
  const sumLoopREduce = arr => {
      return arr.reduce((curr, prev) => curr + prev);
  }
  console.log(sumLoopREduce([1, 2, 3, 4])); // 10
}


export default demo;