function removeDuplicates(array) {
    let totalchar = array.lenght-1;
    for(let i = 0; i<totalchar.length; i++){
        if(array[i] === array[totalchar]){
            delete(array[i]);
            totalchar--;
        }
    }
    return array;
}

module.exports = removeDuplicates;
