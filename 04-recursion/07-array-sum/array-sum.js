function arraySum(sum) {
    if (sum.length === 0){
        return 0;
    }

    return sum[0] + arraySum(sum.slice(1));
}
module.exports = arraySum;
