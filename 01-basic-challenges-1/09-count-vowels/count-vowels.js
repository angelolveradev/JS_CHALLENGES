function countVowels(str) {
    let vowels = str.toLowerCase();
    let count = 0;
    for (let i=0; i<vowels.length;i++){
        if (vowels[i] === 'a' || vowels[i] === 'e' || vowels[i] === 'i' || vowels[i] === 'o' || vowels[i] === 'u' ){
            count++;
        } 
    }
    return count;
}

module.exports = countVowels;
