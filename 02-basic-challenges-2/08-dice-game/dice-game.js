function rollDice(){
    return Math.floor((Math.random() * 6) + 1);
}

function diceGameSimulation(numOfSimulations) {
    const results = [];

    for (let i = 0; i<numOfSimulations; i++){
        let dice1 = rollDice();
        let dice2 = rollDice();
        let sum = dice1 + dice2;
        let result = ''; 
        
        if (sum === 7 || sum === 11){
            result = 'win';
        } else if (sum === 2 || sum === 3 || sum === 12 ){
            result = 'lose';
        } else {
            result = 'roll again';
        }
        
        results.push ({dice1, dice2, sum, result});
    }

    return results;
}

module.exports = diceGameSimulation;
