/*
 * Complete the 'quickSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quickSort(arr) {
    let left = [];
    let right = [];
    let equal = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < equal) left.push(arr[i]);
        if(arr[i] > equal) right.push(arr[i]);
    }
    let solution = [...left, equal, ...right];
    console.log(solution);
    return solution;
}

///////////////////////////////////////////////////////////////////
const quickSort = arr =>{

    let left = [],
        right = [],
        equals = []
        
    for (let i in arr) {      
        arr[i] < arr[0]? left.push(arr[i]): 
        arr[i] > arr[0]? right.push(arr[i]): 
        equals.push(arr[0])
    }
    
    return left.concat(equals).concat(right)    
}
