function solve(onStock, ordered) {

    let resultOnStock = warehouse(onStock, {}); //  Съкратено създаваМ обект тук. Хитро е!
    let resultOrdered = warehouse(ordered, resultOnStock);

    for (const key in resultOrdered) {
        console.log(`${key} -> ${resultOrdered[key]}`);
    }

    function warehouse(arr, objectOperative) {    //

        let product = '';
        let quantities = 0;

        for (let i = 0; i < arr.length; i += 2) {
            product = arr[i];
            quantities = Number(arr[i + 1]);

            if (!objectOperative.hasOwnProperty(product)) {
                objectOperative[product] = quantities;
            } else {
                objectOperative[product] += quantities
            }

        }

        return objectOperative;

    }
}
(solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
))


// Chips -> 5
// CocaCola -> 9
// Bananas -> 44
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70