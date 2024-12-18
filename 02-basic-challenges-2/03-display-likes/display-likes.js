// function displayLikes(names) {
//     const length = names.length;

//     if(length === 0){
//         return 'no one likes this';
//     } else if (length === 1){
//         return `${names[0]} likes this`;
//     } else if (length === 2){
//         return `${names[0]} and ${names[1]} like this`;
//     } else if (length === 3){
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else {
//         return `${names[0]}, ${names[1]} and ${length - 2} others like this`;    
//     }
// }

// function displayLikes(names) {
//     const length = names.length;
//     const messages = [
//         'no one likes this',
//         `${names[0]} likes this`,
//         `${names[0]} and ${names[1]} like this`,
//         `${names[0]}, ${names[1]} and ${names[2]} like this`
//     ];

//     return length > 3 
//     ? `${names[0]}, ${names[1]} and ${length - 2} others like this`
//     : messages[length]
// }

function displayLikes(names) {
    const length = names.length;
    
    switch (length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
}

module.exports = displayLikes;
