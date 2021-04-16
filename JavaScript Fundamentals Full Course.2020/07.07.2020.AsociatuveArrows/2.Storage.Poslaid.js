function solve(input) {   //стамо не става
    let map = new Map();
    for (let string of input){
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if(!map.has(product,)){
            map.set(product, quantity);
        }else{
            let currQuantity = map.get(product);
            let newQuantity = currQuantity+=quantity;
            map.set(product.newQuantity);
        }
        let entries = Array.from(map.entries())

        entries.forEach(element => {
            console.log(`${element[0]} -> ${element[1]}`)
        })
    }
console.log();


}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])