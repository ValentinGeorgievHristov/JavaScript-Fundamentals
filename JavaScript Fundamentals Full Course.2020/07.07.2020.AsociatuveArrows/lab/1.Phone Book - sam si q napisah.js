function solve(arr){
    let phonebook = {};

    for(const el of arr){
let tokens = el.split(' ');
let name = tokens[0];
let number = tokens[1];
// console.log(number)
phonebook[name]=number

    }
   let entries = Object.entries(phonebook) // kvp :)
   //console.log(entries)
   entries.forEach(element =>{
       console.log(`${element[0]} -> ${element[1]}`);
   }); 
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)