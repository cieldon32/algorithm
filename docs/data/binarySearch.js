const demo = function() {
    const binarySearch = (list, target, min=0, max=list.length - 1) => {
        let arrayLength = list.length;
        while (min <= max) {
            let mid = Math.floor((min + max) / 2);
            let guess = list[mid];
            if(guess === item) {
                return mid;
            } else if (guess > item) {
                max = mid -1;
                list = list.slice(0, mid);
                return binarySearch(list, item, min, max);
            } else {
                min = mid + 1;
                list = list.slice(mid, arrayLength);
                return binarySearch(list, item, min, max);
            }
        }
        return null;
    }
    
    
    const createArr = ( n ) => Array.from({length: n}, (v, k) => k + 1);
    const myList = createArr( 100 );
    console.log( binarySearch( myList, 3 ) ); // 2
    console.log( binarySearch( myList, -1 ) ); // null
}

export default demo;