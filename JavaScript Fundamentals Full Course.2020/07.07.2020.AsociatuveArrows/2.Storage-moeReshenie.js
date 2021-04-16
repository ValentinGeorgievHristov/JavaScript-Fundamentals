function solve(arr){               //АЗ СИ Я ПИСАСАХ- В ТЕТРАДКАТА ИМАМ РЕШЕНИЕ НА СТАМО
    let shoppingList = new Map();

    for(let el of arr){
      let [product, quantityText] = el.split(' ');
      quantity = Number(quantityText)
    //   console.log(product, quantity);
    if(shoppingList.has(product)){
       quantity += shoppingList.get(product);
    }//else{
        shoppingList.set(product,quantity)
    }
     //console.log(shoppingList)
     for(const [product, quantity] of shoppingList){
        console.log(`${product} -> ${quantity}`)
     }
      
       }
  
  solve(['tomatoes 10',
  'coffee 5',
  'olives 100',
  'coffee 40']  
  )