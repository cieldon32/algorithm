export default function (num, decimal){
  const step = Math.pow(10, decimal);
  return (Math.floor(num * step)).toFixed(decimal);
}