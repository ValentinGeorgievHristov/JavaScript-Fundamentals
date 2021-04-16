function solve(input) {

    let players = henerateHands(input);

    Object.keys(players).forEach((player) => {
        console.log(`${player} - ${totalDeckPower(players[player])}`);
    })

    function totalDeckPower(cardsSet) {
        let totalPower = 0

        cardsSet.forEach((card) => {

        })

        return totalPower;
    }

    function generateHands(arr) {
        let obj = {};

        arr.forEach((playerInfo) => {
            let [player, cards] = playerInfo.split(': ');

            if (!obj[player]) {
                obj[player] = new Set(card.split(', '))
            } else {
                cards.split(', ');
                obj[player].add(card);
            }
        })
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);