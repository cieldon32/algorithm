const demo = function() {
  const countdow = (i) => {
    console.log(i);
    if(i < 0) {
        return false;
    }
    countdow(i - 1);
  }

  countdown(5);

}


export default demo;