function generateHashtag(str) {
    if (str.trim() ==="") {
        return false;
    }

    const words = str.trim().split(/\s+/);
    const wordsToUpperCase = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    
    const hashtag = "#" + wordsToUpperCase.join("");

    return hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;




module.exports = generateHashtag;