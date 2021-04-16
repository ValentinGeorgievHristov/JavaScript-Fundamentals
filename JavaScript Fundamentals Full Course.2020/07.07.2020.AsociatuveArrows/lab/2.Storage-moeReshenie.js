function solve(arr){               //АЗ СИ Я ПИСАСАХ- В ТЕТРАДКАТА ИМАМ РЕШЕНИЕ НА СТАМО
   let map = new Map();

   for(let products of arr){
     let [product, qtyText] = products.split(' ');
     qty = Number(qtyText)
   
   if(map.has(product)){
      qty += map .get(product);
   }//else{
       map.set(product,qty)
   }
    console.log(map)
    for(const [product, qty] of map){
       console.log(`${product} -> ${qty}`)
    }
     
      }
 
 solve(['tomatoes 10',
 'coffee 5',
 'olives 100',
 'coffee 40']  
 )