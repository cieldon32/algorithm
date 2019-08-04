import toFixed from './to_fixed';

export default function(num){
  if(!num){
    return 0;
  }
  try{
    const billion = 10000 * 10000;
    const tenThousand = 10000;
    num = parseFloat(num);
    num = Math.floor(num * 100) / 100;
    if(num > 99999999){
      return `${toFixed(num / billion, 2)}亿`;
    } else if(num > 999999) {
      return `${toFixed(num / tenThousand, 2)}万`;
    } else if(num > 99999){
      return `${toFixed(num / tenThousand, 2)}万`;
    } else {
      return num;
    }
  } catch(e){
    return 0;
  }
}