function solve(input) { // има проблем
    let boughtFurnitures = {};
    let totalMoneySpend = 0;
    let obj = {};
    for (let data of input) {
        let match = />>(?<product>[A-Za-z]+)<<(?<price>[0-9\.]+)!(?<quantity>[0-9]+\.?)/g.exec(data);
        if (match && !obj[product]) {
            obj[product] = {};
            obj[product].name = match.groups.name;
            obj[product].price = match.groups.price;
            obj[product].quantity = match.groups.quantity;
        }
    }
console.log(obj);
}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])