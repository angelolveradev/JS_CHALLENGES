// function areAllCharactersUnique(str) {
//     for (let i=0; i<str.length;i++){
//         for (let j=i+1; j<str.length; j++) {
//             if (str[i]=== str[j]) {
//                 return false;
//             }
//         } 
//         }
//         return true;
//     }
    
    function areAllCharactersUnique(str){
        let unique = '';
        for (char of str){
            if (!unique.includes(char)){
                unique +=char;
            } else
        return false;
    }   
    return true;


    }
module.exports = areAllCharactersUnique;
