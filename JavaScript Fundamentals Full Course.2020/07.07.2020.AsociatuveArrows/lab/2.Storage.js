function solve(input){ //ЗА ПРЕПИСВАНЕ В ТРТРАДКАТА ВАЖНО Е КАТО КОНВЕРТОР
    let storage = new Map();
//ЗА ПРЕПИСВАНЕ В ТРТРАДКАТА ВАЖНО Е КАТО КОНВЕРТОР
    for(const line of input){
let [item,quantityText]= line.split(' ');
let quantity = Number(quantityText);

if(storage.has(item)){
quantity += storage.get(item);
}
storage.set(item,quantity)
    }
for(const [key,value] of storage){
    console.log(`${key} -> ${value}`)
}
    }

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)