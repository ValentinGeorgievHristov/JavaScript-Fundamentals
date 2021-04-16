function solve(arr1,arr2 ) {
let warehouse1 = [];
for (const product of arr1) {
    let persObj = {};
    persObj.products= product;
    ///persObj.qty= quantity;
    warehouse1.push(persObj)
    console.log(persObj)
}

 }

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
             
);