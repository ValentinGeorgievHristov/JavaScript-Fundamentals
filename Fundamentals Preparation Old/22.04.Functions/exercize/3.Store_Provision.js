function solve(arr1, arr2) {
    let store = {};

    function products(arr) {
        let good = "";
        let quantity = 0;

        for (let i = 0; i < arr.length; i += 2) {
            good = arr[i];
            quantity = arr[i + 1];
            if (store[good]) {
                store[good] += Number(quantity)
            } else {
                store[good] = Number(quantity)
            }
            
        }
    }

     products(arr1)
     products(arr2)
     //console.log(store);
 for (let good in store) {
    // console.log(good);
    // console.log(store[good]);
    console.log(`${good} -> ${store[good]}`);
    
}

}
solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])