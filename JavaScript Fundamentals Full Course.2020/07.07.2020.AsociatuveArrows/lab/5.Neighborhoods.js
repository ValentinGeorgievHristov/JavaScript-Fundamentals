function solve(input) {
    let neighbourhoodsNames = input
        .shift()
        .split(', ');

    let neighbourhoods = {};

    for (const name of neighbourhoodsNames) {
        neighbourhoods[name] = [];
    }

    for (const line of input) {
        let [neighbourhood, person] = line.split(' - ');

        if (neighbourhoods[neighbourhood]) {
            neighbourhoods[neighbourhood].push(person); //fixed
        }
    }

    let sortedNeighbourhood = Object //do tuk e ok
        .entries(neighbourhoods)
        .sort((a, b) => b[1].length - a[1].length);

    //console.log(sortedNeighbourhood);
    for (const entrie of sortedNeighbourhood) {
        console.log(`${entrie[0]}: ${entrie[1].length}`);

        for (const person of entrie[1]) {
            console.log(`--${person}`)
        }
    }

}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])