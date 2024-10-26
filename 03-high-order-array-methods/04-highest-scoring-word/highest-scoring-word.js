function highestScoringWord(str) {
    let words = str.split(' ');
    
    let scores = words.map((word)=> {
        let score = 0;
        for (const letter of word) { 
        score += letter.charCodeAt(0)- 96;
        }
        return score;
    });

    let highestScore = 0;
    let highestIndex = 0;

    for (let i = 0; i<scores.length;i++){
        if (scores[i] > highestScore){
            highestScore = scores[i];
            highestIndex = i;
        }
    }
    return words[highestIndex];
/**aabaaa/ */
}

module.exports = highestScoringWord;
