function validAnagrams(str1,str2) {

    const charStr1 = str1.split('').reduce((acc,char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    },{});

    const charStr2 = str2.split('').reduce((acc,char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    },{});

return Object.keys(charStr1).every(
    (char) => charStr1[char] === charStr2[char]
);

    }


module.exports = validAnagrams;
