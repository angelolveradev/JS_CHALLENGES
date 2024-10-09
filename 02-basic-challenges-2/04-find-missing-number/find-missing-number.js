// function findMissingNumber(arr) {
//     let n = arr.length + 1;
//     let expected =  n* (n + 1) / 2
//     let actual = arr.reduce(function(sum,num){
//         return sum+num;
//     },0)
//     return expected - actual;

// }

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let expected =  n* (n + 1) / 2
    let actual = 0;
    for (let i=0; i<arr.length; i++){
        actual += arr[i];
    }
    return expected - actual;

}

module.exports = findMissingNumber;
