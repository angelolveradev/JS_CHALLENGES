function numberRange(startNum, endNum) {

    if(startNum === endNum) {
        return [startNum];

    };
    const arr = numberRange(startNum, endNum -1);
    arr.push(endNum);
    return arr;
}

module.exports = numberRange;
