// function removeDuplicates(array) {
//     let totalchar = array.length;
//     for(let i = 0; i<totalchar; i++){
//         for (let j = i+1; j<totalchar; j++){
//             if (array[i] === array [j]){
//                 array.splice(j,1);
//                 totalchar--;
//                 j--;
//             }
//         }
//         }

//     return array;
// }

    function removeDuplicates(array) {
        let unique = [];
        for (let i=0; i<array.length; i++) {
            if (!unique.includes(array[i])){
                unique.push(array[i])
            }
        }
        return unique;
    }

module.exports = removeDuplicates;
