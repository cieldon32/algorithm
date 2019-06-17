const demo = function() {
  function duplicates(text){
    var ary = text.split("");
          
     var rdata = {};
     for(var i in ary){
        var c = ary[i].toLowerCase();
        rdata[c] ? (rdata[c]++) : (rdata[c]= 1) 
     }
      
     var result = 0;
     for(var k in rdata){
       if(rdata[k] > 1){
        result ++;
       }
         
     }
     return result;
  }
}
export default demo;