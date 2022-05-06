const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);


// How long does it take to double every number in a given 
// array? 


// Both funsctions are 0(n). And though the insert function is barley faster in the beggining it grows noticably slower as the array grows longer. This is because .unshift has to place each new number into the begining of the array and return the new length and indexes where as .push just places it at the end.

//     FUNCTION   |   append   |   insert   
// ------------------------------------------
// extraLargeArray| 2.4378 ms  | 671.749 ms
// ------------------------------------------
// largeArray     |  565.5 μs  | 6.8907 ms
// ------------------------------------------
// mediumArray    |  109.2 μs  | 154.7 μs
// ------------------------------------------
// smallArray     |   76.5 μs  | 44.4 μs
// ------------------------------------------
// tinyArray      |   79.3 μs  | 34.7 μs



// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
