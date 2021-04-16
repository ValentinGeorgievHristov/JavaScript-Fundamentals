function solve(arr) {
    let storage = {};
 

    for (let el of arr) {
        let [product, quantityText] = el.split(' ')
        let quantity = Number(quantityText);

        if(!storage.hasOwnProperty(product)){
            storage[product] = quantity;
        }else{
            storage[product] += quantity;
        }
        // console.log(storage)
        
        //console.log(entries)
        
    }
    let entries = Object.entries(storage)
    //console.log(entries)
 for(const [product, quantity] of entries){
             console.log(`${product} -> ${quantity}`)
         }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])