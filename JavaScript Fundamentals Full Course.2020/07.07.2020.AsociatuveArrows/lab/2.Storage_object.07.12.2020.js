function solve(arr) {

    let obj = {};
    for (let products of arr) {
        [product, qtyText] = products.split(' ')
        let qty = Number(qtyText)
        if (!obj.hasOwnProperty(product)) {
            obj[product] = qty
        } else {
            obj[product] += qty
        }
       
    }
    //console.log(obj);
    let entries = Object.entries(obj);
    for(let [key, value] of entries){
        console.log(`${key} -> ${value}`);
    }



}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);