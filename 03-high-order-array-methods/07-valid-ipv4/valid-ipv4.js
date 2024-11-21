const isValidIPv4 = (str) => {
    const octates = str.split(".");
    
    if (octates.length != 4) {
        return false;
    }

    return octates.every((octate) => {
        const num = parseInt(octate);
        return num >= 0 && num <= 255 && octate.toString() === num.toString();
    })
};

module.exports = isValidIPv4;
