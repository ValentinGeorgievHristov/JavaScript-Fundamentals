function solve(input){
    let map= new Map;

    for(let commands of input){
        [command, num] = commands.split(' ');

        map.set(command, num);
     
    }
   
     for(const [key, value] of map){
         console.log(`${key} -> ${value}`);
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])