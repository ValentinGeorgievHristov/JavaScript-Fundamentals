function solve(arr) {

    let map = new Map();

    for (let products of arr) {
        [product, qtyText] = products.split(' ')
        let qty = Number(qtyText)
        //   console.log(product, qty);
        if (map.has(product)) {
            qty += map.get(product);
        } //else{  // тук е измамата деба
        map.set(product, qty);
    }


console.log(map);

}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);