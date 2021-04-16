function solve(arr){
    let phonebook = new Map();
  
    for(const el of arr){
      let tokens = el.split(' ');
      let name = tokens[0];
      let number = tokens[1];
      
      phonebook.set(name, number)
          }
          for(const [name,number] of phonebook){
          console.log(`${name} -> ${number}`)
      
      }
       }
  
  solve(['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344']
  )