function validateEmail(email) {

    if (email.indexOf('@')=== -1) {
        return false;
    }

    const [part1, part2] = email.split('@');
    if (part1.length < 2 || part2.length < 3) {
        return false;
    }

    const domain = part2.split('.');
    if (domain.length < 2  || domain[1].length < 2){
        return false;
    }

    return true;
}
//* validate email2*//
module.exports = validateEmail;
