function isPalindrome(str) {
    let cleanstr = '';
    for (let i=0; i<str.length;i++){
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanstr += char;
        }
    }

    let reversed = '';
    for (let i=cleanstr.length-1;i>=0;i--){
        reversed += cleanstr[i];
    }

    if (reversed === cleanstr){
        return true;}
        else {
            return false;
    }

}

module.exports = isPalindrome;
