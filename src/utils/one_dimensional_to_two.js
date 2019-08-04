export default function(list) {
  let result = [];
  for(let i = 0; i < list.length; i += 2){
    const [i1, i2] = list.slice(i, i+2);
    const r = i2 ? [i1, i2] : [i1];
    list.push(r);
  }
  return result;
}