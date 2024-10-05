function removeDuplicates(array) {
    let totalchar = array.length;
    for(let i = 0; i<totalchar.length; i++){
        for (let j = i+1; j<totalchar; j++){
            if (array[i] === array [j]){
                array.splice(j,1);
                totalchar--;
                j--;
            }
        }
        }

    return array;
}

module.exports = removeDuplicates;
