// function arrayIntersection(arr1,arr2) {
//     let arrintersection = [];
//     for (let i = 0; i<arr1.length; i++)
//         for (let j = 0; j<arr2.length; j++){
//             if (arr1[i]===arr2[j]){
//                 arrintersection.push(arr1[i]);
//             }
//         }
//         return arrintersection;
// } 

    // function arrayIntersection(arr1,arr2){
    //     let arrintersection = [];
    //     for (let i = 0; i<arr2.length; i++){
    //         if (arr1.includes(arr2[i])){
    //             arrintersection.push(arr2[i]);
    //         }
    //     }
    //     return arrintersection;
    // }

    function arrayIntersection(arr1,arr2){
        const arrintersection = [];
        const set1= new Set(arr1);
        for (elemento of arr2){
            if (set1.has(elemento)){
                arrintersection.push(elemento);
            }
        }
        return arrintersection;
    }
    
module.exports = arrayIntersection;
